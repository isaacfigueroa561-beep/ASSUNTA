import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Ken Burns motion variants ───────────────────────────────────────────────
// Each entry defines start/end scale + translate so every image feels different.
const VARIANTS = [
  // Slow zoom in from center
  { from: { scale: 1.0, x: '0%',  y: '0%'  }, to: { scale: 1.2,  x: '0%',  y: '0%'  } },
  // Pan right with light zoom
  { from: { scale: 1.12, x: '-4%', y: '0%' }, to: { scale: 1.22, x: '4%',  y: '0%'  } },
  // Drift down-right from top-left
  { from: { scale: 1.0,  x: '-3%', y: '-3%' }, to: { scale: 1.2,  x: '2%',  y: '2%'  } },
  // Pan upward with zoom
  { from: { scale: 1.12, x: '0%',  y: '4%'  }, to: { scale: 1.22, x: '0%',  y: '-4%' } },
  // Drift in from bottom-right
  { from: { scale: 1.0,  x: '3%',  y: '3%'  }, to: { scale: 1.2,  x: '-2%', y: '-2%' } },
] as const;

const INTERVAL_MS   = 5200;   // how long each image stays
const FADE_MS       = 1100;   // crossfade duration
const KEN_BURN_MS   = 7500;   // pan/zoom duration (longer than interval so motion never stops)

interface Props {
  images: string[];
  alt: string;
}

export function AnimatedThumbnail({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      INTERVAL_MS,
    );
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length, paused]);

  const variant = VARIANTS[index % VARIANTS.length];

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-muted"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.img
          // key change re-mounts the image → restarts ken-burns from scratch
          key={`${index}-${images[index]}`}
          src={images[index]}
          alt={index === 0 ? alt : ''}
          aria-hidden={index !== 0}
          className="absolute inset-0 w-full h-full object-cover"
          // ── fade in/out ──
          initial={{ opacity: 0, scale: variant.from.scale, x: variant.from.x, y: variant.from.y }}
          animate={{ opacity: 1,  scale: variant.to.scale,  x: variant.to.x,   y: variant.to.y   }}
          exit={{    opacity: 0 }}
          transition={{
            opacity: { duration: FADE_MS / 1000, ease: 'easeInOut' },
            scale:   { duration: KEN_BURN_MS / 1000, ease: 'linear' },
            x:       { duration: KEN_BURN_MS / 1000, ease: 'linear' },
            y:       { duration: KEN_BURN_MS / 1000, ease: 'linear' },
          }}
        />
      </AnimatePresence>

      {/* Progress bars — one per image, cinematic style */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex gap-0.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setIndex(i); }}
              className="relative flex-1 h-[3px] bg-white/25 overflow-hidden"
              aria-label={`Show image ${i + 1}`}
            >
              {i === index && (
                <motion.span
                  className="absolute inset-y-0 left-0 bg-white/80"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL_MS / 1000, ease: 'linear' }}
                  key={index}   // restart fill when index changes
                />
              )}
              {i < index && (
                <span className="absolute inset-0 bg-white/70" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
