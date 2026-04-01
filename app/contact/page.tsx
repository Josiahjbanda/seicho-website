import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with SEICHO to architect your next phase of brand growth.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <header className="mx-auto mb-20 max-w-7xl px-8 pt-4">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h1 className="mb-8 font-headline text-5xl font-black italic leading-[0.9] tracking-tight md:text-8xl">
                Let&apos;s build <br />
                <span className="text-secondary">Impact.</span>
              </h1>
              <p className="max-w-2xl font-body text-xl text-on-surface-variant">
                We transform architectural concepts into market leadership.
                Reach out to start your trajectory.
              </p>
            </div>
            <div className="flex pb-4 md:col-span-4 md:justify-end">
              <div className="flex flex-col items-start gap-2 md:items-end">
                <span className="font-label text-[10px] text-outline">
                  Direct response
                </span>
                <a
                  href="tel:+264817722531"
                  className="font-headline text-xl font-bold italic hover:text-secondary"
                >
                  +264 81 772 2531
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Contact body */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            {/* Form */}
            <div className="space-y-16 lg:col-span-5">
              <div className="bg-surface-container-high p-8">
                <h2 className="mb-6 font-headline text-2xl font-bold italic">
                  The Studio
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <span className="mt-1 text-secondary">●</span>
                    <div>
                      <p className="font-body text-lg leading-relaxed">
                        7 Anderson Street, Eros
                      </p>
                      <p className="font-body text-on-surface-variant">
                        Windhoek, Namibia
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span className="mt-1 text-secondary">●</span>
                    <a
                      href="mailto:seicho82002@gmail.com"
                      className="font-body text-lg hover:text-secondary"
                    >
                      seicho82002@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-5">
                    <span className="mt-1 text-secondary">●</span>
                    <a
                      href="tel:+264817722531"
                      className="font-body text-lg hover:text-secondary"
                    >
                      +264 81 772 2531
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative h-[360px] overflow-hidden bg-surface-container-lowest shadow-sm md:h-[420px]">
                <Image
                  src="/images/portfolio.jpeg"
                  alt="Seicho portfolio collage"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

