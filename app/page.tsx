"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Features from "@/components/Features";
import Privacy from "@/components/Privacy";
import ReclaimedCounter from "@/components/ReclaimedCounter";
import Themes from "@/components/Themes";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stats = [
    {
      value: "18h 36m",
      label:
        "spent each week on social and video feeds by the typical online adult.",
      sources: [
        {
          label: "DataReportal Digital 2026 (Oct 2025)",
          url: "https://datareportal.com/reports/digital-2026-global-overview-report",
        },
      ],
    },
    {
      value: "46%",
      label: "of U.S. teens (ages 13-17) say they are online almost constantly.",
      sources: [
        {
          label: "Pew Research Center (Jul 10, 2025)",
          url: "https://www.pewresearch.org/internet/fact-sheet/teens-and-internet-device-access-fact-sheet/",
        },
      ],
    },
    {
      value: "$490.9B",
      label: "combined Google + Meta ad revenue in 2025.",
      sources: [
        {
          label: "Alphabet 2025 Form 10-K",
          url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm",
        },
        {
          label: "Meta 2025 Form 10-K",
          url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
        },
      ],
    },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      if (response.ok) {
        setSubmitted(true);
        return;
      }

      if (response.status === 409) {
        setSubmitted(true);
        return;
      }

      if (response.status === 429) {
        setSubmitError("Too many attempts. Please try again in a few minutes.");
        return;
      }

      setSubmitError("Couldn’t save your email right now. Please try again soon.");
    } catch {
      setSubmitError("Couldn’t save your email right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleGetAppClick() {
    setShowToast(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setShowToast(false), 2500);
  }

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-black text-white">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed right-6 top-6 z-50 rounded-xl border border-white/20 bg-black/85 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.4)] backdrop-blur transition-all duration-250 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0"
        }`}
      >
        Coming soon.
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,68,68,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(239,68,68,0.14),transparent_35%)]" />
      <div className="glow-orb left-[5%] top-32" />
      <div className="glow-orb glow-orb--soft right-[10%] top-[45%]" />

      {/* ── Nav ── */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex items-center gap-4 text-lg font-bold tracking-tight">
          <Image
            src="/images/logo.png"
            alt="Reclaim OS logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          Reclaim OS
        </span>
        <button
          type="button"
          onClick={handleGetAppClick}
          className="text-sm text-white/50 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
        >
          Get the app ↗
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-red-500">
            Join the movement
          </p>
          <h1 className="mb-8 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Your phone is built
            <br />
            to keep you scrolling.
          </h1>
          <p className="mb-12 max-w-2xl text-xl leading-relaxed text-white/65 sm:text-2xl">
            Most apps are tuned for attention, not intention. Reclaim OS is the
            Android launcher that helps you break loops, focus faster, and see
            every minute you win back.
          </p>

          {submitted ? (
            <div className="inline-block rounded-full border border-white/20 px-8 py-4 text-lg text-white/80">
              You&apos;re in. We&apos;ll be in touch. ✊
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitError) setSubmitError("");
                }}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap rounded-full bg-red-500 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Joining..." : "Join the movement"}
              </button>
            </form>
          )}
          {submitError && <p className="mt-3 text-sm text-red-300">{submitError}</p>}
          <p className="mt-4 text-sm text-white/35">
            No spam. Just updates on Reclaim OS.
          </p>
        </div>

        <div className="relative min-h-[440px]">
          <div className="float-slow absolute left-0 top-0 h-[58%] w-[78%] overflow-hidden rounded-3xl shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?auto=format&fit=crop&w=900&q=80"
              alt="Two surfers walking toward the ocean at sunset"
              fill
              sizes="(max-width: 1024px) 75vw, 32vw"
              className="object-cover"
            />
          </div>
          <div className="float-fast absolute bottom-0 right-0 h-[56%] w-[72%] overflow-hidden rounded-3xl shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="https://images.unsplash.com/photo-1440186347098-386b7459ad6b?auto=format&fit=crop&w=900&q=80"
              alt="Woman with backpack hiking through a sunlit forest"
              fill
              sizes="(max-width: 1024px) 65vw, 28vw"
              className="object-cover"
            />
          </div>
          <div className="rise-in absolute left-[12%] top-[52%] rounded-2xl border border-white/25 bg-black/70 px-5 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.22em] text-red-400">
              Reclaimed Time
            </p>
            <p className="mt-2 text-2xl font-black">+47 min today</p>
            <p className="mt-1 text-sm text-white/60">
              Enough time for a walk and dinner without doomscrolling.
            </p>
          </div>
        </div>
      </section>

      {/* ── Reclaimed Counter ── */}
      <ReclaimedCounter />

      {/* ── Stats ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-3 sm:p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl sm:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80"
                alt="Desk setup with phone and notebook"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-widest text-red-300">
                Attention by design
              </p>
            </div>
            <div className="grid gap-3 sm:grid-rows-2">
              <div className="relative min-h-[112px] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                  alt="Outdoor break away from screens"
                  fill
                  sizes="(max-width: 1024px) 100vw, 16vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-white/20 bg-black/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-300/90">
                  Reality Check
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  For the average Android user, social media consumes
                  over two working days every week.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
            Your attention isn&apos;t free. It&apos;s fueling a massive ad machine.
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            This is the attention economy in plain numbers: your hours traded
            for their growth.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className="group rounded-3xl border border-white/15 bg-white/[0.04] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="mb-4 text-5xl font-black tracking-tight text-red-400">
                {stat.value}
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/80">
                {stat.label}
              </p>
              <div className="space-y-1">
                {stat.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-white/45 transition-colors hover:text-white/75"
                  >
                    Source: {source.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <Features />

      {/* ── Themes ── */}
      <Themes />

      {/* ── Privacy ── */}
      <Privacy />

      {/* ── Bottom CTA ── */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Ready to take it back?
          </h2>
          <p className="text-white/50 text-xl mb-12">
            Available now on Android.
          </p>
          {submitted ? (
            <div className="inline-block rounded-full border border-white/20 px-8 py-4 text-lg text-white/80">
              You&apos;re already in. ✊
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitError) setSubmitError("");
                }}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap rounded-full bg-red-500 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Joining..." : "Join the movement"}
              </button>
            </form>
          )}
          {submitError && <p className="mt-4 text-sm text-red-300">{submitError}</p>}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row">
        <span className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <Image
            src="/images/logo.png"
            alt="Reclaim OS logo"
            width={20}
            height={20}
            className="rounded-full"
          />
          Reclaim OS
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm text-white/30 transition-colors hover:text-white/60"
          >
            Privacy Policy
          </Link>
          <span className="text-sm text-white/30">reclaimos.com</span>
        </div>
      </footer>

    </main>
  );
}
