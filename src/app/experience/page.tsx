import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description:
    'Professional experience of Athilingam Subramanian across Infinijith, SKITECH and SourceTrace — roles, responsibilities, achievements, technologies and business impact.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Experience', path: '/experience' }])} />
      <PageHeader
        eyebrow="Experience"
        title="11+ years, three companies, one architecture mindset."
        description="From a decade of AgriTech transformation to enterprise insurance mobility — every role deepened the craft of building mobile at scale."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <ExperienceTimeline detailed />
      </section>
      <CtaBand />
    </>
  );
}
