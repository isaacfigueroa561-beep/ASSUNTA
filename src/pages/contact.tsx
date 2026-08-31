import { motion } from 'framer-motion';
import { MapPin, Mail, Store } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

export default function Contact() {
  useDocumentMeta(
    'Contact',
    'Get in touch with Assunta\'s — questions, wholesale, press, or feedback about Creamy Alfredo.'
  );

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Contact' }]} />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Page Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Contact
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-base md:text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Where to Buy */}
            <motion.div
              className="bg-card p-6 rounded-sm border border-card-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Store size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    Where to Buy
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground">
                    Find Assunta's at select Costco locations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm font-sans text-foreground">
                  Available at select Costco locations. Check your local store for availability.
                </p>
              </div>
            </motion.div>

            {/* Brand Info */}
            <motion.div
              className="bg-card p-6 rounded-sm border border-card-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    Our Promise
                  </h3>
                </div>
              </div>
              <p className="text-sm font-sans text-foreground leading-relaxed">
                Every jar of Assunta's is made with simple ingredients, treated with respect — inspired by Assunta Cantisano's belief that a great sauce is worth doing properly.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="bg-primary/5 p-6 rounded-sm border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <blockquote className="text-base font-serif italic text-foreground leading-relaxed">
                "If you cook with love, people will taste it."
              </blockquote>
              <cite className="text-sm font-sans text-muted-foreground not-italic block mt-2">
                Assunta Cantisano
              </cite>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
