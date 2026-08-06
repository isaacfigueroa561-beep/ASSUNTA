import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const faqs = [
  {
    question: 'Where can I purchase Assunta’s Creamy Alfredo?',
    answer: 'Assunta’s Creamy Alfredo is available exclusively at Costco, sold as a 2pk of 22oz jars.',
  },
  {
    question: 'What is in the sauce?',
    answer: 'A super-premium alfredo made with fresh cream, aged Parmigiano Reggiano PDO, and real butter. Full ingredient details coming soon.',
  },
  {
    question: 'How should I store it after opening?',
    answer: 'Refrigerate after opening. Storage and shelf-life details coming soon.',
  },
  {
    question: 'Does it contain allergens?',
    answer: 'The sauce contains milk (cream, butter, and Parmigiano Reggiano cheese). Full allergen details coming soon.',
  },
];

export default function Faq() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-base md:text-lg font-sans text-muted-foreground">
              Everything you need to know about Assunta's Creamy Alfredo.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="border-b border-border pb-8"
                data-testid={`faq-item-${i}`}
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 p-10 border border-primary/30 bg-card rounded-sm text-center"
          >
            <img
              src="/logo-medallion.webp"
              alt="Assunta — Since 1937"
              width={64}
              height={64}
              className="h-16 w-auto mx-auto mb-4 opacity-90"
            />
            <h4 className="text-2xl font-serif font-bold text-foreground mb-2">
              Still have questions?
            </h4>
            <p className="font-sans text-muted-foreground">
              We'd love to hear from you — reach out through the{' '}
              <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                Contact page
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
