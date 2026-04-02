"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CLIENTS = [
  {
    src: "/images/heros/WhatsApp Image 2026-04-02 at 12.29.15 AM.jpeg",
    name: "VR Experience",
  },
  {
    src: "/images/464820507_18067077709723614_5839465353225522232_n.webp",
    name: "FEDAM Prints",
  },
  {
    src: "/images/620962502_17996234417907389_757090051739280617_n.webp",
    name: "UNAM SRC",
  },
  {
    src: "/images/heros/WhatsApp Image 2026-04-02 at 12.29.17 AM.jpeg",
    name: "Booklet",
  },
  {
    src: "/images/heros/WhatsApp Image 2026-04-02 at 12.29.16 AM.jpeg",
    name: "Rand street car wash",
  },
];

export function ClientsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<(typeof CLIENTS)[number] | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const tick = () => {
      // Smooth, constant marquee-like scroll
      el.scrollLeft += 1;

      // Loop back when reaching end
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0 && el.scrollLeft >= max) el.scrollLeft = 0;
    };

    const id = window.setInterval(tick, 20);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-8 overflow-x-auto py-4"
      >
        {CLIENTS.map((client) => (
          <button
            key={client.name}
            type="button"
            onClick={() => setActive(client)}
            className="flex w-56 flex-shrink-0 cursor-pointer flex-col overflow-hidden bg-surface-container-lowest text-left"
            aria-label={`View ${client.name}`}
          >
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="border-t border-outline-variant/20 bg-surface-container-lowest px-3 py-2">
              <p className="font-label text-[10px] text-on-surface-variant">
                {client.name}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${active.name}`}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={active.src}
                alt={active.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-6 px-4 py-3">
              <p className="font-body text-sm text-white/80">{active.name}</p>
              <button
                type="button"
                className="cursor-pointer font-label text-[10px] text-white hover:text-secondary"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

