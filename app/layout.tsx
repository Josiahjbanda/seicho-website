import type { Metadata } from "next";
import { Manrope, Noto_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "SEICHO Marketing | The Architectural Archive",
    template: "%s | SEICHO Marketing",
  },
  description:
    "SEICHO is a boutique editorial marketing studio crafting high-contrast visual identities and architectural brand systems.",
  metadataBase: new URL("https://seicho.example.com"),
  openGraph: {
    title: "SEICHO Marketing | The Architectural Archive",
    description:
      "Architectural brand systems, editorial marketing, and high-contrast visual identities for industry leaders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${notoSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}

