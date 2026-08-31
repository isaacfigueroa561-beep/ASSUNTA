import { motion } from 'framer-motion';

interface Props {
  /** Centered under a heading, or a short left-aligned rule above one. */
  align?: 'center' | 'left';
  /** Line/mark color — 'accent' for use on the dark hero/pull-quote treatments. */
  tone?: 'primary' | 'accent';
  delay?: number;
  className?: string;
}

// Small heritage-style flourish: line – diamond – line. Replaces flat
// single-color rules across page headings for a more bespoke feel.
export function SectionDivider({ align = 'center', tone = 'primary', delay = 0, className = '' }: Props) {
  const lineColor = tone === 'accent' ? 'bg-accent/60' : 'bg-primary/50';
  const markColor = tone === 'accent' ? 'bg-accent' : 'bg-primary';
  const lineWidth = align === 'center' ? 'w-8 md:w-10' : 'w-6';

  return (
    <motion.div
      className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <span className={`h-px ${lineWidth} ${lineColor}`} />
      <span className={`w-1.5 h-1.5 rotate-45 ${markColor} flex-shrink-0`} />
      <span className={`h-px ${lineWidth} ${lineColor}`} />
    </motion.div>
  );
}
