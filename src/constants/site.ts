import type { NavItem, SocialLink } from '@/types';

export const siteConfig = {
  name: 'Athilingam Subramanian',
  shortName: 'Athilingam S.',
  title: 'Athilingam Subramanian — AI Mobile Solutions Architect',
  role: 'Mobile Application Architect',
  titles: [
    'Mobile Application Architect',
    'AI Mobile Solutions Architect',
    'Enterprise Mobility Specialist',
    'React Native Expert',
  ],
  tagline: 'Building Scalable Mobile Experiences Powered by AI',
  description:
    'AI Mobile Solutions Architect and Lead Mobile Application Engineer with 11+ years architecting and delivering scalable, secure enterprise mobile and full-stack solutions across React Native, Android, iOS and Node.js.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://athilingam.dev',
  locale: 'en_US',
  email: 'athimca11@gmail.com',
  phone: '+91 807-235-8960',
  phoneHref: 'tel:+918072358960',
  location: 'Tirunelveli, Tamil Nadu, India',
  resume: '/Athilingam_Subramanian_Resume 2.pdf',
  ogImage: '/opengraph-image',
  calendly: 'https://calendly.com/athilingam',
  keywords: [
    'Athilingam Subramanian',
    'Mobile Application Architect',
    'AI Mobile Solutions Architect',
    'React Native Expert',
    'Enterprise Mobility',
    'Mobile Architecture',
    'Clean Architecture',
    'MVVM',
    'Offline First',
    'AI-Assisted Development',
    'Android',
    'iOS',
    'Flutter',
    'Node.js',
    'TypeScript',
  ],
} as const;

export const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    description: 'The story behind 11+ years of mobile craft',
  },
  {
    label: 'Experience',
    href: '/experience',
    description: 'Roles, companies and business impact',
  },
  {
    label: 'Projects',
    href: '/projects',
    description: 'Enterprise platforms shipped end-to-end',
  },
  {
    label: 'Architecture',
    href: '/architecture',
    description: 'Systems, patterns and pipelines',
  },
  { label: 'AI', href: '/ai', description: 'AI-assisted development and on-device AI' },
  { label: 'Skills', href: '/skills', description: 'The full technical toolkit' },
  { label: 'Blog', href: '/blog', description: 'Notes on mobile, architecture and AI' },
  { label: 'Contact', href: '/contact', description: 'Start a conversation' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/athilingam',
    handle: 'github.com/athilingam',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/athilingam',
    handle: 'linkedin.com/in/athilingam',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:athimca11@gmail.com',
    handle: 'athimca11@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    href: 'tel:+918072358960',
    handle: '807-235-8960',
    icon: 'phone',
  },
];
