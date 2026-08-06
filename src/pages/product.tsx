import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ingredients = [
  {
    title: 'Parmigiano Reggiano PDO',
    copy: 'Certified, aged, authentic — the king of Italian cheeses gives the sauce its rich, nutty foundation.',
  },
  {
    title: 'Fresh Cream',
    copy: 'Slowly simmered fresh cream creates a velvety texture that clings to every strand of pasta.',
  },
  {
    title: 'Real Butter',
    copy: 'Real butter binds the cream and cheese into a seamless, golden sauce. No artificial oils or thickeners.',
  },
];

export default function Product() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="w-full h-full object-cover scale-110"
              poster="/hero-poster.jpg"
            >
              <source src="/assunta-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto py-24 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.35em] text-accent-light mb-5"
              >
                Super-Premium · Costco Exclusive
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white uppercase tracking-[0.12em] leading-[1.1] mb-6"
                data-testid="text-product-title"
              >
                Creamy Alfredo
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl font-sans text-white/85 max-w-xl mx-auto mb-10 leading-relaxed"
              >
                A super-premium alfredo sauce made with fresh cream, aged Parmigiano Reggiano and real butter.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-bold"
                  data-testid="button-product-recipes"
                >
                  <Link href="/recipes">Explore Recipes</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border border-white/60 bg-transparent text-white shadow-none hover:bg-white hover:text-primary hover:border-white font-sans font-bold"
                  data-testid="button-product-story"
                >
                  <Link href="/about">Our Story</Link>
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xs font-sans uppercase tracking-[0.25em] text-white/60 mt-8"
              >
                2pk – 22oz · Available exclusively at Costco
              </motion.p>
            </div>
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

        {/* Jar showcase band */}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-8"
            >
              <img
                src="/logo-medallion.webp"
                alt="Assunta — Since 1937"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
              <p className="text-xl md:text-2xl font-serif text-primary-foreground leading-relaxed">
                Each jar begins with the finest quality ingredients, like Parmigiano Reggiano PDO cheese, fresh cream, and real butter, slowly coming together to create a rich, layered taste meant to be savored in every bite.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div className="text-primary-foreground">
                  <p className="text-3xl font-serif font-bold">2pk – 22oz</p>
                  <p className="text-sm font-sans text-primary-foreground/70 uppercase tracking-[0.2em] mt-1">
                    Exclusively at Costco
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                data-testid="img-jar-story"
              />
              {/* Pedestal shadow to seat the jar on a surface rather than float */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full bg-black/35 blur-md"
                aria-hidden="true"
              />
            </motion.div>
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
