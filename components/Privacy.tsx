"use client";

import { useState } from "react";
import Link from "next/link";

const items = [
  {
    title: "Local by default",
    body: "All your settings, usage stats, and focus session history live in private storage on your phone, explicitly excluded from Android cloud backup and device-to-device transfer. The only data that leaves your device is anonymous usage stats, and only if you opt in.",
  },
  {
    title: "Zero trackers",
    body: "No analytics SDKs, no ad networks, no crash reporting services. Check the dependencies yourself. You won't find Firebase, Mixpanel, or any third-party tracker.",
  },
  {
    title: "Opt-in only",
    body: "The Collective Impact counter is completely optional. If you opt in, we use a random anonymous ID. No name, email, or device identifiers ever leave your phone.",
  },
  {
    title: "You control deletion",
    body: "One tap in Settings deletes everything, including local data and any remote records. Your contribution to the global counter stays anonymous and aggregate.",
  },
  {
    title: "Minimal permissions",
    body: "We never request location, camera, microphone, contacts, files, or clipboard access. The accessibility service can't read your screen content. It only detects blocked app launches.",
  },
  {
    title: "GDPR & CCPA",
    body: "Full compliance with European and California privacy law. Right to access, delete, and port your data, all built into the app with no email required.",
  },
];

export default function Privacy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* Left — title */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">
            Privacy First
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your data is yours. Period.
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            Most apps monetize your attention <em>and</em> your data. Reclaim OS
            is built differently &mdash; privacy isn&apos;t a feature,
            it&apos;s the foundation.
          </p>
          <p className="mt-6 text-sm text-white/40">
            Read our full{" "}
            <Link
              href="/privacy"
              className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Right — accordion */}
        <div className="divide-y divide-white/10">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-red-400"
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  <span
                    className={`ml-4 shrink-0 text-white/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="10" y1="4" x2="10" y2="16" />
                      <line x1="4" y1="10" x2="16" y2="10" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-base leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
