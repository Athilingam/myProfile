import type { Metadata } from 'next';
import { siteConfig } from '@/constants/site';

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

/** Build page-level metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  keywords = [],
}: SeoInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const pageTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.title;

  return {
    title: pageTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        { url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
