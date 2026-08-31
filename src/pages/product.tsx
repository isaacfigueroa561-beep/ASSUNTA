import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Check } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const highlights = [
  'Fresh light cream, real butter, and aged Parmigiano Reggiano PDO — no shortcuts',
  'Ready in minutes: warm gently and toss with any pasta',
  '2 pack, 22oz jars (44oz total)',
  'Available at select Costco locations',
];

const ingredients = [
  {
    title: 'Parmigiano Reggiano PDO',
    copy: 'Certified and aged — the king of Italian cheeses gives the sauce its rich, nutty foundation.',
  },
  {
    title: 'Fresh Cream',
    copy: 'Fresh cream gives the sauce its velvety texture, clinging to every strand of pasta.',
  },
  {
    title: 'Real Butter',
    copy: 'Real butter binds the cream and cheese into a seamless, golden sauce. No artificial oils or thickeners.',
  },
];

const nutritionFacts = {
  servingsPerContainer: 'About 10 servings per container',
  servingSize: '1/4 Cup (61g)',
  calories: 90,
  rows: [
    { label: 'Total Fat', value: '8g', dv: '10%', bold: true },
    { label: 'Saturated Fat', value: '5g', dv: '25%', indent: true },
    { label: 'Trans Fat', value: '0g', indent: true },
    { label: 'Cholesterol', value: '40mg', dv: '13%', bold: true },
    { label: 'Sodium', value: '300mg', dv: '13%', bold: true },
    { label: 'Total Carbohydrate', value: '3g', dv: '1%', bold: true },
    { label: 'Dietary Fiber', value: '0g', dv: '0%', indent: true },
    { label: 'Total Sugars', value: '1g', indent: true },
    { label: 'Includes 0g Added Sugars', value: '', dv: '0%', indent: true },
    { label: 'Protein', value: '2g', bold: true },
  ],
  micronutrients: [
    { label: 'Vitamin D 0.2mcg', dv: '2%' },
    { label: 'Calcium 80mg', dv: '6%' },
    { label: 'Iron 0.1mg', dv: '0%' },
    { label: 'Potassium 60mg', dv: '2%' },
  ],
  ingredients:
    'Light cream, water, whey, Parmigiano Reggiano PDO cheese (part-skim milk, cheese cultures, salt, enzymes), butter (sweet cream, salt), modified food starch, enzyme modified egg yolk (egg yolk, salt, enzyme), salt, mascarpone cheese (pasteurized milk and cream, citric acid), xanthan gum, sodium phosphate, whey protein concentrate, dried onions, American sherry cooking wine (wine, grape alcohol, salt, potassium metabisulfite [preservative]), yeast extract, garlic.',
  allergens: 'Contains: Egg, Milk.',
};

const infoTabs = ['Nutrition Facts', 'Ingredients', 'Allergens'] as const;
type InfoTab = typeof infoTabs[number];

export default function Product() {
  const [activeTab, setActiveTab] = useState<InfoTab>('Nutrition Facts');
  useDocumentMeta(
    'Creamy Alfredo Sauce',
    'A super-premium alfredo sauce made with fresh cream, aged Parmigiano Reggiano PDO, and real butter. 2pk – 22oz, available at select Costco locations.'
  );
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Product' }]} />

      <main className="flex-1">
        {/* Hero — jar showcase band */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 px-4">
          {/* Subtle linen/dot texture so the dark band doesn't read flat */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, hsl(40 44% 96%) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-8"
            >
              <img
                src="/logo-medallion.webp"
                alt="Assunta — Since 1937"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.35em] text-accent-light">
                  Super-Premium · Select Costco Locations
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground uppercase tracking-[0.08em] leading-[1.1]">
                  Creamy Alfredo
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-serif text-primary-foreground/90 leading-relaxed">
                Each jar begins with the finest quality ingredients, like Parmigiano Reggiano PDO cheese, fresh cream, and real butter, slowly coming together to create a rich, layered taste meant to be savored in every bite.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 relative flex justify-center"
            >
              {/* Soft radial spotlight grounds the jar like a studio product shot */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[radial-gradient(circle,hsl(40_44%_96%/0.16)_0%,transparent_70%)]" />
              </div>
              <img
                src="/jar-front-cutout.webp"
                alt="Assunta's Creamy Alfredo jar"
                width={224}
                height={320}
                className="relative w-48 md:w-60 h-auto drop-shadow-[0_40px_45px_rgba(0,0,0,0.5)]"
                data-testid="img-product-brand-jar"
              />
              {/* Pedestal shadow to seat the jar on a surface rather than float */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full bg-black/35 blur-md"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </section>

        {/* Product listing layout */}
        <section className="bg-background py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Product image tile */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex flex-col items-center gap-8 lg:sticky lg:top-24"
            >
              <img
                src="/jar-2pack-front-v3.png"
                alt="Assunta's Creamy Alfredo, 2-pack"
                width={2314}
                height={2600}
                className="h-72 md:h-80 w-auto max-w-full"
                data-testid="img-product-hero-jar"
              />
              <img
                src="/jar-2pack-back-v3.png"
                alt="Assunta's Creamy Alfredo, 2-pack — back label with nutrition facts"
                width={1736}
                height={1371}
                className="h-72 md:h-80 w-auto max-w-full"
                data-testid="img-product-hero-jar-back"
              />
            </motion.div>

            {/* Buy box */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo-medallion.webp"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-auto"
                  aria-hidden="true"
                />
                <span className="text-sm font-sans font-semibold text-primary">Assunta's</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-2">
                Creamy Alfredo
              </h2>
              <p className="text-base font-sans text-muted-foreground mb-6">
                Super-Premium Pasta Sauce
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-sans text-foreground">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="max-w-[280px]">
                <div className="flex border-b border-border mb-4" role="tablist" aria-label="Product information">
                  {infoTabs.map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-2 text-xs font-sans font-bold uppercase tracking-wide border-b-2 -mb-px transition-colors ${
                        activeTab === tab
                          ? 'border-primary text-primary'
                          : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                      data-testid={`tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === 'Nutrition Facts' && (
                  <div className="border-2 border-foreground p-3 font-sans text-xs">
                    <h3 className="text-xl font-serif font-bold text-foreground border-b-4 border-foreground pb-0.5 mb-0.5">
                      Nutrition Facts
                    </h3>
                    <p className="text-[11px] text-foreground pb-0.5">{nutritionFacts.servingsPerContainer}</p>
                    <div className="flex justify-between items-baseline border-b-2 border-foreground pb-0.5 mb-0.5">
                      <p className="text-xs font-bold text-foreground">Serving size</p>
                      <p className="text-xs font-bold text-foreground">{nutritionFacts.servingSize}</p>
                    </div>

                    <div className="flex justify-between items-center border-b-4 border-foreground py-0.5 mb-0.5">
                      <p className="text-sm font-bold text-foreground">Calories</p>
                      <p className="text-xl font-bold text-foreground">{nutritionFacts.calories}</p>
                    </div>

                    <p className="text-[10px] text-right text-foreground border-b border-foreground pb-0.5 mb-0.5">
                      % Daily Value*
                    </p>

                    {nutritionFacts.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex justify-between border-b border-border py-0.5 text-[11px] text-foreground"
                      >
                        <p className={row.bold ? 'font-bold' : row.indent ? 'pl-3' : ''}>
                          {row.label}
                          {row.value ? ` ${row.value}` : ''}
                        </p>
                        {row.dv && <p className="font-bold">{row.dv}</p>}
                      </div>
                    ))}

                    <div className="py-1.5 border-b-4 border-foreground text-[11px] text-foreground space-y-0.5">
                      {nutritionFacts.micronutrients.map((item, i) => (
                        <p key={item.label}>
                          {item.label} {item.dv}
                          {i < nutritionFacts.micronutrients.length - 1 ? ' •' : ''}
                        </p>
                      ))}
                    </div>

                    <p className="text-[9px] text-muted-foreground leading-snug pt-1.5">
                      *The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                    </p>
                  </div>
                )}

                {activeTab === 'Ingredients' && (
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    {nutritionFacts.ingredients}
                  </p>
                )}

                {activeTab === 'Allergens' && (
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    {nutritionFacts.allergens}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Ingredients */}
        <section className="py-20 md:py-28 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary mb-4">
                The Finest Quality Ingredients
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Three Ingredients. One Standard.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {ingredients.map(({ title, copy }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="text-center px-4"
                >
                  <div className="w-10 h-px bg-primary/50 mx-auto mb-6" aria-hidden="true" />
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{title}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 px-4 text-center">
          <div className="container mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Taste the Tradition
            </h2>
            <p className="font-sans text-muted-foreground">
              Discover recipes crafted around Assunta's Creamy Alfredo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-bold"
              data-testid="button-product-cta"
            >
              <Link href="/recipes">Explore Recipes</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
