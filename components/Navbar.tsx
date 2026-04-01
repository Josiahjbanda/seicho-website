 "use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2 font-headline text-lg font-black tracking-tight text-primary sm:text-xl"
        >
          SEICHO
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer font-body text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden cursor-pointer font-label bg-primary px-5 py-3 text-[10px] font-bold text-white hover:bg-secondary md:inline-flex"
        >
          Get in Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-lowest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-[2px] w-4 transform rounded-full bg-primary transition-transform duration-200 ${
              open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`block h-[2px] w-4 rounded-full bg-primary transition-opacity duration-150 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-4 transform rounded-full bg-primary transition-transform duration-200 ${
              open ? "-translate-y-[3px] -rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto flex max-w-7xl flex-col border-t border-outline-variant/20 bg-surface-container-lowest px-4 pb-4 pt-2 sm:px-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer py-2 font-body text-sm tracking-wide text-on-surface hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex cursor-pointer items-center justify-center border border-primary bg-primary px-4 py-2 font-label text-[10px] text-white hover:bg-secondary"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}

