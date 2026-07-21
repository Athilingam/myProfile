import type { Achievement, Certification } from '@/types';

export const achievements: Achievement[] = [
  {
    value: 11,
    suffix: '+',
    label: 'Years Experience',
    description: 'Architecting enterprise mobile since 2015.',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Applications Delivered',
    description: 'Across AgriTech, insurance, ERP and commerce.',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Countries',
    description: 'Shipped to clients on 4 continents.',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Global organizations served end to end.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AI for Everyone & Applied GenAI',
    issuer: 'IIT Madras — AI Program',
    year: '2025',
    status: 'in-progress',
    description:
      'Advancing formal foundations in applied AI, machine learning and generative systems to complement hands-on AI-assisted engineering.',
  },
  {
    title: 'Master of Computer Application (MCA)',
    issuer: 'Vel Tech, Avadi, Chennai',
    year: '2014',
    status: 'completed',
    description: 'Postgraduate degree in computer applications and software engineering.',
  },
  {
    title: 'B.Sc. Computer Science',
    issuer: 'RVS College of Arts & Science, Coimbatore',
    year: '2010',
    status: 'completed',
    description: 'Undergraduate foundation in computer science and programming.',
  },
  {
    title: 'On-Device AI & Mobile ML Specialization',
    issuer: 'Planned',
    year: '2026',
    status: 'planned',
    description:
      'Deepening TensorFlow Lite and Core ML expertise for privacy-first on-device intelligence.',
  },
];
