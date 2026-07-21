import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, Clock } from 'lucide-react';
import { getPost, getPostSlugs } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/constants/site';
import { PageHeader } from '@/components/shared/page-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mdxComponents } from '@/components/shared/mdx-components';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: 'Post not found', path: `/blog/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    keywords: post.tags.join(', '),
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        crumbs={[{ name: 'Blog', href: '/blog' }]}
      />

      <article className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-8 dark:border-slate-800">
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
          <span className="text-sm text-slate-400">·</span>
          <span className="text-sm text-slate-400">{formatDate(post.date)}</span>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="prose-portfolio mt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-800">
          <Button href="/blog" variant="ghost">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Button>
        </div>
      </article>
    </>
  );
}
