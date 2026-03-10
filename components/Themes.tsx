"use client";

import { useState } from "react";
import Image from "next/image";

const themes = [
  {
    label: "Dark",
    image: "/images/features/launcher-dark.png",
    objectPosition: "center 82%",
    bg: "bg-black",
    border: "border-white/10",
    phoneBorder: "border-white/20",
    phoneBg: "bg-white/[0.04]",
    tagColor: "text-[#74C69D]",
    headingColor: "text-white",
    labelActiveColor: "text-white",
    labelInactiveColor: "text-white/30",
    pillActiveBg: "bg-white/10",
    pillActiveText: "text-white",
    pillInactiveBg: "bg-white/[0.04]",
    pillInactiveText: "text-white/40",
  },
  {
    label: "Light",
    image: "/images/features/launcher-light.png",
    objectPosition: "center 78%",
    bg: "bg-[#FAFAFA]",
    border: "border-[#e0e0e0]",
    phoneBorder: "border-[#d0d0d0]/50",
    phoneBg: "bg-white",
    tagColor: "text-[#2D6A4F]",
    headingColor: "text-[#1A1A1A]",
    labelActiveColor: "text-[#1A1A1A]",
    labelInactiveColor: "text-[#6B6B6B]/40",
    pillActiveBg: "bg-[#1A1A1A]/10",
    pillActiveText: "text-[#1A1A1A]",
    pillInactiveBg: "bg-[#1A1A1A]/[0.04]",
    pillInactiveText: "text-[#6B6B6B]/50",
  },
  {
    label: "Warm",
    image: "/images/features/launcher-warm.png",
    objectPosition: "center 69%",
    bg: "bg-[#E8D8C0]",
    border: "border-[#CDBFA0]",
    phoneBorder: "border-[#8B5E3C]/30",
    phoneBg: "bg-[#F5EDD8]",
    tagColor: "text-[#8B5E3C]",
    headingColor: "text-[#2C1B0E]",
    labelActiveColor: "text-[#2C1B0E]",
    labelInactiveColor: "text-[#8B7355]/40",
    pillActiveBg: "bg-[#2C1B0E]/10",
    pillActiveText: "text-[#2C1B0E]",
    pillInactiveBg: "bg-[#2C1B0E]/[0.04]",
    pillInactiveText: "text-[#8B7355]/50",
  },
];

export default function Themes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = themes[activeIndex];

  return (
    <section
      className={`relative z-10 border-t py-20 transition-colors duration-700 lg:py-[120px] ${theme.bg} ${theme.border}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-700 ${theme.tagColor}`}
          >
            Themes
          </p>
          <h2
            className={`text-4xl font-extrabold tracking-tight transition-colors duration-700 sm:text-5xl ${theme.headingColor}`}
          >
            Make it yours.
          </h2>

          {/* Theme switcher pills */}
          <div className="mt-6 inline-flex gap-2 rounded-full border p-1 transition-colors duration-700"
            style={{ borderColor: "inherit" }}
          >
            {themes.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  i === activeIndex
                    ? `${theme.pillActiveBg} ${theme.pillActiveText}`
                    : `${theme.pillInactiveBg} ${theme.pillInactiveText} hover:opacity-70`
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10">
          {themes.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`flex flex-col items-center transition-all duration-500 ${
                i === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-[0.92] opacity-40 hover:opacity-60"
              }`}
            >
              <div
                className={`relative aspect-[280/569] w-[160px] overflow-hidden rounded-[1.8rem] border-[3px] transition-colors duration-700 sm:w-[220px] sm:rounded-[2.2rem] ${
                  i === activeIndex ? theme.phoneBorder : "border-transparent"
                } ${theme.phoneBg}`}
              >
                <Image
                  src={t.image}
                  alt={`${t.label} theme`}
                  fill
                  sizes="(max-width: 640px) 160px, 220px"
                  className="object-cover"
                  style={{ objectPosition: t.objectPosition }}
                />
              </div>
              <p
                className={`mt-4 text-lg font-semibold transition-colors duration-500 ${
                  i === activeIndex
                    ? theme.labelActiveColor
                    : theme.labelInactiveColor
                }`}
              >
                {t.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
