'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/data/skills';
import { Reveal } from '@/components/shared/reveal';

export function SkillsGrid({ compact = false }: { compact?: boolean }) {
  const groups = compact ? skillGroups.slice(0, 4) : skillGroups;

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group, index) => {
        const Icon = group.icon;
        return (
          <Reveal
            key={group.name}
            delay={index * 0.04}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-elevated dark:border-slate-800/80 dark:bg-slate-900/50"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${group.accent}, ${group.accent}bb)`,
              }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
              {group.name}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: group.accent }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}
