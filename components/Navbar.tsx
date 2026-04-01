import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="font-headline text-2xl font-black tracking-tight text-primary"
        >
          SEICHO
        </Link>
        <div className="hidden items-center space-x-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="font-label bg-primary px-6 py-3 text-xs font-bold text-white hover:bg-secondary transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}

