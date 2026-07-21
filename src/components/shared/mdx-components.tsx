import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

/** Styled MDX renderers used across blog posts. */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 text-xl font-semibold tracking-tight text-slate-900 dark:text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-5 space-y-2 text-slate-600 dark:text-slate-300" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 text-slate-600 dark:text-slate-300"
      {...props}
    />
  ),
  li: (props) => <li className="ml-4 list-disc marker:text-brand/60" {...props} />,
  a: ({ href = '#', ...props }) => (
    <Link
      href={href}
      className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-300"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-brand/40 pl-5 italic text-slate-600 dark:text-slate-400"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-brand-700 dark:bg-slate-800 dark:text-brand-300"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-5 text-sm text-slate-100 dark:border-slate-800"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-slate-900 dark:text-white" {...props} />
  ),
  hr: () => <hr className="my-10 border-slate-200 dark:border-slate-800" />,
};
