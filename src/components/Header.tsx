import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-serif font-semibold text-foreground hover:text-primary transition-colors"
            data-testid="link-home-logo"
          >
            Assunta
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-sans font-medium transition-colors relative ${
                  location === item.href
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                {location === item.href && (
                  <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-sans font-medium transition-colors ${
                    location === item.href
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
