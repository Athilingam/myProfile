import { GraduationCap, CircleDashed, CheckCircle2, Clock } from 'lucide-react';
import { certifications } from '@/data/achievements';
import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';

const statusMeta = {
  completed: { label: 'Completed', icon: CheckCircle2, variant: 'success' as const },
  'in-progress': { label: 'In Progress', icon: Clock, variant: 'brand' as const },
  planned: { label: 'Planned', icon: CircleDashed, variant: 'muted' as const },
};

export function CertificationsTimeline() {
  return (
    <div className="mt-10 space-y-4">
      {certifications.map((cert, index) => {
        const meta = statusMeta[cert.status];
        const Icon = meta.icon;
        return (
          <Reveal
            key={cert.title}
            delay={index * 0.05}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-subtle dark:border-slate-800/80 dark:bg-slate-900/50 sm:flex-row sm:items-center"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-600 dark:text-brand-300">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <Badge variant={meta.variant}>
                  <Icon className="h-3 w-3" />
                  {meta.label}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                {cert.issuer} · {cert.year}
              </p>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {cert.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
