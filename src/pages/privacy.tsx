import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';

const sections = [
  {
    title: 'Introduction',
    body: [
      "This Privacy Policy explains how Assunta (\"we,\" \"us,\" or \"our\") handles information when you visit this website. By using this site, you agree to the practices described here.",
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      'This website does not have any forms, accounts, or checkout — we do not collect your name, email address, or any other personal information through this site.',
      'We do not use analytics or advertising tracking cookies on this site. We do use Marker.io, a third-party feedback tool, which may collect basic technical diagnostic information (such as browser type and screen size) — this is used only by our team to review and improve the site, not for advertising or tracking visitors.',
    ],
  },
  {
    title: 'Third-Party Purchases',
    body: [
      'Assunta\'s Creamy Alfredo is sold through Costco. Any purchase you make happens on Costco\'s own website or in their stores, governed by Costco\'s privacy practices, not ours.',
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      'This website is not directed at children under 13, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
    ],
  },
];

export default function Privacy() {
  useDocumentMeta(
    'Privacy Policy',
    'How Assunta\'s collects, uses, and protects your information when you visit this site or use our Contact form.'
  );
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <PageBreadcrumb items={[{ label: 'Privacy Policy' }]} />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Privacy Policy
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
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or want to exercise your rights over your
                information, please reach out through our{' '}
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
