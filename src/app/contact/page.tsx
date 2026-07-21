import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, FileText } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { siteConfig, socialLinks } from '@/constants/site';
import { PageHeader } from '@/components/shared/page-header';
import { ContactForm } from '@/components/sections/contact-form';
import { Reveal } from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Athilingam Subramanian — AI Mobile Solutions Architect. Email, phone, LinkedIn, GitHub and resume.',
  path: '/contact',
});

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  resume: FileText,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }])} />
      <PageHeader
        eyebrow="Contact"
        title="Let's build something exceptional."
        description="Open to Principal / Staff mobile architecture roles and AI mobile initiatives. Reach out and I'll reply within a day."
      />

      <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={siteConfig.phone}
            href={siteConfig.phoneHref}
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={siteConfig.location}
          />

          <div className="grid grid-cols-2 gap-3 pt-2">
            {socialLinks
              .filter((s) => s.href.startsWith('http'))
              .map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-subtle transition-colors hover:border-brand/30 hover:text-brand-600 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-slate-300"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                );
              })}
          </div>

          <div className="rounded-2xl border border-brand/15 bg-brand/[0.04] p-5 dark:border-brand/20 dark:bg-brand/[0.06]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Calendar className="h-4 w-4 text-brand" />
              Book a call
            </div>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              Prefer to talk? Schedule a 30-minute intro.
            </p>
            <Button
              href={siteConfig.calendly}
              variant="outline"
              size="sm"
              className="mt-3"
            >
              Open scheduler
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-subtle transition-colors hover:border-brand/30 dark:border-slate-800/80 dark:bg-slate-900/50">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand-600 dark:text-brand-300">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
