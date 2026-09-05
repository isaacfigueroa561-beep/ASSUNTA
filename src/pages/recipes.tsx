import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { recipes, Recipe, categoryLabels as recipeCategoryLabels } from '@/data/recipes';
import { Clock, Users, Search, X } from 'lucide-react';
import { AnimatedThumbnail } from '@/components/AnimatedThumbnail';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const categories = ['all', 'pasta', 'secondi'] as const;
type Category = typeof categories[number];

const categoryLabels: Record<Category, string> = {
  all: 'All',
  ...recipeCategoryLabels,
};

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  // Split with a captured group → odd indices are the matched substrings
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="bg-primary/20 text-primary font-semibold rounded-[2px] px-0.5 not-italic"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

function RecipeCard({ recipe, index, query, matchedIngredient }: { recipe: Recipe; index: number; query: string; matchedIngredient?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      layout
      className="group bg-card border border-card-border rounded-sm overflow-hidden shadow-md h-full flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px hsl(20 15% 15% / 0.12)' }}
      data-testid={`card-recipe-${recipe.slug}`}
    >
      <div className="aspect-video overflow-hidden relative">
        <AnimatedThumbnail images={recipe.images} alt={recipe.title} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block text-xs font-sans font-bold uppercase tracking-wide text-primary mb-2">
          {recipeCategoryLabels[recipe.category]}
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          <HighlightText text={recipe.title} query={query} />
        </h3>
        <p className="text-sm font-sans text-muted-foreground mb-4 line-clamp-2">
          <HighlightText text={recipe.description} query={query} />
        </p>
        {matchedIngredient && (
          <p className="text-xs font-sans text-muted-foreground mb-4" data-testid={`ingredient-match-${recipe.slug}`}>
            Ingredient:{' '}
            <span className="text-foreground">
              <HighlightText text={matchedIngredient} query={query} />
            </span>
          </p>
        )}
        <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground mb-5 mt-auto pt-2">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {recipe.prepTime}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            {recipe.servings} servings
          </span>
        </div>
        <Link
          href={`/recipes/${recipe.slug}`}
          className="inline-block text-sm font-sans font-semibold text-primary recipe-card-link"
          data-testid={`link-view-recipe-${recipe.slug}`}
        >
          View Recipe
        </Link>
      </div>
    </motion.article>
  );
}

export default function Recipes() {
  useDocumentMeta(
    'Recipes',
    'Recipes crafted around Assunta\'s Creamy Alfredo: from creamy shrimp to a classic fettuccine and a baked Florentine lasagna.'
  );
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredRecipes = recipes
    .filter((recipe) => {
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      return (
        recipe.title.toLowerCase().includes(normalizedQuery) ||
        recipe.description.toLowerCase().includes(normalizedQuery) ||
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(normalizedQuery))
      );
    })
    .map((recipe) => {
      if (!normalizedQuery) return { recipe, matchedIngredient: undefined };
      const matchesTitle = recipe.title.toLowerCase().includes(normalizedQuery);
      const matchesDescription = recipe.description.toLowerCase().includes(normalizedQuery);
      if (matchesTitle || matchesDescription) return { recipe, matchedIngredient: undefined };
      const matched = recipe.ingredients.find((ing) => ing.toLowerCase().includes(normalizedQuery));
      return { recipe, matchedIngredient: matched };
    });

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Recipes' }]} />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Recipes
            </h1>
            <motion.div
              className="w-24 h-0.5 bg-primary mx-auto mb-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="text-base md:text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
              Recipes built around Assunta's Creamy Alfredo, inspired by tradition.
            </p>
          </motion.div>

          {/* Search Input */}
          <motion.div
            className="max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or ingredient…"
                className="w-full pl-11 pr-10 py-3 rounded-sm border border-card-border bg-card text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                data-testid="input-search"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                  data-testid="button-clear-search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-2 rounded-full font-sans font-medium text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-primary'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-testid={`button-filter-${category}`}
              >
                {selectedCategory === category && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{categoryLabels[category]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Recipe Grid */}
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {filteredRecipes.length === 0 ? (
                <motion.div
                  key="no-results"
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  data-testid="no-results"
                >
                  <p className="text-2xl font-serif text-muted-foreground mb-3">Nessun risultato</p>
                  <p className="text-sm font-sans text-muted-foreground">
                    No recipes found for <span className="font-semibold text-foreground">"{searchQuery}"</span>. Try a different name or ingredient.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredRecipes.map(({ recipe, matchedIngredient }, index) => (
                    <RecipeCard key={recipe.id} recipe={recipe} index={index} query={normalizedQuery} matchedIngredient={matchedIngredient} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </main>

      <Footer />
    </div>
  );
}
