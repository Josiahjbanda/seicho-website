import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioContent } from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated archive of SEICHO’s branding, logo design, social media, and editorial marketing work.",
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        <PortfolioContent />

        {/* Specs strip */}
        <section className="bg-surface-container-high py-10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-8">
            {[
              "Adobe Creative Suite",
              "Visual Strategy",
              "Brand Architecture",
              "Editorial Design",
              "Grid Systems",
            ].map((label) => (
              <span
                key={label}
                className="bg-surface-container-highest px-4 py-2 text-[10px] font-label text-on-surface-variant"
              >
                {label}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

