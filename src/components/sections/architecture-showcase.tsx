import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { architecturePatterns, flowDiagrams } from '@/data/architecture';
import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';

export function ArchitectureShowcase({ compact = false }: { compact?: boolean }) {
  const patterns = compact ? architecturePatterns.slice(0, 3) : architecturePatterns;

  return (
    <div className="mt-12 space-y-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern, index) => (
          <Reveal
            key={pattern.slug}
            delay={index * 0.04}
            className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-600 dark:text-brand-300">
                <Layers className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {pattern.title}
                </h3>
                <p className="text-xs text-slate-400">{pattern.subtitle}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {pattern.description}
            </p>

            <div className="mt-5 space-y-2">
              {pattern.layers.map((layer) => (
                <div
                  key={layer.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-800/40"
                >
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-300">
                    {layer.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {layer.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {pattern.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  {benefit}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {!compact ? (
        <div className="grid gap-6 lg:grid-cols-3">
          {flowDiagrams.map((flow, index) => (
            <Reveal
              key={flow.title}
              delay={index * 0.05}
              className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-card dark:border-slate-800/80 dark:from-slate-900/60 dark:to-slate-900/20"
            >
              <Badge variant="brand" className="mb-4">
                {flow.title}
              </Badge>
              <ol className="space-y-2.5">
                {flow.steps.map((step, stepIndex) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand-600 dark:text-brand-300">
                      {stepIndex + 1}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {step}
                    </span>
                    {stepIndex < flow.steps.length - 1 ? (
                      <ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-300 dark:text-slate-600" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
