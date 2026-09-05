import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'wouter';
import { Clock, Users, Heart, Timer } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { recipes, categoryLabels } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { AnimatedThumbnail } from '@/components/AnimatedThumbnail';
import { useDocumentMeta } from '@/hooks/use-document-meta';

// Reusable scroll-reveal wrapper
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
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useDocumentMeta(
    'Creamy Alfredo Sauce',
    'Assunta\'s Creamy Alfredo: a super-premium sauce made with fresh cream, aged Parmigiano Reggiano, and real butter. Available at select Costco locations.'
  );
  const featuredRecipes = recipes.filter((recipe) => recipe.featured);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative h-[88vh] md:h-[92vh] flex items-center justify-center overflow-hidden"
        >
          {/* Parallax background — AI-generated video */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-110"
              poster="/hero-poster.jpg"
            >
              <source src="/assunta-hero.mp4" type="video/mp4" />
              {/* Fallback to poster image if video unsupported */}
            </video>
            <div className="absolute inset-0 bg-primary/62" />
          </motion.div>

          {/* Logo — the centered focal point of the hero */}
          <motion.div
            className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ opacity: heroOpacity }}
          >
            <motion.img
              src="/logo-wordmark.webp"
              alt="Assunta's"
              width={320}
              height={88}
              className="h-40 sm:h-52 md:h-64 w-auto object-contain mx-auto brightness-0 invert"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Buttons + scroll indicator — a smaller subtitle group anchored near the bottom */}
          <motion.div
            className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6 w-full px-4"
            style={{ opacity: heroOpacity }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
            }}
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-bold text-base"
                data-testid="button-explore-recipes"
              >
                <Link href="/recipes">Explore Recipes</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 font-sans font-bold text-base backdrop-blur-sm"
                data-testid="button-our-story"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
            >
              <span className="text-xs font-sans uppercase tracking-widest text-primary-foreground/60">Scroll</span>
              <motion.div
                className="w-px h-12 bg-primary-foreground/40 origin-top"
                animate={{ scaleY: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Product Spotlight ── */}
        {/* Client feedback: the product wasn't legible above the fold. This
            band sits immediately below the hero so the name and dish are
            unmissable, without touching the hero pour shot itself. The photo
            fades into the page background at the bottom instead of cutting
            off with a hard edge. */}
        <section className="relative min-h-[68vh] md:min-h-[82vh] flex items-center overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="/shrimp-alfredo-hero.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Light, even tint — just enough for text contrast without
                muddying the photo. A separate scrim (below) does the work
                of grounding the text instead of dimming the whole image. */}
            <div className="absolute inset-0 bg-primary/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-background" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <FadeInView className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-accent-light mb-3">
                Super-Premium Alfredo
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
                Assunta's Creamy Alfredo
              </h2>
              <p className="text-primary-foreground/90 font-sans mb-6 max-w-xl mx-auto">
                Fresh cream, aged Parmigiano Reggiano, and real butter.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-bold"
                data-testid="button-home-see-product"
              >
                <Link href="/product">See the Product</Link>
              </Button>
            </FadeInView>
          </div>
        </section>

        {/* ── Featured Recipes ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                A Taste of Heritage
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
            </FadeInView>

            {/* Center the grid and cap it at 2 columns when there are fewer
                than 3 featured recipes (e.g. the hero recipe slot is still
                pending), so cards don't leave a dangling empty column. */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto ${
                featuredRecipes.length < 3 ? 'max-w-3xl' : 'md:grid-cols-3 max-w-none'
              }`}
            >
              {featuredRecipes.map((recipe, index) => (
                <FadeInView key={recipe.id} delay={index * 0.12} className="h-full">
                  <motion.article
                    className="group bg-card border border-card-border rounded-sm overflow-hidden shadow-md h-full flex flex-col"
                    whileHover={{ y: -6, boxShadow: '0 20px 40px hsl(20 15% 15% / 0.12)' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    data-testid={`card-recipe-${recipe.slug}`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <AnimatedThumbnail images={recipe.images} alt={recipe.title} />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block text-xs font-sans font-bold uppercase tracking-wide text-primary mb-2">
                        {categoryLabels[recipe.category]}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {recipe.title}
                      </h3>
                      <p className="text-sm font-sans text-muted-foreground mb-4 line-clamp-2">
                        {recipe.description}
                      </p>
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
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Assunta Difference ── */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                The Assunta's Difference
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto" />
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Heart, title: 'Inspired by Assunta', body: 'Assunta Cantisano believed a great sauce was worth doing properly. Our alfredo is made in that spirit: simple ingredients, treated with respect.' },
                { icon: Users, title: 'In the Classic Tradition', body: 'Inspired by generations of home cooking, where a sauce is judged by what you leave out as much as what you put in.' },
                { icon: Timer, title: 'Made for the Table', body: 'Rich, balanced, and ready in the time it takes to boil pasta. Built for a real weeknight, good enough for a Sunday.' },
              ].map(({ icon: Icon, title, body }, i) => (
                <FadeInView key={title} delay={i * 0.14}>
                  <motion.div
                    className="text-center"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5"
                      whileHover={{ backgroundColor: 'hsl(0 65% 35% / 0.2)', scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={30} className="text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{title}</h3>
                    <p className="text-sm font-sans text-muted-foreground leading-relaxed">{body}</p>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pull Quote ── */}
        <section className="py-24 md:py-36 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInView y={20} className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-0.5 bg-accent mx-auto mb-10 origin-center"
              />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed">
                "A pasta sauce should taste
                <br />
                like someone cared."
              </blockquote>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-16 h-0.5 bg-accent mx-auto mt-10 origin-center"
              />
            </FadeInView>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
