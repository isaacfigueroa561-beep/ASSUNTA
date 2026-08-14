import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export function StickyMobileCTA() {
  const [location] = useLocation();

  // Don't show on the page it would send people to
  if (location === '/product') return null;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary text-primary-foreground border-t border-primary-foreground/10 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-xs font-sans leading-tight">
          <span className="font-bold block">Creamy Alfredo</span>
          <span className="text-primary-foreground/70">At select Costco locations</span>
        </p>
        <Button
          asChild
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-bold shrink-0"
          data-testid="button-sticky-mobile-cta"
        >
          <Link href="/product">Shop the Sauce</Link>
        </Button>
      </div>
    </div>
  );
}
