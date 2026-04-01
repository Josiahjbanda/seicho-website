"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = [
  "All works",
  "Logo Design",
  "Branding",
  "Social Media Graphics",
  "Posters",
] as const;

type Filter = (typeof FILTERS)[number];

const SMALL_PROJECTS = [
  // Logo design work
  {
    title: "Logo Suite 01",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464562358_18066532189723614_8178303611152259375_n.webp",
    description: "Logo exploration for a modern, growth-focused Namibian brand.",
  },
  {
    title: "Logo Suite 02",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464820507_18067077709723614_5839465353225522232_n.webp",
    description: "High-contrast logo lockups designed for digital and print.",
  },
  {
    title: "Logo Suite 03",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464875672_18067078093723614_5724466319355510079_n.webp",
    description: "Wordmark variations focused on legibility and impact.",
  },
  {
    title: "Logo Suite 04",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464892313_18067078006723614_6350108267925394377_n.webp",
    description: "Minimalist mark system with strong structural grid.",
  },
  {
    title: "Logo Suite 05",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464909249_18067078363723614_6039127029009156167_n.webp",
    description: "Bold logo compositions that hold in motion and static.",
  },
  {
    title: "Logo Suite 06",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464913981_18067078417723614_6550198145372460755_n.webp",
    description: "Exploration of monograms and symbol-led identities.",
  },
  {
    title: "Logo Suite 07",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464913983_18067078129723614_6090249735890847609_n.webp",
    description: "Logo system built to scale across social and signage.",
  },
  {
    title: "Logo Suite 08",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/464967396_18067077793723614_2083091193338762186_n.webp",
    description: "Icon-led marks supporting a broader visual identity.",
  },
  {
    title: "Logo Suite 09",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/465015455_18067077976723614_787405509737620662_n.webp",
    description: "Explorations in typography, weight, and spacing.",
  },
  {
    title: "Logo Suite 10",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/465100370_18067077931723614_4043475598011051560_n.webp",
    description: "Premium logo marks designed for luxury positioning.",
  },
  {
    title: "Logo Suite 11",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/465196161_18067078222723614_7035171916813918397_n.webp",
    description: "Alternate directions for the same core brand concept.",
  },
  {
    title: "Logo Suite 12",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/465323916_18067078174723614_8606238553878561690_n.webp",
    description: "Logo variants tested for legibility across platforms.",
  },
  {
    title: "Logo Suite 13",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/472943505_18074117911723614_4856386886108055524_n.jpg",
    description: "Applied logo system in presentation and print context.",
  },
  {
    title: "Logo Suite 14",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/475517147_18075998146723614_9004796139459885742_n.jpg",
    description: "Logo shown in situ on business collateral.",
  },
  {
    title: "Logo Suite 15",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/476309870_18076776763723614_2773642168011461371_n.jpg",
    description: "Identity lockups prepared for campaign roll-outs.",
  },
  {
    title: "Logo Suite 16",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/479528810_18077456674723614_7127697191766786128_n.jpg",
    description: "Logo compositions optimised for social feeds.",
  },
  {
    title: "Logo Suite 17",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/482329606_18078991432723614_5210374838306392220_n.jpg",
    description: "Extended brand mark exploration and refinement.",
  },
  {
    title: "Logo Suite 18",
    meta: "Logo Design",
    category: "Logo Design" as Filter,
    src: "/images/logos/622715883_18019516475799834_5263672600545290452_n.webp",
    description: "Logo grid showcasing a collection of recent marks.",
  },
  // Social media work
  {
    title: "Social Media Grid 01",
    meta: "Social Media",
    category: "Social Media Graphics" as Filter,
    src: "/images/marketing/483755488_17975673071829938_6591457656890392628_n.jpg",
    description: "Carousel-ready social tiles designed for campaign storytelling.",
  },
  {
    title: "Social Media Grid 02",
    meta: "Social Media",
    category: "Social Media Graphics" as Filter,
    src: "/images/marketing/465938352_18067766905723614_390100070945113006_n.jpg",
    description: "Grid of social posts showing a full brand narrative.",
  },
  {
    title: "Social Media Grid 03",
    meta: "Social Media",
    category: "Social Media Graphics" as Filter,
    src: "/images/marketing/469654645_17875657515227474_1255616554932729969_n.jpg",
    description: "Paid and organic social graphics built from one design system.",
  },
  // Posters
  {
    title: "Poster System 01",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/483194892_17997447368754804_3269018247791580190_n.jpg",
    description:
      "Large-format poster exploring high-contrast editorial layouts.",
  },
  {
    title: "Poster System 02",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/483755488_17975673071829938_6591457656890392628_n.jpg",
    description:
      "Campaign poster suite with bold typographic hierarchy.",
  },
  {
    title: "Poster System 03",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/619457495_17955120372058120_979209786747586376_n.webp",
    description:
      "Series of vertical posters built for in-store and digital use.",
  },
  {
    title: "Poster System 04",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/621575140_18101259631830266_7120795179058419581_n.webp",
    description:
      "Poster treatment combining photography and bold red accents.",
  },
  {
    title: "Poster System 05",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/622425387_18093431248988785_3401754102962932253_n.webp",
    description:
      "Minimalist poster exploring pure type and negative space.",
  },
  {
    title: "Poster System 06",
    meta: "Posters",
    category: "Posters" as Filter,
    src: "/images/marketing/622809611_17971153106843912_318541326718630840_n.webp",
    description:
      "Grid of poster variations for multi-channel roll-out.",
  },
  // Branding / marketing visuals (single hero image)
  {
    title: "Seicho Branding",
    meta: "Branding",
    category: "Branding" as Filter,
    src: "/images/branding/470921052_18071970823723614_3376230561147877796_n.jpg",
    description: "Hero branding image representing the Seicho visual system.",
  },
] as const;

export function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All works");

  const visibleSmallProjects = SMALL_PROJECTS.filter(
    (project) =>
      activeFilter === "All works" || project.category === activeFilter
  );

  const showHero =
    activeFilter === "All works" || activeFilter === "Branding";

  return (
    <section className="mx-auto max-w-7xl px-8 pb-16 pt-4">
      <div className="mb-10 flex flex-col items-end gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="font-label mb-4 block text-xs text-secondary">
            Our Work
          </span>
          <h1 className="font-headline text-5xl font-black italic leading-tight md:text-7xl">
            Selected Artifacts
          </h1>
        </div>
        <div className="max-w-xs border-l-2 border-primary pl-4 pb-2">
          <p className="font-body text-sm tracking-wide text-on-surface-variant">
            A growing archive of branding, logo design, social content, and
            campaign visuals crafted for Namibian and regional brands that want
            to look as premium as they perform.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap gap-4 border-b border-outline-variant/20 pb-4 text-sm">
        {FILTERS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActiveFilter(label)}
            className={`font-body cursor-pointer px-4 py-2 ${
              activeFilter === label
                ? "border-b-2 border-secondary text-secondary font-semibold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Project 1 large */}
        {showHero && (
          <article className="group relative cursor-pointer overflow-hidden bg-surface-container-lowest md:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/logo.jpeg"
                alt="Kinetica Identity primary logo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between border-t border-transparent p-8 transition-colors group-hover:bg-surface-container-high">
              <div>
                <span className="font-label mb-2 block text-[10px] text-on-surface-variant">
                  Branding / 2024
                </span>
                <h2 className="font-headline text-3xl font-bold italic">
                  Seicho Identity
                </h2>
                <p className="mt-4 max-w-xl font-body text-sm text-on-surface-variant">
                  A complete visual re-architecture for a growth-stage brand:
                  logomark, typographic system, grid, and presentation materials
                  designed to communicate authority to investors and clients
                  across every touchpoint.
                </p>
              </div>
            </div>
          </article>
        )}

        {/* Smaller squares */}
        {visibleSmallProjects.map((item, index) => (
          <article
            key={item.title}
            className="group relative cursor-pointer overflow-hidden bg-surface-container-lowest md:col-span-4"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 transition-colors group-hover:bg-surface-container-high">
              <span className="font-label mb-1 block text-[10px] text-on-surface-variant">
                {item.meta}
              </span>
              <h3 className="font-headline text-xl font-bold">{item.title}</h3>
              <p className="mt-3 font-body text-xs text-on-surface-variant">
                {item.description}
              </p>
            </div>
          </article>
        ))}

        {/* Full width CTA */}
        <section className="group relative flex flex-col items-center justify-between bg-primary px-10 py-20 text-on-primary md:col-span-12 md:flex-row">
          <div className="mb-12 max-w-xl md:mb-0">
            <h2 className="mb-6 font-headline text-4xl italic md:text-5xl text-white">
              Need a structural shift in your brand?
            </h2>
            <p className="mb-8 font-body text-lg text-white">
              We don&apos;t follow trends. We architect timeless visual systems
              that command authority in saturated markets.
            </p>
            <a
              href="/contact"
              className="font-label inline-flex cursor-pointer items-center justify-center border border-secondary bg-secondary px-10 py-5 text-xs font-bold text-white transition-colors hover:bg-transparent hover:text-secondary"
            >
              Start a project
            </a>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden md:h-auto md:w-1/3 md:aspect-[4/5]">
            <Image
              src="/images/portfolio.jpeg"
              alt="SEICHO portfolio highlight"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

