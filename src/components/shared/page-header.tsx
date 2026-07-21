import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { GridBackdrop } from '@/components/shared/grid-backdrop';
import { Reveal } from '@/components/shared/reveal';

type Crumb = { name: string; href: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden pb-4 pt-36">
      <GridBackdrop />
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-300">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    {crumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand/50" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
