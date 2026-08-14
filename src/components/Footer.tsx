import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/logo-medallion.webp"
              alt="Assunta — Since 1937"
              width={64}
              height={64}
              className="h-16 w-auto object-contain opacity-90 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 font-sans">
              Preserving Italian heritage, one recipe at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-sans font-bold text-primary-foreground mb-4 uppercase tracking-wide">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-product"
              >
                Product
              </Link>
              <Link
                href="/about"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-about"
              >
                About
              </Link>
              <Link
                href="/recipes"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-recipes"
              >
                Recipes
              </Link>
              <Link
                href="/faq"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-faq"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm font-sans text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-sans font-bold text-primary-foreground mb-4 uppercase tracking-wide">
              Follow the Tradition
            </h4>
            <p className="text-sm font-sans text-primary-foreground/70 mb-4">
              Available at select Costco locations.
            </p>
            <p className="text-xs font-sans text-primary-foreground/70 mb-2">
              © {new Date().getFullYear()} Assunta. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-xs font-sans text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-2 transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
              <span className="text-xs text-primary-foreground/40" aria-hidden="true">·</span>
              <Link
                href="/terms"
                className="text-xs font-sans text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-2 transition-colors"
                data-testid="link-footer-terms"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
