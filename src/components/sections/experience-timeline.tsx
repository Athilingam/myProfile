import type { ReactNode } from 'react';
import { Briefcase, TrendingUp, Wrench, Award } from 'lucide-react';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/shared/reveal';

export function ExperienceTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="relative mt-14">
      <div
        className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand/40 via-slate-200 to-transparent dark:via-slate-800 md:left-1/2"
        aria-hidden
      />
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Reveal key={exp.slug} delay={index * 0.05}>
            <article className="relative md:grid md:grid-cols-2 md:gap-12">
              <span
                className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-brand ring-4 ring-white dark:ring-ink-950 md:left-1/2"
                aria-hidden
              />
              <div
                className={
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                }
              >
                <div className="ml-10 md:ml-0">
                  <div
                    className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                  >
                    <Badge variant={exp.current ? 'success' : 'muted'}>
                      {exp.period}
                    </Badge>
                    {exp.current ? <Badge variant="brand">Current</Badge> : null}
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-300 md:justify-start">
                    <Briefcase className="h-4 w-4 shrink-0" />
                    {exp.company}
                  </p>
                  <p className="text-xs text-slate-400">
                    {exp.domain} · {exp.location}
                  </p>
                </div>
              </div>

              <div
                className={
                  index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
                }
              >
                <div className="ml-10 mt-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50 md:ml-0 md:mt-0">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {exp.summary}
                  </p>

                  {detailed ? (
                    <div className="mt-5 space-y-5 text-left">
                      <TimelineBlock
                        icon={<Wrench className="h-4 w-4" />}
                        title="Responsibilities"
                        items={exp.responsibilities}
                      />
                      <TimelineBlock
                        icon={<Award className="h-4 w-4" />}
                        title="Achievements"
                        items={exp.achievements}
                      />
                    </div>
                  ) : null}

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
                    {exp.impact.map((metric) => (
                      <div key={metric.label} className="text-left">
                        <p className="flex items-center gap-1 text-lg font-bold text-slate-900 dark:text-white">
                          <TrendingUp className="h-3.5 w-3.5 text-success" />
                          {metric.value}
                        </p>
                        <p className="text-[11px] leading-tight text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function TimelineBlock({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <span className="text-brand">{icon}</span>
        {title}
      </h4>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
