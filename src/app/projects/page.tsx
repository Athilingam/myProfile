import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { ProjectsGrid } from '@/components/sections/projects-grid';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'Enterprise mobile projects by Athilingam Subramanian — insurance CRM, AgriTech, farm-to-fork traceability, college ERP, dairy commerce and a future AI mobile assistant.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Projects', path: '/projects' }])} />
      <PageHeader
        eyebrow="Projects"
        title="Case studies from the field to the enterprise."
        description="Filter by domain to explore the platforms I've architected — each with problem, solution, architecture, tech stack and business impact."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8">
        <ProjectsGrid />
      </section>
      <CtaBand />
    </>
  );
}
