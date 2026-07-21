import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { ArchitectureShowcase } from '@/components/sections/architecture-showcase';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Architecture',
  description:
    'Mobile architecture by Athilingam Subramanian — Clean Architecture, MVVM, Repository Pattern, offline-first sync, Redux Toolkit & RTK Query, authentication, push and CI/CD release pipelines.',
  path: '/architecture',
  keywords: [
    'Clean Architecture',
    'MVVM',
    'Repository Pattern',
    'Offline First',
    'CI/CD',
  ],
});

export default function ArchitecturePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: 'Architecture', path: '/architecture' }])}
      />
      <PageHeader
        eyebrow="Architecture"
        title="The systems thinking behind every product."
        description="This is the craft I care about most — the patterns, data flows and pipelines that make enterprise mobile fast, testable and resilient."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8">
        <ArchitectureShowcase />
      </section>
      <CtaBand />
    </>
  );
}
