import { siteConfig } from '@/constants/site';
import { socialLinks } from '@/constants/site';

/** Schema.org Person structured data. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'AI Mobile Solutions Architect',
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    image: `${siteConfig.url}/profile.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    sameAs: socialLinks
      .filter((link) => link.href.startsWith('http'))
      .map((link) => link.href),
    knowsAbout: [
      'Mobile Architecture',
      'React Native',
      'Clean Architecture',
      'AI-Assisted Development',
      'Enterprise Mobility',
      'On-Device AI',
    ],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Vel Tech, Chennai' },
      { '@type': 'CollegeOrUniversity', name: 'RVS College of Arts & Science' },
    ],
  };
}

/** Schema.org WebSite structured data. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

/** Schema.org BreadcrumbList structured data. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
