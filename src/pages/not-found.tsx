import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/hooks/use-document-meta';

export default function NotFound() {
  useDocumentMeta(
    'Page Not Found',
    'The page you\'re looking for doesn\'t exist. Explore Assunta\'s Creamy Alfredo recipes and story instead.'
  );

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl text-center">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary mb-6">
            404
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            This Page Wandered Off the Table
          </h1>
          <p className="text-base md:text-lg font-sans text-muted-foreground mb-10">
            We couldn't find what you're looking for. It may have moved, or the link
            might be off — but there's plenty more to taste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-bold"
              data-testid="button-404-home"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-sans font-bold"
              data-testid="button-404-recipes"
            >
              <Link href="/recipes">Explore Recipes</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
