"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── Nav ── */}
      <nav className="px-6 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-lg font-bold tracking-tight">RECLAIM</span>
        <a
          href="https://play.google.com/store"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Get the app ↗
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="px-6 pt-24 pb-32 max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-6">
          Join the rebellion
        </p>
        <h1 className="text-5xl sm:text-7xl font-black leading-[1.05] tracking-tight mb-8 max-w-4xl">
          Your phone is designed<br />to steal your time.
        </h1>
        <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          Big tech spent billions engineering apps that hijack your attention.
          Reclaim is the Android launcher that fights back — and counts every
          minute you take back.
        </p>

        {/* Email form */}
        {submitted ? (
          <div className="inline-block border border-white/20 rounded-full px-8 py-4 text-white/80 text-lg">
            You&apos;re in. We&apos;ll be in touch. ✊
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 text-base"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-400 transition-colors text-white font-bold rounded-full px-8 py-4 text-base whitespace-nowrap"
            >
              Join the rebellion
            </button>
          </form>
        )}
        <p className="mt-4 text-sm text-white/30">No spam. Just updates on Reclaim OS.</p>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-white/10 max-w-6xl mx-auto" />

      {/* ── Features ── */}
      <section className="px-6 py-32 max-w-6xl mx-auto grid sm:grid-cols-2 gap-16">

        <div>
          <p className="text-5xl font-black mb-6">01</p>
          <h2 className="text-2xl font-bold mb-4">
            See every minute you take back.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Reclaim tracks the difference between who you were before and who
            you are now. The reclaimed hours counter shows you exactly how much
            time you&apos;ve won back since you installed it. It adds up fast.
          </p>
        </div>

        <div>
          <p className="text-5xl font-black mb-6">02</p>
          <h2 className="text-2xl font-bold mb-4">
            You&apos;re not fighting alone.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Every Reclaim user contributes to a collective counter of hours
            reclaimed from the attention economy. We&apos;re building something
            that big tech can&apos;t buy back. Join us.
          </p>
        </div>

      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-white/10">
        <div className="px-6 py-32 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Ready to take it back?
          </h2>
          <p className="text-white/50 text-xl mb-12">
            Available now on Android.
          </p>
          {submitted ? (
            <div className="inline-block border border-white/20 rounded-full px-8 py-4 text-white/80 text-lg">
              You&apos;re already in. ✊
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 text-base"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-400 transition-colors text-white font-bold rounded-full px-8 py-4 text-base whitespace-nowrap"
              >
                Join the rebellion
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 px-6 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold tracking-tight">RECLAIM</span>
        <span className="text-sm text-white/30">reclaimos.com</span>
      </footer>

    </main>
  );
}
