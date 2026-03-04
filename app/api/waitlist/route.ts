import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const MAX_TRACKED_IPS = 5000;
const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const requestCountsByIp = new Map<string, RateLimitEntry>();

function pruneRateLimitMap(now: number) {
  for (const [ip, entry] of requestCountsByIp.entries()) {
    if (now >= entry.resetAt) requestCountsByIp.delete(ip);
  }
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(",");
    if (firstIp) return firstIp.trim();
  }

  return request.headers.get("x-real-ip")?.trim() ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  pruneRateLimitMap(now);

  if (!requestCountsByIp.has(ip) && requestCountsByIp.size >= MAX_TRACKED_IPS) {
    const oldestIp = requestCountsByIp.keys().next().value as string | undefined;
    if (oldestIp) requestCountsByIp.delete(oldestIp);
  }

  const current = requestCountsByIp.get(ip);

  if (!current || now >= current.resetAt) {
    requestCountsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  current.count += 1;
  requestCountsByIp.set(ip, current);
  return false;
}

export async function POST(request: NextRequest) {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { error: "Signup is unavailable right now." },
      { status: 500 },
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests." },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  const payload = (await request.json().catch(() => null)) as { email?: string } | null;
  const normalizedEmail = payload?.email?.trim().toLowerCase();

  if (
    !normalizedEmail ||
    normalizedEmail.length > 254 ||
    !emailRegex.test(normalizedEmail)
  ) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_emails`, {
    method: "POST",
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify([{ email: normalizedEmail }]),
  });

  if (response.ok) {
    return NextResponse.json(
      { ok: true },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  }

  const errorPayload = (await response.json().catch(() => null)) as { code?: string } | null;
  const isDuplicate = response.status === 409 || errorPayload?.code === "23505";
  if (isDuplicate) {
    return NextResponse.json(
      { ok: true, duplicate: true },
      { status: 409, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { error: "Unable to save signup." },
    { status: 500, headers: { "Cache-Control": "no-store" } },
  );
}
