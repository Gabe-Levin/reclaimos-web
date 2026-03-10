"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const themes = [
  {
    label: "Dark",
    image: "/images/features/launcher-dark.png",
    objectPosition: "bottom",
  },
  {
    label: "Light",
    image: "/images/features/launcher-light.png",
    objectPosition: "center bottom 4px",
  },
];

export default function Themes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>("[data-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(40px)";
      item.style.transition =
        "opacity 0.7s ease-out, transform 0.7s ease-out";
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-20 lg:py-[120px]">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            Themes
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Make it yours.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
          {themes.map((theme) => (
            <div
              key={theme.label}
              data-theme
              className="flex flex-col items-center"
            >
              <div className="relative aspect-[280/569] w-[200px] sm:w-[260px] rounded-[2.2rem] border-[3px] border-white/20 bg-white/[0.04] overflow-hidden">
                <Image
                  src={theme.image}
                  alt={`${theme.label} theme`}
                  fill
                  sizes="(max-width: 640px) 200px, 260px"
                  className="object-cover"
                  style={{ objectPosition: theme.objectPosition }}
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-white/70">
                {theme.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
