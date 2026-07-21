import { Compass, Layers, Rocket, Users2 } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { SectionHeading } from '@/components/shared/section-heading';

const pillars = [
  {
    icon: Layers,
    title: 'Enterprise Architecture',
    detail:
      'Clean architecture, MVVM and offline-first systems that scale across teams and markets.',
  },
  {
    icon: Compass,
    title: 'Cross-Platform Craft',
    detail: 'React Native, Android, iOS and Flutter — one architecture, every platform.',
  },
  {
    icon: Users2,
    title: 'Technical Leadership',
    detail:
      'Requirement analysis, stakeholder collaboration, hiring and mentoring engineers.',
  },
  {
    icon: Rocket,
    title: 'AI-Powered Delivery',
    detail:
      'AI-assisted development and on-device AI driving the next leap in mobile products.',
  },
];

export function AboutSummary() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="From mobile engineer to AI mobile architect."
            description="Over 11+ years I have grown from writing my first Android screens into architecting enterprise platforms for global clients — and I am now channeling that foundation into AI-native mobile solutions."
          />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              At SourceTrace I spent a decade driving AgriTech digital transformation —
              shipping 50+ offline-first apps for 30+ clients across 15+ countries, and
              rising from Developer to Senior Engineer to Development Team Lead.
            </p>
            <p>
              At SKITECH I led two flagship products, and at Infinijith I architected an
              enterprise Insurance Agent Management platform end to end. The through-line:
              turning complex business requirements into high-performance, cloud-connected
              products.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.05}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand-600 dark:text-brand-300">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {pillar.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
