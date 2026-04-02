import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "At SEICHO, creativity meets strategy to bring brands to life through design, branding, and social media marketing.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <header className="mx-auto mb-20 max-w-7xl px-8 pt-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="font-label mb-4 block text-[10px] tracking-[0.2em] text-secondary">
                ABOUT SEICHO
              </span>
              <h1 className="font-headline text-5xl font-black italic leading-[0.9] tracking-tight md:text-7xl">
                A modern studio for{" "}
                <span className="text-secondary">brand impact</span>.
              </h1>
              <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
                At SEICHO, creativity meets strategy to bring brands to life
                through graphic design, branding, and social media marketing.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Graphic Design",
                  "Brand Identity",
                  "Social Media Marketing",
                  "Content Creation",
                  "Basic Web Design",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="border border-outline-variant/40 bg-surface px-3 py-2 font-label text-[10px] tracking-[0.2em] text-on-surface"
                  >
                    {pill.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative overflow-hidden bg-surface-container-low shadow-sm">
                <div className="relative aspect-[4/5] w-full bg-black">
                  <Image
                    src="/images/portfolio.jpeg"
                    alt="Seicho brand and marketing work preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-px bg-outline-variant/40">
                  {[
                    { label: "Established", value: "2022" },
                    { label: "Location", value: "Windhoek" },
                    { label: "Focus", value: "Growth" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface px-5 py-4"
                    >
                      <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                        {stat.label.toUpperCase()}
                      </p>
                      <p className="mt-2 font-headline text-xl font-bold italic">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Values / bento */}
        <section className="mx-auto mb-20 max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-headline text-4xl font-bold italic md:text-5xl">
                What we stand for.
              </h2>
              <p className="mt-5 max-w-xl font-body text-on-surface-variant">
                Modern brands don’t win by being loud—they win by being clear.
                We design with structure, strategy, and taste so every piece
                feels intentional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:col-span-7 md:grid-cols-2">
              {[
                {
                  eyebrow: "CLARITY",
                  title: "Design that communicates fast.",
                  body: "We simplify complex ideas into visuals that audiences understand instantly—on socials, on print, and on web.",
                },
                {
                  eyebrow: "CONSISTENCY",
                  title: "Systems, not one-off posts.",
                  body: "We build identity guidelines and content templates that keep your brand recognizable everywhere.",
                },
                {
                  eyebrow: "PERFORMANCE",
                  title: "Marketing that earns attention.",
                  body: "From content strategy to campaign design, we create work built to drive engagement and growth.",
                },
                {
                  eyebrow: "CRAFT",
                  title: "Premium visuals for Namibian brands.",
                  body: "Typography, layout, and detail matter. We obsess over quality so your brand looks established.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="border border-outline-variant/40 bg-surface-container-low p-8"
                >
                  <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-headline text-2xl font-bold italic">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-20 bg-surface-container-low px-8 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <h2 className="border-l-4 border-secondary pl-6 font-headline text-4xl font-bold italic md:text-5xl">
                Beyond the Surface
              </h2>
              <p className="mt-6 font-body text-on-surface-variant">
                At SEICHO, creativity meets strategy to bring brands to life.
                Founded in 2022 at just 20 years old, SEICHO has grown into a
                dynamic creative studio specializing in graphic design, brand
                identity, illustrations, logo development, and full-scale social
                media marketing and management.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-6 border border-outline-variant/40 bg-surface p-8">
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Driven by a passion for visual storytelling and innovation,
                  SEICHO has delivered high-quality, impactful designs for a
                  diverse range of clients - from small startups to established
                  organizations such as MTC, UNAM, Namibia Nature Foundation,
                  and Omeva Consulting. Each project is approached with
                  precision, originality, and a deep understanding of how to
                  communicate a brand’s message effectively.
                </p>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  Beyond design, SEICHO offers strategic content creation and
                  digital marketing solutions tailored to elevate brand
                  presence, engage audiences, and drive real results. With a
                  commitment to excellence and a keen eye for detail, SEICHO
                  continues to push creative boundaries, helping businesses
                  stand out in an increasingly competitive digital landscape.
                </p>
                <div className="pt-2">
                  <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                    ESTABLISHED
                  </p>
                  <p className="mt-2 font-headline text-2xl font-bold italic">
                    2022 — WINDHOEK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal */}
        <section className="bg-primary px-8 py-28 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-headline text-4xl font-bold italic md:text-5xl">
                  Technical Arsenal
                </h2>
                <p className="mt-4 max-w-2xl font-body text-on-primary/70">
                  Tools and disciplines we use to build modern visual systems,
                  high-performing content, and premium brand experiences.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex cursor-pointer items-center justify-center border border-white/15 bg-white/5 px-6 py-3 font-label text-[10px] tracking-[0.2em] text-white transition-colors hover:bg-white/10"
              >
                WORK WITH US
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
              {[
                {
                  id: "01",
                  title: "Photoshop",
                  body: "Advanced manipulation & photo-editorial retouching.",
                  mark: "Ps",
                  iconSrc: "/images/tools/photoshop.png",
                },
                {
                  id: "02",
                  title: "Illustrator",
                  body: "Vector-perfect brand systems & structural iconography.",
                  mark: "Ai",
                  iconSrc: "/images/tools/illustrator.png",
                },
                {
                  id: "03",
                  title: "Figma",
                  body: "Interactive prototyping & design system orchestration.",
                  mark: "Fg",
                  iconSrc: "/images/tools/figma.png",
                },
                {
                  id: "04",
                  title: "InDesign",
                  body: "Layout architecture for print & digital publications.",
                  mark: "Id",
                  iconSrc: "/images/tools/indesign.png",
                },
                {
                  id: "05",
                  title: "Brand Strategy",
                  body: "Positioning, messaging, and identity direction.",
                  mark: "St",
                },
                {
                  id: "06",
                  title: "UI/UX",
                  body: "Human-centric interfaces designed to convert.",
                  mark: "UX",
                  iconSrc: "/images/tools/uiux.png",
                },
                {
                  id: "07",
                  title: "After Effects",
                  body: "Motion design for campaigns and brand moments.",
                  mark: "Ae",
                  iconSrc: "/images/tools/after-effects.png",
                },
                {
                  id: "08",
                  title: "Copywriting",
                  body: "Clear, persuasive words that support strategy.",
                  mark: "CW",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex aspect-square flex-col justify-between bg-primary p-8 transition-colors hover:bg-primary-container md:p-10"
                >
                  <span className="font-label text-[10px] tracking-[0.2em] text-white/50">
                    {item.id}
                  </span>
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-white/15 bg-black text-white">
                      {item.iconSrc ? (
                        <Image
                          src={item.iconSrc}
                          alt={`${item.title} logo`}
                          width={34}
                          height={34}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <span className="font-bold">{item.mark}</span>
                      )}
                    </div>
                    <h3 className="mb-2 font-headline text-2xl font-bold italic">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-white/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

