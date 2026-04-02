import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogoCarousel";
import { MarketingCarousel } from "@/components/MarketingCarousel";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SEICHO’s capabilities in logo design, branding, marketing materials, and high-end brand systems.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="mt-24 flex-1">
        {/* Hero */}
        <header className="mx-auto mb-24 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="font-label mb-4 block text-xs text-secondary">
                Our Capabilities
              </span>
              <h1 className="font-headline text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
                Precision <br />
                <span className="text-secondary">Execution.</span>
              </h1>
            </div>
            <div className="md:col-span-4 pb-2">
              <p className="font-body text-base leading-relaxed tracking-wide text-on-surface-variant">
                We blend architectural discipline with radical creativity to
                forge brands that don&apos;t just exist—they dominate their
                vertical.
              </p>
            </div>
          </div>
        </header>

        {/* Services */}
        <section className="mx-auto max-w-7xl space-y-20 px-8 pb-24">
          {/* Graphic Design & Branding */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="relative h-[360px] overflow-hidden md:col-span-7 md:h-auto">
              <Image
                src="/images/branding/470921052_18071970823723614_3376230561147877796_n.jpg"
                alt="Seicho branding system"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-outline-variant/15 p-10 md:col-span-5">
              <h2 className="font-headline text-4xl italic">
                Graphic Design &amp; Branding
              </h2>
              <p className="mt-6 font-body text-on-surface-variant">
                We provide high-quality, creative design solutions tailored to
                both established brands and growing businesses.
              </p>
              <p className="mt-4 font-label text-[11px] text-on-surface-variant">
                Our services include:
              </p>
              <ul className="mt-4 space-y-2 font-body text-sm text-on-surface-variant">
                <li>• Custom logo design (premium brands &amp; small business branding)</li>
                <li>• Full brand identity development (colors, typography, brand guidelines)</li>
                <li>• Clothing brand design (streetwear, merchandise, apparel graphics)</li>
                <li>• Marketing materials (posters, flyers, banners, brochures)</li>
                <li>• Book covers and layout design</li>
                <li>• Digital illustrations and custom artwork</li>
                <li>• Business profiles and company portfolios</li>
                <li>• Packaging design</li>
              </ul>
            </div>
          </div>

          {/* Social Media Marketing & Management */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="order-2 flex flex-col justify-center border-r border-outline-variant/15 p-10 md:order-1 md:col-span-5">
              <h2 className="font-headline text-4xl italic">
                Social Media Marketing &amp; Management
              </h2>
              <p className="mt-6 font-body text-on-surface-variant">
                We help businesses build a strong online presence and turn
                followers into customers through strategic content and
                campaigns.
              </p>
              <p className="mt-4 font-label text-[11px] text-on-surface-variant">
                Our services include:
              </p>
              <ul className="mt-4 space-y-2 font-body text-sm text-on-surface-variant">
                <li>• Social media account management (Instagram, Facebook, TikTok, etc.)</li>
                <li>• Content creation (graphics, captions, reels concepts)</li>
                <li>• Social media communication campaigns (promotions, launches, awareness)</li>
                <li>• Monthly content planning and scheduling</li>
                <li>• Audience engagement and page growth strategies</li>
                <li>• Paid advertising (Facebook &amp; Instagram ads setup and management)</li>
                <li>• Brand positioning and messaging strategy</li>
                <li>• Performance tracking and reporting</li>
              </ul>
            </div>
            <div className="relative h-[420px] overflow-hidden order-1 md:order-2 md:col-span-7 md:h-auto">
              <MarketingCarousel />
            </div>
          </div>

          {/* Website Design (Basic) */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="relative h-[360px] overflow-hidden md:col-span-7 md:h-auto">
              <Image
                src="/images/portfolio.jpeg"
                alt="Website design preview"
                fill
                className="object-contain bg-black"
              />
            </div>
            <div className="flex flex-col justify-center border-l border-outline-variant/15 p-10 md:col-span-5">
              <h2 className="font-headline text-4xl italic">
                Website Design (Basic)
              </h2>
              <p className="mt-6 font-body text-on-surface-variant">
                We create clean, modern, and functional websites for businesses
                looking to establish an online presence.
              </p>
              <p className="mt-4 font-label text-[11px] text-on-surface-variant">
                Our services include:
              </p>
              <ul className="mt-4 space-y-2 font-body text-sm text-on-surface-variant">
                <li>• Basic business websites (informational sites)</li>
                <li>• Landing pages for campaigns or promotions</li>
                <li>• Mobile-friendly design</li>
                <li>• Integration with social media platforms</li>
                <li>• Basic SEO setup</li>
              </ul>
            </div>
          </div>

          {/* Content Creation */}
          <div className="grid grid-cols-1 overflow-hidden bg-surface-container-lowest md:grid-cols-12">
            <div className="order-2 flex flex-col justify-center border-r border-outline-variant/15 p-10 md:order-1 md:col-span-5">
              <h2 className="font-headline text-4xl italic">Content Creation</h2>
              <p className="mt-6 font-body text-on-surface-variant">
                We create engaging content that captures attention and
                represents your brand professionally.
              </p>
              <p className="mt-4 font-label text-[11px] text-on-surface-variant">
                Our services include:
              </p>
              <ul className="mt-4 space-y-2 font-body text-sm text-on-surface-variant">
                <li>• Social media visuals (posts, reels concepts, story designs)</li>
                <li>• Promotional content</li>
                <li>• Brand-focused content for marketing campaigns</li>
                <li>• Creative direction for shoots and visuals</li>
              </ul>
            </div>
            <div className="relative h-[320px] overflow-hidden order-1 md:order-2 md:col-span-7 md:h-auto">
              <LogoCarousel />
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-surface-container-lowest p-10">
            <h2 className="font-headline text-4xl italic">Additional Services</h2>
            <ul className="mt-6 space-y-2 font-body text-sm text-on-surface-variant">
              <li>• Marketing strategy and consultation</li>
              <li>• Campaign planning and execution</li>
              <li>• Business profile development</li>
              <li>• Creative direction for brands</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

