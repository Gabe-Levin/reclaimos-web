"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Minimal Launcher",
    description:
      "A home screen built to help you focus, not scroll. Just your essentials — nothing more.",
    image: "/images/features/launcher-dark.png",
    objectPosition: "bottom",
  },
  {
    title: "Focus Sessions",
    description:
      "Lock in with timed sessions. Block all apps, set a duration, and take back your attention.",
    image: "/images/features/focus-session-active.png",
  },
  {
    title: "Smart Scheduling",
    description:
      "Create block rules that run automatically. Pick the days, set the hours, and let it work in the background.",
    image: "/images/features/block-schedules.png",
  },
  {
    title: "Insights",
    description:
      "See where your time really goes. Track reclaimed hours, top apps, and weekly trends.",
    image: "/images/features/insights-overview.png",
  },
  {
    title: "App Drawer",
    description:
      "Every app you need, nothing you don't. A clean alphabetical list with search.",
    image: "/images/features/app-drawer.png",
    objectPosition: "top",
  },
];

function PhoneMockup({ image, alt, objectPosition = "center" }: { image: string; alt: string; objectPosition?: string }) {
  return (
    <div className="relative aspect-[280/569] w-[160px] lg:w-[280px] shrink-0 rounded-[2.2rem] border-[3px] border-white/20 bg-white/[0.04] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 160px, 280px"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}

export default function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-feature]");
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
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition =
        "opacity 0.7s ease-out, transform 0.7s ease-out";
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 border-t border-white/10 bg-black py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-start lg:justify-between">
        {/* Sticky left heading */}
        <div className="lg:sticky lg:top-[120px] max-w-full lg:max-w-[366px] shrink-0 mb-10 lg:mb-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Simple tools
            <br />
            that fight
            <br />
            back.
          </h2>
        </div>

        {/* Scrolling feature cards */}
        <div
          ref={cardsRef}
          className="flex flex-col gap-20 lg:gap-[180px] w-full lg:w-[645px]"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              data-feature
              className="lg:sticky flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:min-h-[569px]"
              style={{ top: `${120 + i * 20}px` }}
            >
              <PhoneMockup image={feature.image} alt={feature.title} objectPosition={feature.objectPosition} />

              <div className="bg-black flex flex-col lg:justify-center pl-0 lg:pl-6 mt-6 lg:mt-0 lg:h-[569px] max-w-full lg:max-w-[340px]">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg leading-relaxed text-white/65 mt-3 lg:mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
