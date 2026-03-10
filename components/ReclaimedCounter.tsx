"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target <= 0) {
      setValue(0);
      return;
    }

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return value;
}

export default function ReclaimedCounter() {
  const [totalHours, setTotalHours] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const displayValue = useCountUp(totalHours ?? 0);

  useEffect(() => {
    fetch("/api/reclaimed")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json() as Promise<{ total_hours_reclaimed: number }>;
      })
      .then((data) => {
        setTotalHours(data.total_hours_reclaimed);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const showFallback = error || totalHours === 0;

  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.02]">
      {/* Background photo */}
      <Image
        src="/images/mission-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">
            The Mission
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Reclaim 5 billion hours from big tech.
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            Every hour you take back is an hour spent on what actually matters.
            Here&apos;s how much we&apos;ve reclaimed together so far.
          </p>
        </div>

        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-black/60 px-8 py-10 text-center backdrop-blur-sm transition-colors duration-300 hover:border-white/20 sm:px-14 sm:py-12">
          {totalHours === null && !error ? (
            <div className="mx-auto h-16 w-48 animate-pulse rounded-xl bg-white/10 sm:h-24 sm:w-72" />
          ) : showFallback ? (
            <p className="text-2xl font-semibold text-white/60 sm:text-3xl">
              Be the first to reclaim your time
            </p>
          ) : (
            <>
              <p className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl">
                {displayValue.toLocaleString()}
              </p>
              <p className="mt-5 text-lg text-white/50 sm:text-xl">
                hours reclaimed from big tech
              </p>
            </>
          )}

          {/* Pulsing dot to indicate live data */}
          {!showFallback && totalHours !== null && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-normal uppercase tracking-widest text-white/30">
                Live
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
