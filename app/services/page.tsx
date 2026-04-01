import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import { MarketingCarousel } from "@/components/MarketingCarousel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SEICHO’s capabilities in logo design, branding, marketing materials, and high-end brand systems.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <header className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="font-label mb-4 block text-xs text-secondary">
                Our Capabilities
              </span>
              <h1 className="font-headline text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Precision <br />
                <span className="text-secondary">Execution.</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-2">
              <p className="font-body text-base leading-relaxed tracking-wide text-on-surface-variant">
                We blend architectural discipline with radical creativity to
                forge brands that don&apos;t just exist—they dominate their
                vertical.
              </p>
            </div>
          </div>
        </header>

        {/* Services Bento Grid */}
        <section className="mx-auto max-w-7xl space-y-20 px-8">
          {/* Logo Design */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="relative h-[320px] overflow-hidden md:col-span-7 md:h-auto">
              <LogoCarousel />
            </div>
            <div className="flex flex-col justify-center border-l border-outline-variant/15 p-10 md:col-span-5">
              <span className="font-label mb-6 text-xs text-secondary">
                01 — Identity
              </span>
              <h2 className="font-headline text-4xl italic">Logo Design</h2>
              <p className="mt-6 font-body text-on-surface-variant">
                The cornerstone of your visual authority. We craft singular
                marks that encapsulate your brand&apos;s DNA into a timeless,
                scalable asset.
              </p>
              <ul className="mt-8 space-y-3 font-label text-[11px] text-primary">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-secondary" />
                  Primary mark &amp; logotype
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-secondary" />
                  Symbolism research
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-secondary" />
                  Monochromatic versatility
                </li>
              </ul>
            </div>
          </div>

          {/* Branding */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="order-2 flex flex-col justify-center border-r border-outline-variant/15 p-10 md:order-1 md:col-span-5">
              <span className="font-label mb-6 text-xs text-secondary">
                02 — Strategy
              </span>
              <h2 className="font-headline text-4xl italic">Branding</h2>
              <p className="mt-6 font-body text-on-surface-variant">
                Beyond the logo. We build comprehensive ecosystems including
                typography, color theory, and tonal guidelines that ensure
                absolute market consistency.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Style guides", "Brand voice", "Color systems"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-surface-container-highest px-4 py-2 text-[10px] font-label"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden order-1 md:order-2 md:col-span-7 md:h-auto">
              <Image
                src="/images/branding/470921052_18071970823723614_3376230561147877796_n.jpg"
                alt="Seicho branding system"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Marketing Materials */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="relative h-[420px] overflow-hidden md:col-span-7 md:h-auto">
              <MarketingCarousel />
            </div>
            <div className="flex flex-col justify-center border-l border-outline-variant/15 p-10 md:col-span-5">
              <span className="font-label mb-6 text-xs text-secondary">
                03 — Collateral
              </span>
              <h2 className="font-headline text-4xl italic">
                Marketing Materials
              </h2>
              <p className="mt-6 font-body text-on-surface-variant">
                High-value artifacts for high-stakes business. From investor
                decks to premium editorial prints, we design for physical and
                digital impact.
              </p>
              <button className="mt-8 inline-flex items-center gap-3 font-label text-[11px] text-primary">
                View spec sheet
              </button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-32 bg-surface-container-low py-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-4xl italic md:text-5xl">
                Investment Tiers
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 bg-secondary" />
            </div>
            <div className="grid grid-cols-1 border border-outline-variant/15 md:grid-cols-3">
              {/* Essential */}
              <div className="flex flex-col bg-surface-container-lowest p-10 md:border-r md:border-outline-variant/15">
                <span className="font-label mb-2 text-[10px] text-on-surface-variant">
                  Tier 01
                </span>
                <h3 className="font-headline text-2xl italic">Essential</h3>
                <div className="mt-6 font-sans text-4xl font-black">
                  $2,500
                  <span className="ml-2 text-sm font-normal text-on-surface-variant">
                    / flat
                  </span>
                </div>
                <ul className="mt-8 flex-grow space-y-4 font-body text-sm">
                  <li>Primary logo suite</li>
                  <li>Core color palette</li>
                  <li className="text-on-surface-variant/50 line-through">
                    Full brand guidelines
                  </li>
                </ul>
                <button className="mt-8 w-full border border-primary py-3 font-label text-[11px] hover:bg-primary hover:text-white">
                  Select tier
                </button>
              </div>
              {/* Professional */}
              <div className="flex flex-col bg-primary p-10 text-white shadow-2xl md:scale-105">
                <span className="font-label mb-2 text-[10px] text-white/70">
                  Tier 02 — Recommended
                </span>
                <h3 className="font-headline text-2xl italic">Professional</h3>
                <div className="mt-6 font-sans text-4xl font-black">
                  $5,500
                  <span className="ml-2 text-sm font-normal text-white/70">
                    / flat
                  </span>
                </div>
                <ul className="mt-8 flex-grow space-y-4 font-body text-sm">
                  <li>Logo &amp; typography system</li>
                  <li>Digital style guide</li>
                  <li>3 marketing assets</li>
                </ul>
                <button className="mt-8 w-full bg-secondary py-3 font-label text-[11px] hover:bg-secondary-container">
                  Select tier
                </button>
              </div>
              {/* Enterprise */}
              <div className="flex flex-col bg-surface-container-lowest p-10 md:border-l md:border-outline-variant/15">
                <span className="font-label mb-2 text-[10px] text-on-surface-variant">
                  Tier 03
                </span>
                <h3 className="font-headline text-2xl italic">Enterprise</h3>
                <div className="mt-6 font-sans text-4xl font-black">
                  Custom
                  <span className="ml-2 text-sm font-normal text-on-surface-variant">
                    / quote
                  </span>
                </div>
                <ul className="mt-8 flex-grow space-y-4 font-body text-sm">
                  <li>Full brand ecosystem</li>
                  <li>Strategic positioning</li>
                  <li>Unlimited collateral</li>
                </ul>
                <button className="mt-8 w-full border border-primary py-3 font-label text-[11px] hover:bg-primary hover:text-white">
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

