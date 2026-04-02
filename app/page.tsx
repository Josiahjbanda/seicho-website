import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClientsCarousel } from "@/components/ClientsCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[720px] flex-col justify-center items-center bg-surface-container-lowest px-8 md:px-24">
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
                  SEICHO is a modern marketing and design agency based in
                  Windhoek, Namibia, focused on helping brands become visible,
                  relevant, and competitive in today’s digital landscape. We
                  specialise in reaching younger, digitally native audiences
                  through strategic social media marketing, bold visual design,
                  and high-impact content creation.
                </p>

                <p className="font-body text-base leading-relaxed text-on-surface-variant">
                  We work with both local Namibian businesses and international
                  clients across Europe, delivering branding and marketing
                  systems that are built to scale, adapt, and perform across
                  platforms. Every project is driven by one goal: to turn
                  attention into measurable growth.
                </p>

                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  In a world where visibility determines success, we make sure
                  your brand is not just present—but impossible to ignore.
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

        {/* Who we are */}
        <section className="bg-surface px-8 py-24 md:px-24">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-headline text-4xl italic">
                A new generation marketing agency.
              </h2>

              <p className="mb-6 font-body text-on-surface-variant">
                SEICHO was built for a shift in how brands grow. Traditional
                marketing is no longer enough—today’s audiences are faster, more
                selective, and driven by content, culture, and authenticity.
              </p>

              <p className="font-body text-on-surface-variant">
                We bridge the gap between strategy and execution by combining
                creative design, content production, and digital marketing into
                one streamlined system that helps brands move faster and
                communicate better.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-headline text-xl italic">
                What makes us different
              </h3>

              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li>• Built for younger, digital-first audiences</li>
                <li>• Strong focus on social media growth and visibility</li>
                <li>• Blend of design, marketing, and content creation</li>
                <li>• Local expertise with international client exposure</li>
                <li>• Fast, adaptive, and trend-aware execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-surface-container-low px-8 py-24 md:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 font-headline text-4xl italic">What we do</h2>

            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-headline text-2xl italic">
                  Social Media Marketing
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  We build and manage social media strategies that grow your
                  brand’s presence, increase engagement, and turn followers into
                  customers.
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>• Content planning &amp; scheduling</li>
                  <li>• Platform-specific growth strategies</li>
                  <li>• Audience targeting &amp; engagement</li>
                  <li>• Campaign execution</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-headline text-2xl italic">
                  Graphic Design &amp; Branding
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  We create visual systems that define your brand and keep it
                  consistent across all touchpoints.
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>• Logo design &amp; brand identity</li>
                  <li>• Corporate materials (letterheads, profiles)</li>
                  <li>• Social media creatives</li>
                  <li>• Marketing assets &amp; campaign visuals</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-headline text-2xl italic">
                  Content Creation
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  We produce content that captures attention and communicates
                  your brand clearly across platforms.
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>• Short-form video content</li>
                  <li>• Promotional visuals</li>
                  <li>• Brand storytelling</li>
                  <li>• Campaign content production</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-headline text-2xl italic">
                  Influencer Management
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">
                  We connect brands with the right voices to expand reach and
                  build credibility with target audiences.
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant">
                  <li>• Influencer sourcing &amp; vetting</li>
                  <li>• Campaign coordination</li>
                  <li>• Performance tracking</li>
                  <li>• Brand alignment management</li>
                </ul>
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
                Notable clients.
              </h2>
              <p className="hidden font-label text-[10px] text-on-surface-variant md:block">
                Selected marketing and design partnerships
              </p>
            </div>
            <ClientsCarousel />
          </div>
        </section>

        {/* How we work */}
        <section className="bg-surface px-8 py-24 md:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 font-headline text-4xl italic">How we work</h2>

            <div className="grid gap-10 text-sm text-on-surface-variant md:grid-cols-4">
              <div>
                <h4 className="mb-2 font-bold">01. Discover</h4>
                <p>We understand your brand, audience, and goals.</p>
              </div>

              <div>
                <h4 className="mb-2 font-bold">02. Strategise</h4>
                <p>We build a clear plan tailored to your growth.</p>
              </div>

              <div>
                <h4 className="mb-2 font-bold">03. Create</h4>
                <p>We design and produce high-quality content and assets.</p>
              </div>

              <div>
                <h4 className="mb-2 font-bold">04. Execute</h4>
                <p>We launch, manage, and optimise for performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-surface-container-low px-8 py-20 md:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 font-headline text-3xl italic">
              Powered by industry-standard tools
            </h2>

            <p className="mb-10 max-w-3xl text-sm text-on-surface-variant">
              We use a combination of leading design and marketing tools to
              ensure every project meets global standards in quality,
              scalability, and performance.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-on-surface-variant md:grid-cols-3">
              {[
                {
                  label: "Adobe Photoshop",
                  mark: "Ps",
                  iconSrc: "/images/tools/photoshop.png",
                },
                {
                  label: "Adobe Illustrator",
                  mark: "Ai",
                  iconSrc: "/images/tools/illustrator.png",
                },
                { label: "Figma", mark: "Fg", iconSrc: "/images/tools/figma.png" },
                { label: "Adobe Premiere Pro", mark: "Pr" },
                { label: "Canva", mark: "Ca" },
                { label: "Marketing & Analytics", mark: "Mx" },
              ].map((tool) => (
                <div
                  key={tool.label}
                  className="flex items-center gap-3 bg-surface-container-lowest px-4 py-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-outline-variant/30 bg-white text-on-surface">
                    {"iconSrc" in tool && tool.iconSrc ? (
                      <Image
                        src={tool.iconSrc}
                        alt={`${tool.label} logo`}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    ) : (
                      <span className="font-bold">{tool.mark}</span>
                    )}
                  </span>
                  <span className="font-body">{tool.label}</span>
                </div>
              ))}
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
              <h3 className="font-headline text-2xl italic text-white">
                Contact details
              </h3>
              <p className="mt-4 font-body text-sm text-gray-400">
                Prefer a direct conversation? Reach us via email or phone, or
                visit the studio in Windhoek.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <span className="block font-label text-[10px] text-gray-500">
                    Email
                  </span>
                  <a
                    href="mailto:seicho82002@gmail.com"
                    className="block font-body text-lg text-white hover:text-secondary"
                  >
                    seicho82002@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block font-label text-[10px] text-gray-500">
                    Phone
                  </span>
                  <a
                    href="tel:+264817722531"
                    className="block font-body text-lg text-white hover:text-secondary"
                  >
                    +264 81 772 2531
                  </a>
                </div>
                <div>
                  <span className="block font-label text-[10px] text-gray-500">
                    Location
                  </span>
                  <span className="block font-body text-lg text-white">
                    7 Anderson Street, Eros — Windhoek
                  </span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex cursor-pointer items-center justify-center bg-secondary px-10 py-5 font-label text-xs font-black tracking-[0.2em] text-white hover:brightness-110"
                >
                  Open Contact Page
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
