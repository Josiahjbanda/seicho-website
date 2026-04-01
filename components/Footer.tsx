export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant/15 bg-gray-50 px-8 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <div className="font-headline text-xl font-bold text-primary">
            SEICHO
          </div>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-on-surface-variant">
            Building the future of marketing through architectural precision and
            editorial authority.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-headline text-xl">Contact</h4>
          <p className="font-body text-sm text-on-surface-variant">
            7 Anderson Street, Eros
          </p>
          <a
            href="tel:+264817722531"
            className="font-body text-sm text-on-surface-variant hover:text-secondary"
          >
            +264 81 772 2531
          </a>
          <a
            href="mailto:seicho82002@gmail.com"
            className="block font-body text-sm text-on-surface-variant hover:text-secondary"
          >
            seicho82002@gmail.com
          </a>
        </div>
        <div className="space-y-4 md:text-right">
          <h4 className="font-headline text-xl italic">Engagement</h4>
          <p className="font-body text-sm text-on-surface-variant">
            Subscribe for quarterly insights.
          </p>
          <div className="flex md:justify-end">
            <input
              type="email"
              placeholder="Email"
              className="w-48 border-b border-outline/40 bg-transparent py-2 text-sm outline-none focus:border-secondary"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-outline-variant/10 pt-8 text-xs uppercase tracking-[0.2em] text-on-surface-variant/70 md:flex-row">
        <span>© {new Date().getFullYear()} SEICHO MARKETING. All rights reserved.</span>
        <span>Volume I — Issue 04</span>
      </div>
    </footer>
  );
}

