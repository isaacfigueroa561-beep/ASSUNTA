import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

function FadeInView({
  children,
  delay = 0,
  y = 30,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  useDocumentMeta(
    'Our Story',
    'Bologna, 1937: the story of Assunta Moretti and the recipe that became Assunta\'s Creamy Alfredo.'
  );
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'About' }]} />

      <main className="flex-1">
        {/* Hero */}
        <motion.section
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary mb-6">
                The Assunta Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                The Woman Behind the Sauce
              </h1>
              <motion.div
                className="w-24 h-0.5 bg-primary mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Story content */}
        <section className="pb-20 md:pb-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

            {/* Bologna, 1971 */}
            <FadeInView className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Bologna, 1937
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  In a small kitchen in the heart of Bologna, Assunta Moretti stood over her stove, wooden spoon in hand, watching cream and butter come slowly together with fresh Parmigiano Reggiano. It was a Sunday morning ritual she had perfected over decades, one she learned from her mother, who learned it from hers. The kitchen windows were open, letting in the warm Italian sun and the sounds of the neighborhood waking up.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  Assunta believed that good food required two things above all else: quality ingredients and patience. She would rise before dawn to visit the market, selecting the freshest cream and the finest wheel of Parmigiano with the care of an artist choosing paint. Then she would return home and begin the slow, meditative process of building her Alfredo.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed">
                  Her neighbors would smell it through their windows. Children playing in the street would stop and ask when Sunday lunch would be ready. Assunta would smile and tell them the same thing she told everyone: "A proper Alfredo cannot be rushed. If you try, you lose the silk of it."
                </p>
              </div>
            </FadeInView>

            {/* Pull Quote 1 */}
            <FadeInView delay={0.05} className="my-16 py-12 border-y border-border">
              <motion.blockquote
                className="text-2xl md:text-3xl font-serif italic text-center text-foreground leading-relaxed"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                "A proper Alfredo cannot be rushed. If you try, you lose the silk of it."
              </motion.blockquote>
            </FadeInView>

            {/* The Standard */}
            <FadeInView className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                The Standard
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  What made Assunta's Alfredo different wasn't a secret ingredient or a family trick passed down through whispers. It was simpler than that, and somehow more profound: she refused to compromise. While others began using shortcuts (pre-grated cheese instead of a fresh wheel, cream cut with water, butter substitutes), Assunta held firm.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  Fresh heavy cream. Real butter, never margarine. Parmigiano Reggiano PDO, and nothing else would do. Every ingredient had to earn its place in the pot, and every jar that carries her name is held to that same standard today.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed">
                  Her family would gather around the table every Sunday, bowls of fresh fettuccine crowned with her Alfredo, and the room would fall quiet except for the sounds of eating. This was love made visible. This was home.
                </p>
              </div>
            </FadeInView>


            {/* A Legacy Bottled */}
            <FadeInView className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                A Legacy Bottled
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  In the late 1980s, Assunta's grandson Marco returned to Bologna after studying business in Milan. He had grown up on his grandmother's cooking, and like everyone who tasted her Alfredo, he believed it was special. He also saw an opportunity: to share it beyond the Sunday table.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  Assunta was skeptical at first. How could you bottle something made with love? Marco promised her one thing: they would never compromise. Every batch would be made exactly as she made it, with the same ingredients, the same care, the same standard.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed">
                  It took years to get it right. When they finally launched, Assunta tasted every jar from the first production run. She closed her eyes, took a spoonful, and nodded. "Yes," she said quietly. "This is it."
                </p>
              </div>
            </FadeInView>

            {/* Today */}
            <FadeInView className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Today
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  Assunta's sauce lives on. Today, you can find Assunta's Creamy Alfredo at select Costco locations: a super-premium alfredo sauce made with fresh cream, aged Parmigiano Reggiano and real butter. The standard hasn't changed. The finest quality ingredients remain non-negotiable.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                  Every jar carries her name and her legacy. It's a reminder that good food doesn't have to be complicated, but it does have to be made with care.
                </p>
                <p className="text-base md:text-lg font-sans text-foreground leading-relaxed">
                  When you open a jar of Assunta's Creamy Alfredo and smell that rich, velvety aroma, you're connecting to a tradition that spans generations: a woman who believed that cooking with love was the only way worth cooking at all.
                </p>
              </div>
            </FadeInView>

            {/* CTA */}
            <FadeInView y={20} className="mt-16">
              <div className="p-8 md:p-12 bg-primary/5 border border-primary/20 rounded-sm text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Try the Original
                </h3>
                <p className="text-base font-sans text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience Assunta's Creamy Alfredo for yourself. Start with the recipes it was made for.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-bold"
                  data-testid="button-try-original-recipe"
                >
                  <Link href="/recipes">Explore Recipes</Link>
                </Button>
              </div>
            </FadeInView>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
