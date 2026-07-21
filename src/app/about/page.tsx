import type { Metadata } from 'next';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { AboutSummary } from '@/components/sections/about-summary';
import { AchievementsStrip } from '@/components/sections/achievements-strip';
import { CertificationsTimeline } from '@/components/sections/certifications-timeline';
import { SectionHeading } from '@/components/shared/section-heading';
import { CtaBand } from '@/components/sections/cta-band';
import { Reveal } from '@/components/shared/reveal';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'The story of Athilingam Subramanian — 11+ years from mobile engineer to AI mobile architect, spanning AgriTech, insurance, ERP and commerce across 15+ countries.',
  path: '/about',
});

const journey = [
  {
    year: '2015',
    title: 'The foundation',
    detail: 'Joined SourceTrace as a mobile developer, learning to build for the field.',
  },
  {
    year: '2018',
    title: 'Senior Software Engineer',
    detail:
      'Owned complex modules and began mentoring — offline-first became second nature.',
  },
  {
    year: '2020',
    title: 'Development Team Lead',
    detail: 'Led architecture and delivery for 30+ global AgriTech clients.',
  },
  {
    year: '2025',
    title: 'Technical Team Lead at SKITECH',
    detail: 'Led two flagship products — College ERP and dairy E-Commerce.',
  },
  {
    year: '2026',
    title: 'AI Mobile Solutions Architect',
    detail:
      'Architecting enterprise insurance mobility and going all-in on AI-native mobile.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'About', path: '/about' }])} />
      <PageHeader
        eyebrow="About"
        title="Engineer. Architect. Now building AI-native mobile."
        description="Eleven-plus years turning complex business requirements into high-performance, cloud-connected mobile products — for clients on four continents."
      />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand/15 to-accent/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/60 p-2 shadow-elevated dark:border-white/10 dark:bg-white/[0.04]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/profile.jpg"
                  alt="Athilingam Subramanian"
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="h-8 w-8 text-brand/30" />
            <p className="mt-4 text-2xl font-medium leading-snug tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              &ldquo;Great mobile architecture is invisible. Users just feel that the app
              is fast, reliable and always ready — even offline, even at global
              scale.&rdquo;
            </p>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              I have spent my career making that invisibility real: clean architecture,
              offline-first systems, and now AI woven into both how I build and what I
              ship.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSummary />
      <AchievementsStrip />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
        <SectionHeading
          eyebrow="The Journey"
          title="From first screen to system architect."
        />
        <div className="mt-12 space-y-3">
          {journey.map((step, index) => (
            <Reveal
              key={step.year}
              delay={index * 0.05}
              className="flex gap-6 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-subtle dark:border-slate-800/70 dark:bg-slate-900/50"
            >
              <span className="w-16 shrink-0 text-lg font-bold text-brand-600 dark:text-brand-300">
                {step.year}
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-16">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Foundations and what's next."
        />
        <CertificationsTimeline />
      </section>

      <CtaBand />
    </>
  );
}
