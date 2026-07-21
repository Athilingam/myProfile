'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function RotatingTitle({ titles }: { titles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [titles.length]);

  const current = titles[index] ?? titles[0] ?? '';

  return (
    <div className="flex items-center gap-2.5 text-lg font-semibold sm:text-xl">
      <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" />
      <span className="relative inline-flex h-7 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-accent"
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
