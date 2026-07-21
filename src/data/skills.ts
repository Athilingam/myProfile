import {
  Boxes,
  Smartphone,
  Server,
  Cloud,
  Sparkles,
  Database,
  GitBranch,
  Users,
} from 'lucide-react';
import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    name: 'Architecture',
    icon: Boxes,
    accent: '#2563EB',
    skills: [
      { name: 'Clean Architecture', level: 95 },
      { name: 'SOLID Principles', level: 93 },
      { name: 'MVVM', level: 92 },
      { name: 'Repository Pattern', level: 92 },
      { name: 'System Design', level: 90 },
      { name: 'Offline-First', level: 94 },
    ],
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    accent: '#06B6D4',
    skills: [
      { name: 'React Native', level: 96 },
      { name: 'Android', level: 90 },
      { name: 'iOS', level: 85 },
      { name: 'Flutter', level: 78 },
      { name: 'Cordova', level: 80 },
      { name: 'React JS', level: 88 },
    ],
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    accent: '#22C55E',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'REST APIs', level: 93 },
      { name: 'Firebase', level: 86 },
      { name: 'Authentication', level: 88 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    accent: '#0EA5E9',
    skills: [
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'App Store / Play Store', level: 92 },
      { name: 'Git', level: 94 },
      { name: 'Third-party SDKs', level: 88 },
    ],
  },
  {
    name: 'AI & Assisted Dev',
    icon: Sparkles,
    accent: '#7C3AED',
    skills: [
      { name: 'Cursor AI', level: 92 },
      { name: 'GitHub Copilot', level: 90 },
      { name: 'ChatGPT / Claude', level: 90 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'On-Device AI', level: 74 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    accent: '#F59E0B',
    skills: [
      { name: 'PostgreSQL', level: 86 },
      { name: 'SQLite', level: 92 },
      { name: 'NoSQL', level: 82 },
      { name: 'JSON Modeling', level: 90 },
    ],
  },
  {
    name: 'Languages',
    icon: GitBranch,
    accent: '#EF4444',
    skills: [
      { name: 'TypeScript', level: 93 },
      { name: 'JavaScript', level: 94 },
      { name: 'Java', level: 86 },
      { name: 'Kotlin', level: 82 },
    ],
  },
  {
    name: 'Leadership',
    icon: Users,
    accent: '#2563EB',
    skills: [
      { name: 'Technical Leadership', level: 94 },
      { name: 'Mentoring', level: 92 },
      { name: 'Requirement Analysis', level: 93 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'Agile / Scrum', level: 90 },
    ],
  },
];
