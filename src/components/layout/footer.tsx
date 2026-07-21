import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { navItems, siteConfig, socialLinks } from '@/constants/site';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  resume: ArrowUpRight,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
              AS
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              Athilingam Subramanian
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {siteConfig.tagline}. AI Mobile Solutions Architect with 11+ years building
            enterprise mobile at global scale.
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand/30 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-brand-600 dark:hover:text-brand-300"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.phoneHref}
                className="hover:text-brand-600 dark:hover:text-brand-300"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.location}</li>
            <li>
              <a
                href={siteConfig.resume}
                className="hover:text-brand-600 dark:hover:text-brand-300"
              >
                Download Resume →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
