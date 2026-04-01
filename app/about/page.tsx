import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "SEICHO is a creative powerhouse dedicated to the architectural precision of marketing and editorial authority.",
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
                SEICHO is a creative powerhouse dedicated to the architectural
                precision of marketing. We treat every campaign as a high-value
                artifact.
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
                  Founded on the principles of editorial authority, SEICHO
                  Marketing was born from a desire to strip away the noise of
                  conventional advertising. We believe that clarity is the
                  ultimate luxury. Our approach combines the meticulousness of
                  print journalism with the agility of modern digital strategy.
                </p>
                <p>
                  We don&apos;t just manage brands. We archive their essence. By
                  focusing on intentional asymmetry and high-contrast visual
                  storytelling, we ensure our clients don&apos;t just stand
                  out—they command the space they occupy.
                </p>
                <div className="pt-8">
                  <span className="font-label mb-2 block text-xs text-on-surface-variant">
                    Established
                  </span>
                  <span className="font-headline text-3xl font-bold">
                    2020 — WINDHOEK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <h2 className="mb-20 text-center font-headline text-5xl font-bold italic">
            Professional Record
          </h2>
          <div className="divide-y divide-outline-variant/30">
            <div className="group grid grid-cols-1 items-baseline gap-4 py-10 px-4 hover:bg-surface-container-high transition-colors md:grid-cols-12">
              <div className="font-label text-sm font-bold tracking-tight text-secondary md:col-span-2">
                2022 — PRESENT
              </div>
              <div className="font-headline text-2xl font-bold md:col-span-4">
                Principal Creative
              </div>
              <div className="font-body text-on-surface-variant md:col-span-4">
                Lead Strategy &amp; Brand Identity at SEICHO. Overseeing the
                evolution of editorial design in digital spaces.
              </div>
            </div>
            <div className="group grid grid-cols-1 items-baseline gap-4 py-10 px-4 hover:bg-surface-container-high transition-colors md:grid-cols-12">
              <div className="font-label text-sm font-bold tracking-tight text-on-surface-variant md:col-span-2">
                2018 — 2021
              </div>
              <div className="font-headline text-2xl font-bold md:col-span-4">
                Senior Designer
              </div>
              <div className="font-body text-on-surface-variant md:col-span-4">
                Focusing on high-end luxury retail branding and
                typography-led campaigns for international clients.
              </div>
            </div>
            <div className="group grid grid-cols-1 items-baseline gap-4 py-10 px-4 hover:bg-surface-container-high transition-colors md:grid-cols-12">
              <div className="font-label text-sm font-bold tracking-tight text-on-surface-variant md:col-span-2">
                2015 — 2018
              </div>
              <div className="font-headline text-2xl font-bold md:col-span-4">
                Digital Strategist
              </div>
              <div className="font-body text-on-surface-variant md:col-span-4">
                Developing multi-channel marketing ecosystems for emerging tech
                startups and venture firms.
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
                },
                {
                  id: "02",
                  title: "Illustrator",
                  body: "Vector-perfect brand systems & structural iconography.",
                },
                {
                  id: "03",
                  title: "Figma",
                  body: "Interactive prototyping & design system orchestration.",
                },
                {
                  id: "04",
                  title: "InDesign",
                  body: "Layout architecture for luxury print & digital publications.",
                },
                {
                  id: "05",
                  title: "Strategy",
                  body: "Market positioning & growth-focused ecosystem mapping.",
                },
                {
                  id: "06",
                  title: "UI/UX",
                  body: "Human-centric interface logic & behavioral research.",
                },
                {
                  id: "07",
                  title: "After Effects",
                  body: "Dynamic brand motion & cinematic content sequences.",
                },
                {
                  id: "08",
                  title: "Copywriting",
                  body: "The editorial voice: persuasive, concise, and commanding.",
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

