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
            <div className="mb-4 flex items-center space-x-4">
              <span className="h-px w-12 bg-secondary" />
              <span className="font-label text-[11px] text-on-surface-variant">
                Editorial Marketing Agency
              </span>
            </div>
            <h1 className="mb-4 font-headline text-4xl font-black leading-[0.95] tracking-tight text-primary md:text-7xl">
              We Design Brands That Get Noticed
              <br />
              <span className="text-secondary">&amp; Get Results.</span>
            </h1>
            <div className="grid items-start gap-10 md:grid-cols-12">
              <div className="space-y-5 md:col-span-7">
                <p className="font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                  SEICHO is a marketing and graphic design studio focused on
                  building bold visual identities and high-performing digital
                  experiences. We simplify complex ideas into clear, strategic
                  design that attracts attention and drives real business
                  growth—making sure Namibian brands get the recognition they
                  deserve.
                </p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Whether it&apos;s branding, campaigns, or corporate content,
                  every piece is crafted with one goal: to position your brand
                  with clarity, authority, and impact.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:col-span-5 md:flex-row md:justify-end">
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

        {/* Services / What we do */}
        <section className="bg-surface-container-low px-8 py-20 md:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 font-headline text-3xl font-bold italic md:text-4xl">
              Marketing and design engineered for growth.
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-headline text-xl italic">Brand Strategy</h3>
                <p className="mt-3 font-body text-sm text-on-surface-variant">
                  Positioning, messaging, and naming built to differentiate you
                  in saturated markets and drive high-intent leads.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl italic">
                  Graphic &amp; Digital Design
                </h3>
                <p className="mt-3 font-body text-sm text-on-surface-variant">
                  Visual identity systems, social media graphics, pitch decks,
                  and campaign creative that stay consistent across every
                  channel.
                </p>
              </div>
              <div>
                <h3 className="font-headline text-xl italic">
                  Performance Marketing
                </h3>
                <p className="mt-3 font-body text-sm text-on-surface-variant">
                  SEO-aware landing pages, email funnels, and content calendars
                  designed to convert attention into measurable revenue.
                </p>
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
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src="/images/portfolio.jpeg"
                  alt="SEICHO brand strategy and portfolio overview"
                  fill
                  className="object-contain grayscale transition-transform duration-700 group-hover:scale-105"
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
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-lowest">
                <Image
                  src="/images/logo.jpeg"
                  alt="SEICHO visual identity logo mark"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
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

        {/* Clients carousel */}
        <section className="bg-surface px-8 py-20 md:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="font-headline text-2xl italic md:text-3xl">
                Trusted by ambitious clients.
              </h2>
              <p className="hidden font-label text-[10px] text-on-surface-variant md:block">
                Selected marketing and design partnerships
              </p>
            </div>
            <div className="no-scrollbar overflow-x-hidden py-4">
              <div className="clients-track flex gap-8">
                {[
                  {
                    src: "/images/371193093_334907355558291_6103337848278641736_n.jpg",
                    name: "Apex Atelier",
                  },
                  {
                    src: "/images/464820507_18067077709723614_5839465353225522232_n.webp",
                    name: "Chronos Archive",
                  },
                  {
                    src: "/images/620962502_17996234417907389_757090051739280617_n.webp",
                    name: "Onyx Digital",
                  },
                  {
                    src: "/images/621447223_18051176726686451_7902291036708653222_n.webp",
                    name: "Vertex Monomark",
                  },
                  {
                    src: "/images/623430959_17975022389823284_5648711293673496213_n.webp",
                    name: "Signal Error Series",
                  },
                ].flatMap((item) => [item, item]).map((item, index) => (
                  <div
                    key={`${item.src}-${index}`}
                    className="flex w-56 flex-shrink-0 flex-col overflow-hidden bg-surface-container-lowest"
                  >
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="border-t border-outline-variant/20 bg-surface-container-lowest px-3 py-2">
                      <p className="font-label text-[10px] text-on-surface-variant">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
