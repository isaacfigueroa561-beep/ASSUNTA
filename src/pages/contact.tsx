import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Store, Heart, Check, Copy } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const CONTACT_EMAIL = 'assuntas@mizkan.com';

// Compose links for the major webmail platforms, so a click works
// even when the visitor has no default desktop mail app configured.
const emailOptions = [
  {
    label: 'Gmail',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`,
  },
  {
    label: 'Outlook',
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${CONTACT_EMAIL}`,
  },
  {
    label: 'Default Mail App',
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

function EmailLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — ignore, the address is still visible to select/copy manually.
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="text-sm font-sans font-semibold text-primary hover:underline break-all text-left"
          data-testid="link-email-contact"
        >
          {CONTACT_EMAIL}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {emailOptions.map(({ label, href }) => (
          <DropdownMenuItem key={label} asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem onClick={handleCopy}>
          {copied ? (
            <>
              <Check size={14} className="mr-2" /> Copied!
            </>
          ) : (
            <>
              <Copy size={14} className="mr-2" /> Copy Address
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Contact() {
  useDocumentMeta(
    'Contact',
    'Get in touch with Assunta\'s: questions, wholesale, press, or feedback about Creamy Alfredo.'
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

            {/* Email Us */}
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
                    Email Us
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground">
                    Questions, wholesale, or press inquiries
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <EmailLink />
              </div>
            </motion.div>

            {/* Brand Info */}
            <motion.div
              className="bg-card p-6 rounded-sm border border-card-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <Heart size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    Our Promise
                  </h3>
                </div>
              </div>
              <p className="text-sm font-sans text-foreground leading-relaxed">
                Every jar of Assunta's is made with simple ingredients, treated with respect, inspired by Assunta Cantisano's belief that a great sauce is worth doing properly.
              </p>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            className="bg-primary/5 p-6 md:p-8 rounded-sm border border-primary/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <blockquote className="text-lg font-serif italic text-foreground leading-relaxed">
              "If you cook with love, people will taste it."
            </blockquote>
            <cite className="text-sm font-sans text-muted-foreground not-italic block mt-2">
              Assunta Cantisano
            </cite>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
