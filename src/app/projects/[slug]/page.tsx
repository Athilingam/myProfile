import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Lightbulb,
  Layers,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  Image as ImageIcon,
} from 'lucide-react';
import { projects, getProject } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { ProjectCover } from '@/components/sections/project-cover';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project)
    return buildMetadata({ title: 'Project not found', path: `/projects/${slug}` });
  return buildMetadata({
    title: project.title,
    description: project.overview,
    path: `/projects/${slug}`,
    keywords: project.techStack,
  });
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Projects', path: '/projects' },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.tagline}
        crumbs={[{ name: 'Projects', href: '/projects' }]}
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 pb-24">
        <Reveal className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-card dark:border-slate-800/80">
          <ProjectCover
            cover={project.cover}
            accent={project.accent}
            className="aspect-[21/9] rounded-none"
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge variant="brand">{project.company}</Badge>
          <Badge variant="muted">{project.year}</Badge>
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {project.impact.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-subtle dark:border-slate-800/80 dark:bg-slate-900/50"
            >
              <p className="flex items-center justify-center gap-1.5 text-3xl font-bold text-slate-900 dark:text-white">
                <TrendingUp className="h-5 w-5 text-success" />
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            <Block icon={<Target className="h-5 w-5" />} title="Overview">
              <p>{project.overview}</p>
            </Block>
            <Block icon={<AlertTriangle className="h-5 w-5" />} title="Problem Statement">
              <p>{project.problem}</p>
            </Block>
            <Block icon={<Lightbulb className="h-5 w-5" />} title="Solution">
              <p>{project.solution}</p>
            </Block>

            <Block icon={<AlertTriangle className="h-5 w-5" />} title="Challenges">
              <div className="space-y-4">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-800/30"
                  >
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {challenge.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {challenge.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={<Sparkles className="h-5 w-5" />} title="Lessons Learned">
              <ul className="space-y-2.5">
                {project.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden
                    />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Layers className="h-4 w-4 text-brand" />
                Architecture
              </h3>
              <ul className="mt-4 space-y-2.5">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/60"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tech Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="brand">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card dark:border-slate-800/80 dark:bg-slate-900/50">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Features
              </h3>
              <ul className="mt-4 grid gap-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <ImageIcon className="h-4 w-4 text-brand" />
            Screens
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.screens.map((screen) => (
              <div
                key={screen.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-subtle dark:border-slate-800/80 dark:bg-slate-900/50"
              >
                <div
                  className="flex aspect-[9/16] items-center justify-center rounded-xl text-xs font-medium text-slate-400"
                  style={{
                    background: `linear-gradient(160deg, ${project.accent}14, transparent)`,
                  }}
                >
                  Screenshot placeholder
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  {screen.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
          <Button href="/projects" variant="ghost">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Button>
          {next ? (
            <Button href={`/projects/${next.slug}`} variant="secondary">
              Next: {next.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand-600 dark:text-brand-300">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </Reveal>
  );
}
