import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { SkillsGrid } from '@/components/sections/skills-grid';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Skills',
  description:
    'Technical skills of Athilingam Subramanian across architecture, mobile, backend, cloud, AI, databases, languages and leadership.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Skills', path: '/skills' }])} />
      <PageHeader
        eyebrow="Skills"
        title="A full-stack mobile architect's toolkit."
        description="Eight disciplines, refined over 11+ years of shipping enterprise products — from clean architecture to on-device AI."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8">
        <SkillsGrid />
      </section>
      <CtaBand />
    </>
  );
}
