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
                Ready to elevate your brand in Namibia? Tell us what you’re
                building and we’ll respond with a clear next step—whether you
                need graphic design, branding, content creation, or social media
                marketing that performs.
              </p>
            </div>
            <div className="flex pb-4 md:col-span-4 md:justify-end">
              <div className="flex flex-col items-start gap-2 md:items-end">
                <span className="font-label text-[10px] text-outline">
                  Direct response
                </span>
                <a
                  href="tel:+264817722531"
                  className="cursor-pointer font-headline text-xl font-bold italic hover:text-secondary"
                >
                  +264 81 772 2531
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Contact body */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            {/* Left column: contact methods + studio */}
            <div className="space-y-10 lg:col-span-5">
              <div className="bg-surface-container-high p-8">
                <div className="mb-8">
                  <span className="font-label mb-2 block text-[10px] tracking-[0.2em] text-outline">
                    CONTACT OPTIONS
                  </span>
                  <h2 className="font-headline text-3xl font-bold italic">
                    Choose your channel.
                  </h2>
                  <p className="mt-3 font-body text-on-surface-variant">
                    For quotes, timelines, and collaborations—reach us instantly.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="mailto:seicho82002@gmail.com?subject=SEICHO%20Enquiry"
                    className="group cursor-pointer border border-outline-variant/40 bg-surface px-5 py-4 transition-colors hover:bg-surface-container-low"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                          EMAIL
                        </p>
                        <p className="mt-2 font-headline text-xl font-bold italic group-hover:text-secondary">
                          seicho82002@gmail.com
                        </p>
                        <p className="mt-2 font-body text-sm text-on-surface-variant">
                          Best for briefs, attachments, and detailed requests.
                        </p>
                      </div>
                      <span className="mt-1 text-secondary">↗</span>
                    </div>
                  </a>

                  <a
                    href="tel:+264817722531"
                    className="group cursor-pointer border border-outline-variant/40 bg-surface px-5 py-4 transition-colors hover:bg-surface-container-low"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                          CALL
                        </p>
                        <p className="mt-2 font-headline text-xl font-bold italic group-hover:text-secondary">
                          +264 81 772 2531
                        </p>
                        <p className="mt-2 font-body text-sm text-on-surface-variant">
                          Fast answers for budgets, timelines, and availability.
                        </p>
                      </div>
                      <span className="mt-1 text-secondary">↗</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/264817722531"
                    target="_blank"
                    rel="noreferrer"
                    className="group cursor-pointer border border-outline-variant/40 bg-surface px-5 py-4 transition-colors hover:bg-surface-container-low"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-label text-[10px] tracking-[0.2em] text-outline">
                          WHATSAPP
                        </p>
                        <p className="mt-2 font-headline text-xl font-bold italic group-hover:text-secondary">
                          Message the studio
                        </p>
                        <p className="mt-2 font-body text-sm text-on-surface-variant">
                          Ideal for quick updates and approvals.
                        </p>
                      </div>
                      <span className="mt-1 text-secondary">↗</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-surface-container-low p-8">
                <h3 className="mb-5 font-headline text-2xl font-bold italic">
                  The Studio
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <span className="mt-2 text-secondary">●</span>
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
                    <span className="mt-2 text-secondary">●</span>
                    <div>
                      <p className="font-body text-lg leading-relaxed">
                        Response time
                      </p>
                      <p className="font-body text-on-surface-variant">
                        Typically within 24 hours (weekdays).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: next steps + FAQ + visual */}
            <div className="space-y-10 lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="border border-outline-variant/40 bg-surface-container-low p-8">
                  <h3 className="mb-4 font-headline text-2xl font-bold italic">
                    What happens next?
                  </h3>
                  <ol className="space-y-3 font-body text-sm text-on-surface-variant">
                    <li>
                      <span className="text-on-surface">1.</span> We review your
                      goals and references.
                    </li>
                    <li>
                      <span className="text-on-surface">2.</span> We suggest the
                      best service package.
                    </li>
                    <li>
                      <span className="text-on-surface">3.</span> You receive a
                      clear quote and timeline.
                    </li>
                  </ol>
                </div>

                <div className="border border-outline-variant/40 bg-surface-container-low p-8">
                  <h3 className="mb-4 font-headline text-2xl font-bold italic">
                    FAQs
                  </h3>
                  <div className="space-y-4 font-body text-sm text-on-surface-variant">
                    <div>
                      <p className="text-on-surface">
                        Do you work with startups?
                      </p>
                      <p>
                        Yes—startups, SMEs, and established brands across
                        Namibia.
                      </p>
                    </div>
                    <div>
                      <p className="text-on-surface">
                        Can you manage our socials monthly?
                      </p>
                      <p>
                        Yes. We offer monthly management, strategy, and content
                        creation.
                      </p>
                    </div>
                    <div>
                      <p className="text-on-surface">
                        What do you need to start?
                      </p>
                      <p>
                        Your goal, deadline, and any references or brand assets
                        you already have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[320px] overflow-hidden bg-surface-container-lowest shadow-sm md:h-[380px]">
                <Image
                  src="/images/portfolio.jpeg"
                  alt="Seicho portfolio work preview"
                  fill
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

