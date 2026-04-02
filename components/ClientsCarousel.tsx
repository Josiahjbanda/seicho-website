"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CLIENTS = [
  {
    src: "/images/clients/mtc.png",
    name: "MTC",
  },
  {
    src: "/images/clients/unam.png",
    name: "UNAM",
  },
  {
    src: "/images/clients/namibia-nature-foundation.png",
    name: "Namibia Nature Foundation",
  },
  {
    src: "/images/clients/omeva-consulting.png",
    name: "Omeva Consulting",
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
            <div className="relative h-32 w-full overflow-hidden bg-white">
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
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
            className="relative w-full max-w-4xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-white">
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

