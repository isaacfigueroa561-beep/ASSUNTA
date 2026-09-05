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
    'Assunta Cantisano built her name on pasta sauces made from good ingredients and honest recipes. Assunta\'s Creamy Alfredo is made in that spirit.'
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
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Assunta Cantisano
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

            {/* Story */}
            <FadeInView className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-8 sm:gap-10 items-start">
                <motion.img
                  src="/jar-cutout-new.webp"
                  alt="Assunta's Creamy Alfredo jar"
                  width={460}
                  height={967}
                  className="w-32 sm:w-full h-auto mx-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                    Assunta Cantisano started with a conviction that has outlasted her: that a pasta sauce should taste like someone cared.
                  </p>
                  <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4">
                    She built her name on sauces made from good ingredients and honest recipes, no shortcuts, no apologies. That standard is what we inherited.
                  </p>
                  <p className="text-base md:text-lg font-sans text-foreground leading-relaxed">
                    Assunta's Alfredo is our answer to it. Inspired by her, by generations of home cooking, and by the belief that the best pasta sauces in the world are still worth chasing.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Pull Quote */}
            <FadeInView delay={0.05} className="my-16 py-12 border-y border-border">
              <motion.blockquote
                className="text-2xl md:text-3xl font-serif italic text-center text-foreground leading-relaxed"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                "A pasta sauce should taste like someone cared."
              </motion.blockquote>
            </FadeInView>

            {/* CTA */}
            <FadeInView y={20} className="mt-16">
              <div className="p-8 md:p-12 bg-primary/5 border border-primary/20 rounded-sm text-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Taste It for Yourself
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
