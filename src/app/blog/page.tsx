import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { PageHeader } from '@/components/shared/page-header';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/shared/reveal';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Writing by Athilingam Subramanian on React Native, mobile architecture, AI, mobile performance and offline-first systems.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Blog', path: '/blog' }])} />
      <PageHeader
        eyebrow="Blog"
        title="Notes on mobile, architecture and AI."
        description="Practical writing from the trenches of enterprise mobile — patterns, performance and the AI shift."
      />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated dark:border-slate-800/80 dark:bg-slate-900/50"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="brand">{post.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-0.5 dark:text-brand-300" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
