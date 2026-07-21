import { Sparkles, Cpu, MessageSquareCode, Rocket } from 'lucide-react';
import { aiCapabilities, aiTools, aiVision } from '@/data/ai';
import { Reveal } from '@/components/shared/reveal';
import { Badge } from '@/components/ui/badge';

const capabilityIcons = [Sparkles, MessageSquareCode, Cpu, Rocket];

export function AIShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className="mt-12 space-y-12">
      <div className="grid gap-6 md:grid-cols-2">
        {aiCapabilities.map((capability, index) => {
          const Icon = capabilityIcons[index % capabilityIcons.length] ?? Sparkles;
          return (
            <Reveal
              key={capability.title}
              delay={index * 0.05}
              className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {capability.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {capability.tools.map((tool) => (
                  <Badge key={tool} variant="accent">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>

      {!compact ? (
        <>
          <Reveal className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-card dark:border-slate-800/80 dark:from-slate-900/60 dark:to-slate-900/20">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              AI Toolchain
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              The daily stack that compresses boilerplate and elevates code quality.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-600 dark:text-brand-300">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {tool.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {tool.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {aiVision.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-3xl border border-brand/15 bg-brand/[0.03] p-6 dark:border-brand/20 dark:bg-brand/[0.06]"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                  Vision {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
