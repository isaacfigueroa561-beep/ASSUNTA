import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ArrowLeft, Clock, Users, ChefHat, Check, Minus, Plus } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { recipes } from '@/data/recipes';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

// ─── Ingredient scaling helpers ──────────────────────────────────────────────

/** Convert a fraction string like "1/2" or a number string to a float. */
function parseFrac(s: string): number {
  const parts = s.split('/');
  if (parts.length === 2) return Number(parts[0]) / Number(parts[1]);
  return Number(s);
}

/** Format a scaled float back to a readable string (whole, fraction, or mixed). */
function formatQty(n: number): string {
  if (n <= 0) return '0';

  // Common fraction targets (threshold ±0.07)
  const FRACS: [number, string][] = [
    [1 / 8, '⅛'], [1 / 4, '¼'], [1 / 3, '⅓'], [3 / 8, '⅜'],
    [1 / 2, '½'], [5 / 8, '⅝'], [2 / 3, '⅔'], [3 / 4, '¾'], [7 / 8, '⅞'],
  ];

  const whole = Math.floor(n);
  const rem = n - whole;

  if (rem < 0.07) return whole === 0 ? '0' : String(whole);

  for (const [val, sym] of FRACS) {
    if (Math.abs(rem - val) < 0.07) {
      return whole > 0 ? `${whole} ${sym}` : sym;
    }
  }

  // Fall back to 1 decimal
  const fixed = n.toFixed(1);
  return fixed.endsWith('.0') ? String(whole) : fixed;
}

/**
 * Scale the leading quantity in an ingredient string.
 * Handles: integers, decimals, simple fractions (1/2), mixed numbers (1 1/2).
 * Returns the original string unchanged if no leading number is found.
 */
function scaleIngredient(ingredient: string, ratio: number): string {
  if (ratio === 1) return ingredient;

  // Mixed number: "1 1/2 cups …"
  const mixedRe = /^(\d+)\s+(\d+\/\d+)\s+([\s\S]*)$/;
  const mixed = ingredient.match(mixedRe);
  if (mixed) {
    const val = (Number(mixed[1]) + parseFrac(mixed[2])) * ratio;
    return `${formatQty(val)} ${mixed[3]}`;
  }

  // Simple fraction: "1/2 cup …"
  const fracRe = /^(\d+\/\d+)\s+([\s\S]*)$/;
  const frac = ingredient.match(fracRe);
  if (frac) {
    const val = parseFrac(frac[1]) * ratio;
    return `${formatQty(val)} ${frac[2]}`;
  }

  // Integer or decimal: "3 tablespoons …" or "1.5 kg …"
  const numRe = /^(\d+(?:\.\d+)?)\s+([\s\S]*)$/;
  const num = ingredient.match(numRe);
  if (num) {
    const val = Number(num[1]) * ratio;
    return `${formatQty(val)} ${num[2]}`;
  }

  return ingredient; // No leading number (e.g. "Sea salt to taste")
}

// ─── Shared components ───────────────────────────────────────────────────────

function FadeInView({
  children, delay = 0, y = 24, x = 0, className = '',
}: {
  children: React.ReactNode; delay?: number; y?: number; x?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function IngredientItem({ text, index }: { text: string; index: number }) {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.li
      ref={ref}
      className="flex items-start gap-3 cursor-pointer group"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setChecked((c) => !c)}
      data-testid={`ingredient-${index}`}
    >
      <motion.span
        className={`flex-shrink-0 w-5 h-5 rounded-sm border flex items-center justify-center mt-0.5 transition-colors duration-200 ${
          checked ? 'bg-primary border-primary' : 'border-border group-hover:border-primary'
        }`}
        animate={checked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {checked && <Check size={11} className="text-primary-foreground" strokeWidth={3} />}
      </motion.span>
      <span className={`text-sm font-sans leading-relaxed transition-colors duration-200 ${checked ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
        {text}
      </span>
    </motion.li>
  );
}

function StepItem({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.li
      ref={ref}
      className="flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`step-${index + 1}`}
    >
      <motion.div
        className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center font-serif font-bold text-lg"
        whileHover={{ scale: 1.08, backgroundColor: 'hsl(0 65% 28%)' }}
        transition={{ duration: 0.2 }}
      >
        {index + 1}
      </motion.div>
      <div className="flex-1 pt-1.5">
        <p className="text-base font-sans text-foreground leading-relaxed">{text}</p>
      </div>
    </motion.li>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RecipeDetail() {
  const params = useParams();
  const slug = params.slug;
  const recipe = recipes.find((r) => r.slug === slug);

  useDocumentMeta(
    recipe ? recipe.title : 'Recipe Not Found',
    recipe ? recipe.description : 'The recipe you\'re looking for doesn\'t exist.'
  );

  const [currentServings, setCurrentServings] = useState(recipe?.servings ?? 4);

  if (!recipe) {
    return (
      <div className="min-h-[100dvh] flex flex-col">
        <Header />
        <PageBreadcrumb items={[{ label: 'Recipes', href: '/recipes' }, { label: 'Not Found' }]} />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Recipe Not Found</h1>
            <p className="text-base font-sans text-muted-foreground mb-6">The recipe you're looking for doesn't exist.</p>
            <Link href="/recipes" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:underline" data-testid="link-back-to-recipes">
              <ArrowLeft size={16} /> Back to Recipes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ratio = currentServings / recipe.servings;
  const scaledIngredients = recipe.ingredients.map((ing) => scaleIngredient(ing, ratio));

  const relatedRecipes = recipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 3);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Recipes', href: '/recipes' }, { label: recipe.title }]} />

      <main className="flex-1">
        {/* Hero */}
        <motion.section
          className="relative h-[52vh] md:h-[62vh] flex items-end overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 z-0">
            <motion.img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/recipes" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary-foreground/80 hover:text-primary-foreground mb-5 transition-colors" data-testid="link-back-to-recipes">
                <ArrowLeft size={16} /> Back to Recipes
              </Link>
              <span className="block text-xs font-sans font-bold uppercase tracking-wide text-accent mb-3">{recipe.category}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight">
                {recipe.title}
              </h1>
            </motion.div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            {/* Metadata strip */}
            <FadeInView className="flex flex-wrap gap-4 mb-10 pb-8 border-b border-border" delay={0.05}>
              {/* Prep time */}
              <motion.div
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-md border border-card-border"
                whileHover={{ y: -2, boxShadow: '0 6px 20px hsl(20 15% 15% / 0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <Clock size={20} className="text-primary" />
                <div>
                  <div className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide">Prep Time</div>
                  <div className="text-sm font-sans font-semibold text-foreground">{recipe.prepTime}</div>
                </div>
              </motion.div>

              {/* Cook time */}
              <motion.div
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-md border border-card-border"
                whileHover={{ y: -2, boxShadow: '0 6px 20px hsl(20 15% 15% / 0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <ChefHat size={20} className="text-primary" />
                <div>
                  <div className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide">Cook Time</div>
                  <div className="text-sm font-sans font-semibold text-foreground">{recipe.cookTime}</div>
                </div>
              </motion.div>

              {/* Servings — interactive */}
              <motion.div
                className="flex items-center gap-3 bg-card px-5 py-3 rounded-md border border-card-border"
                whileHover={{ y: -2, boxShadow: '0 6px 20px hsl(20 15% 15% / 0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <Users size={20} className="text-primary" />
                <div>
                  <div className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide">Servings</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <motion.button
                      onClick={() => setCurrentServings((s) => Math.max(1, s - 1))}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
                      whileTap={{ scale: 0.85 }}
                      disabled={currentServings <= 1}
                      aria-label="Decrease servings"
                      data-testid="button-servings-decrease"
                    >
                      <Minus size={11} strokeWidth={2.5} />
                    </motion.button>

                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={currentServings}
                        className="text-sm font-sans font-semibold text-foreground w-6 text-center tabular-nums"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        data-testid="text-servings-count"
                      >
                        {currentServings}
                      </motion.span>
                    </AnimatePresence>

                    <motion.button
                      onClick={() => setCurrentServings((s) => Math.min(50, s + 1))}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
                      whileTap={{ scale: 0.85 }}
                      disabled={currentServings >= 50}
                      aria-label="Increase servings"
                      data-testid="button-servings-increase"
                    >
                      <Plus size={11} strokeWidth={2.5} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Scaling badge — shown when not at default */}
              <AnimatePresence>
                {ratio !== 1 && (
                  <motion.button
                    onClick={() => setCurrentServings(recipe.servings)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 text-xs font-sans font-semibold text-accent-foreground hover:bg-accent/25 transition-colors self-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    data-testid="button-reset-servings"
                  >
                    {ratio > 1 ? `×${ratio.toFixed(ratio % 1 === 0 ? 0 : 1)}` : `÷${(1 / ratio).toFixed((1 / ratio) % 1 === 0 ? 0 : 1)}`} scaled
                    <span className="text-muted-foreground font-normal">Reset</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </FadeInView>

            {/* Description */}
            <FadeInView delay={0.1}>
              <p className="text-lg md:text-xl font-sans text-foreground mb-12 leading-relaxed max-w-3xl">
                {recipe.description}
              </p>
            </FadeInView>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Ingredients */}
              <FadeInView x={-20} y={0} className="lg:col-span-1">
                <div className="bg-card p-8 rounded-md border border-card-border lg:sticky lg:top-24">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-2xl font-serif font-bold text-foreground">Ingredients</h2>
                    <AnimatePresence>
                      {ratio !== 1 && (
                        <motion.span
                          className="text-xs font-sans font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mt-1"
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{ duration: 0.2 }}
                        >
                          Scaled
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-xs font-sans text-muted-foreground mb-6">Tap to check off as you go</p>
                  <ul className="space-y-3">
                    {scaledIngredients.map((ingredient, i) => (
                      <IngredientItem key={`${slug}-${i}-${currentServings}`} text={ingredient} index={i} />
                    ))}
                  </ul>
                </div>
              </FadeInView>

              {/* Steps */}
              <div className="lg:col-span-2">
                <FadeInView x={20} y={0}>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Instructions</h2>
                </FadeInView>
                <ol className="space-y-8">
                  {recipe.steps.map((step, i) => (
                    <StepItem key={i} text={step} index={i} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="py-16 md:py-20 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInView className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">More Like This</h2>
                <div className="w-24 h-0.5 bg-primary mx-auto" />
              </FadeInView>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedRecipes.map((r, i) => (
                  <FadeInView key={r.id} delay={i * 0.1}>
                    <motion.article
                      className="group bg-background border border-border rounded-md overflow-hidden shadow-md"
                      whileHover={{ y: -5, boxShadow: '0 20px 40px hsl(20 15% 15% / 0.10)' }}
                      transition={{ duration: 0.25 }}
                      data-testid={`card-related-recipe-${r.slug}`}
                    >
                      <div className="aspect-video overflow-hidden">
                        <motion.img src={r.image} alt={r.title} className="w-full h-full object-cover" whileHover={{ scale: 1.07 }} transition={{ duration: 0.5, ease: 'easeOut' }} />
                      </div>
                      <div className="p-6">
                        <span className="inline-block text-xs font-sans font-bold uppercase tracking-wide text-primary mb-2">{r.category}</span>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">{r.title}</h3>
                        <Link href={`/recipes/${r.slug}`} className="inline-block text-sm font-sans font-semibold text-primary recipe-card-link" data-testid={`link-view-recipe-${r.slug}`}>
                          View Recipe
                        </Link>
                      </div>
                    </motion.article>
                  </FadeInView>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
