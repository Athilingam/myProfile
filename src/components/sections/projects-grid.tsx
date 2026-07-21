'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { ProjectCover } from '@/components/sections/project-cover';
import { cn } from '@/lib/utils';

const categories = ['All', 'Enterprise', 'AgriTech', 'E-Commerce', 'ERP', 'AI'] as const;

const statusLabel: Record<Project['status'], string> = {
  flagship: 'Flagship',
  shipped: 'Shipped',
  concept: 'Concept',
};

export function ProjectsGrid({ featured }: { featured?: number }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const visible = useMemo(() => {
    const list =
      filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    return featured ? list.slice(0, featured) : list;
  }, [filter, featured]);

  return (
    <div className="mt-10">
      {!featured ? (
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                filter === category
                  ? 'border-brand bg-brand text-white shadow-glow'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated dark:border-slate-800/80 dark:bg-slate-900/50"
              >
                <ProjectCover cover={project.cover} accent={project.accent} />
                <div className="flex flex-1 flex-col p-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={project.status === 'concept' ? 'accent' : 'brand'}>
                      {statusLabel[project.status]}
                    </Badge>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                    <span className="text-xs font-medium text-slate-400">
                      {project.company}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-brand-300">
                      Case study
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
