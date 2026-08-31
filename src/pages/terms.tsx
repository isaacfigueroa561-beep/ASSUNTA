import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.',
    ],
  },
  {
    title: 'Use of This Website',
    body: [
      'This site and its content — including recipes, images, and text — are made available for your personal, non-commercial use. You may not reproduce, distribute, or republish content from this site without our prior written permission.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'The Assunta name, logo, and all associated branding are the property of Assunta and may not be used without permission. All recipes, photography, and written content on this site are protected by copyright.',
    ],
  },
  {
    title: 'Recipes & Content Disclaimer',
    body: [
      'Recipes and cooking instructions on this site are provided for informational and inspirational purposes only. They are not professional dietary, nutritional, or medical advice.',
      'If you have food allergies or dietary restrictions, always check ingredient labels and confirm allergen information directly with the product packaging before consuming — allergen and ingredient details on this site may not reflect the most current formulation.',
    ],
  },
  {
    title: 'Product Availability',
    body: [
      'Assunta\'s Creamy Alfredo is sold through Costco. Availability, pricing, and locations are determined by Costco and may change without notice — this website does not process orders or sell products directly.',
    ],
  },
  {
    title: 'No Warranties',
    body: [
      'This website and its content are provided "as is" without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Assunta is not liable for any damages arising from your use of this website or reliance on its content.',
    ],
  },
  {
    title: 'Third-Party Links',
    body: [
      'This site may link to third-party websites (such as Costco). We are not responsible for the content or practices of any third-party site.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the United States and the state in which Assunta operates, without regard to conflict-of-law principles.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms of Use from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated Terms.',
    ],
  },
];

export default function Terms() {
  useDocumentMeta(
    'Terms of Use',
    'The terms and conditions governing your use of the Assunta website.'
  );
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Terms of Use' }]} />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Terms of Use
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4" />
            <p className="text-sm font-sans text-muted-foreground">
              Last updated: August 2026
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="font-sans text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Questions about these Terms? Reach out through our{' '}
                <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Contact page
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
