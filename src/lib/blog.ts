import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readingTime } from '@/lib/utils';
import type { BlogMeta, BlogPost } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function readPostFile(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    tags: data.tags ?? [],
    category: data.category ?? 'Engineering',
    readingTime: readingTime(content),
    content,
  };
}

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => readPostFile(file.replace(/\.mdx$/, '')))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _content, ...meta }) => meta);
}

export function getPost(slug: string): BlogPost | null {
  return readPostFile(slug);
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}
