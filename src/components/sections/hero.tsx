'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GridBackdrop } from '@/components/shared/grid-backdrop';
import { RotatingTitle } from '@/components/sections/rotating-title';

const marquee = [
  'React Native',
  'Flutter',
  'iOS · Android',
  'Clean Architecture',
  'AI-Assisted Dev',
  'Node.js',
  'Offline-First',
  'TypeScript',
  'On-Device AI',
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <GridBackdrop />
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="brand" className="mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Transitioning into AI Mobile Solutions Architecture
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Athilingam
            <br />
            <span className="text-gradient-accent">Subramanian</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-8"
          >
            <RotatingTitle titles={siteConfig.titles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {siteConfig.tagline}. 11+ years architecting enterprise mobile products — 50+
            apps, 30+ clients, 15+ countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={siteConfig.resume} size="lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
          >
            <MapPin className="h-4 w-4" />
            {siteConfig.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-transparent to-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 p-2 shadow-elevated backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
              <Image
                src="/profile.jpg"
                alt="Athilingam Subramanian, AI Mobile Solutions Architect"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 384px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-2xl font-bold text-slate-900 dark:text-white">11+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Years experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass absolute -right-4 top-6 rounded-2xl px-4 py-3 shadow-card"
          >
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-300">50+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Apps shipped</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden border-t border-slate-100 bg-white/40 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mask-fade-x flex">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...marquee, ...marquee].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="text-sm font-medium text-slate-400 dark:text-slate-500"
              >
                {item}
                <span className="ml-8 text-brand/30">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
