import { achievements } from '@/data/achievements';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { StaggerGroup, StaggerItem } from '@/components/shared/reveal';

export function AchievementsStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/30">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {achievements.map((item) => (
            <StaggerItem key={item.label} className="text-center lg:text-left">
              <p className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-brand-600 dark:text-brand-300">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
