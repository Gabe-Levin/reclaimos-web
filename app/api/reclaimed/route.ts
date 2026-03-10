import { NextResponse } from "next/server";

export const runtime = "nodejs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { error: "Service unavailable." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/global_counter?select=total_hours_reclaimed&id=eq.1`,
      {
        method: "GET",
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to fetch counter." },
        { status: 500 },
      );
    }

    const rows = (await response.json()) as
      | { total_hours_reclaimed: number }[]
      | null;

    const totalHours = rows?.[0]?.total_hours_reclaimed ?? 0;

    return NextResponse.json(
      { total_hours_reclaimed: totalHours },
      {
        status: 200,
        headers: { "Cache-Control": "public, max-age=60, s-maxage=60" },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch counter." },
      { status: 500 },
    );
  }
}
