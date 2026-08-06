import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/logo-medallion.webp"
              alt="Assunta — Since 1937"
              width={64}
              height={64}
              className="h-16 w-auto object-contain opacity-90"
            />
            <p className="text-sm text-muted-foreground font-sans">
              Preserving Italian heritage, one recipe at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-sans font-bold text-foreground mb-4 uppercase tracking-wide">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-product"
              >
                Product
              </Link>
              <Link
                href="/about"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                About
              </Link>
              <Link
                href="/recipes"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-recipes"
              >
                Recipes
              </Link>
              <Link
                href="/faq"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-faq"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-sans font-bold text-foreground mb-4 uppercase tracking-wide">
              Follow the Tradition
            </h4>
            <p className="text-sm font-sans text-muted-foreground mb-4">
              Available at your local Costco.
            </p>
            <p className="text-xs font-sans text-muted-foreground">
              © {new Date().getFullYear()} Assunta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
