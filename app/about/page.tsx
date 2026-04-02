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
        <section className="mx-auto mb-24 max-w-7xl px-8 pt-8">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="font-label mb-6 block text-sm text-secondary">
                The Editorial Profile
              </span>
              <h1 className="font-headline text-5xl font-black italic leading-[0.9] tracking-tight md:text-7xl">
                Crafting Digital <br />
                Legacies.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="font-body text-lg leading-relaxed tracking-wide text-on-surface-variant">
                At SEICHO, creativity meets strategy to bring brands to life
                through graphic design, branding, and social media marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Bio */}
        <section className="mb-24 bg-surface-container-low py-24 px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src="/images/portfolio.jpeg"
                  alt="Seicho portfolio highlight"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:col-span-7">
              <h2 className="border-l-4 border-secondary pl-8 font-headline text-4xl font-bold italic mb-12">
                Beyond the Surface
              </h2>
              <div className="space-y-8 font-body text-lg leading-relaxed text-on-surface">
                <p>
                  At SEICHO, creativity meets strategy to bring brands to life.
                  Founded in 2022 at just 20 years old, SEICHO has grown into a
                  dynamic creative studio specializing in graphic design, brand
                  identity, illustrations, logo development, and full-scale
                  social media marketing and management.
                </p>
                <p>
                  Driven by a passion for visual storytelling and innovation,
                  SEICHO has delivered high-quality, impactful designs for a
                  diverse range of clients - from small startups to established
                  organizations such as MTC, UNAM, Namibia Nature Foundation,
                  and Omeva Consulting. Each project is approached with
                  precision, originality, and a deep understanding of how to
                  communicate a brand’s message effectively.
                </p>
                <p>
                  Beyond design, SEICHO offers strategic content creation and
                  digital marketing solutions tailored to elevate brand
                  presence, engage audiences, and drive real results. With a
                  commitment to excellence and a keen eye for detail, SEICHO
                  continues to push creative boundaries, helping businesses
                  stand out in an increasingly competitive digital landscape.
                </p>
                <div className="pt-8">
                  <span className="font-label mb-2 block text-xs text-on-surface-variant">
                    Established
                  </span>
                  <span className="font-headline text-3xl font-bold">
                    2022 — WINDHOEK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="bg-primary px-8 py-32 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold italic md:text-5xl">
                Technical Arsenal
              </h2>
              <p className="max-w-xl font-body text-on-primary/70">
                Precision tools used to forge uncompromising visual identities
                and high-performance digital architectures.
              </p>
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
                  body: "Layout architecture for luxury print & digital publications.",
                  mark: "Id",
                  iconSrc: "/images/tools/indesign.png",
                },
                {
                  id: "05",
                  title: "Strategy",
                  body: "Market positioning & growth-focused ecosystem mapping.",
                  mark: "St",
                },
                {
                  id: "06",
                  title: "UI/UX",
                  body: "Human-centric interface logic & behavioral research.",
                  mark: "UX",
                  iconSrc: "/images/tools/uiux.png",
                },
                {
                  id: "07",
                  title: "After Effects",
                  body: "Dynamic brand motion & cinematic content sequences.",
                  mark: "Ae",
                  iconSrc: "/images/tools/after-effects.png",
                },
                {
                  id: "08",
                  title: "Copywriting",
                  body: "The editorial voice: persuasive, concise, and commanding.",
                  mark: "CW",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex aspect-square flex-col justify-between bg-primary p-10 transition-colors hover:bg-primary-container"
                >
                  <span className="font-label text-xs text-white/50">
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
                    <h3 className="mb-2 font-headline text-2xl">{item.title}</h3>
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

