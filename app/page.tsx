import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[720px] flex-col justify-center bg-surface-container-lowest px-8 md:px-24">
          <div className="max-w-6xl">
            <div className="mb-8 flex items-center space-x-4">
              <span className="h-px w-12 bg-secondary" />
              <span className="font-label text-[11px] text-on-surface-variant">
                Editorial Marketing Agency
              </span>
            </div>
            <h1 className="mb-12 font-headline text-5xl font-black leading-[0.9] tracking-tight text-primary md:text-8xl">
              Strategic <span className="text-secondary">Narratives</span>
              <br />
              Defined by Design.
            </h1>
            <div className="grid items-end gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="font-body text-lg leading-relaxed text-on-surface-variant md:text-2xl">
                  SEICHO is a boutique marketing firm specializing in
                  high-contrast visual identities and editorial positioning for
                  industry leaders. We build brands that command authority.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:col-span-6 md:flex-row md:justify-end">
                <a
                  href="/portfolio"
                  className="font-label bg-primary px-10 py-5 text-xs font-bold text-white hover:bg-secondary"
                >
                  View Portfolio
                </a>
                <a
                  href="/contact"
                  className="font-label border border-primary px-10 py-5 text-xs font-bold text-primary hover:bg-primary hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Archives / Portfolio Teaser */}
        <section
          id="portfolio"
          className="bg-surface px-8 py-24 md:px-24 md:py-32"
        >
          <div className="mb-16 flex flex-col items-end gap-8 md:mb-24 md:flex-row md:justify-between">
            <h2 className="max-w-2xl font-headline text-4xl italic tracking-tight md:text-6xl">
              Selected <span className="text-secondary">Archives</span> 2024
            </h2>
            <p className="max-w-xs font-label text-[11px] leading-relaxed text-on-surface-variant">
              Curated selection of our most impactful collaborations across
              fashion, architecture, and luxury tech.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="group cursor-pointer bg-surface-container-low md:col-span-8">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUczCTg--cBKbQ_jjJhRTFK3IhogHzzp8sVYmo3Dvl-tt4PiDPX4C71JLhaAXM607WxkbWAVgY0PD7QCj0hoWvRV9ZX1JkYUnJ-qSCQsPR-2dqLl3HjMx1Xc3kXOlqbgouWRyequvXx_y4enWngHgWp5l-27y_6N15K0JUSOrlqRg205bC1mFaKMKY42Zb9i6fgTl4Zeh02mC3tgxUGCc0rYkfQWFQs0r5S4Mi-C5fkeECCCCczjshbahN79rAqmvmc9W9jd3F0Q"
                  alt="Modern Skyscraper – The Ethereal Collective"
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between pt-8">
                <div>
                  <span className="font-label mb-2 block text-[11px] text-secondary">
                    Brand Strategy
                  </span>
                  <h3 className="font-headline text-2xl italic">
                    The Ethereal Collective
                  </h3>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer md:col-span-4 md:mt-16">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_kSMmibK95_l5NGK322gDWSiG--E5XqwUDRe5qDrbx4paCYPWAwa2_2R3Ed_nwtkrdbNRc4qzmbRKk1H0BR8AOrCZLCt8L1NebRQ-VlLEEKJvOSd4Gw9njvjc5DLGp3MN5f64PVymUClSIf5vb37NUuskOviDGOIvH1QR49Xm-6dFjBSuolp3FjtNWjX-COLBgjnXfEGjYreutWGBzHbQtAFZBk1lkcSr54KN90ptaclQFyEOomq9qJ2q1AsNm-u9QedSBmsyAQ"
                  alt="Minimalist interior – Apex Atelier"
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-8">
                <span className="font-label mb-2 block text-[11px] text-secondary">
                  Visual Identity
                </span>
                <h3 className="font-headline text-2xl italic">Apex Atelier</h3>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <a
              href="/portfolio"
              className="group flex items-center space-x-5"
            >
              <span className="border-b-2 border-transparent text-xl font-headline italic group-hover:border-primary">
                Explore Full Portfolio
              </span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="bg-black px-8 py-24 text-white md:py-32"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-headline text-5xl italic md:text-7xl">
                Ready to <br />
                <span className="text-secondary">Evolve?</span>
              </h2>
              <p className="mb-10 max-w-md font-body text-lg text-gray-400">
                We are currently accepting new client partnerships for Q3 2024.
                Secure your brand&apos;s editorial authority.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:seicho82002@gmail.com"
                  className="block font-label text-base text-white underline underline-offset-8 hover:text-secondary"
                >
                  seicho82002@gmail.com
                </a>
                <a
                  href="tel:+264817722531"
                  className="block font-label text-base text-white hover:text-secondary"
                >
                  +264 81 772 2531
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <form className="space-y-8">
                <div>
                  <label className="mb-2 block font-label text-[11px] text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b-2 border-white/30 bg-transparent py-3 text-lg outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-label text-[11px] text-gray-400">
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full resize-none border-b-2 border-white/30 bg-transparent py-3 text-lg outline-none focus:border-secondary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary py-4 font-label text-xs font-black tracking-[0.2em] hover:brightness-110"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
