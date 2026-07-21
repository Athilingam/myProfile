import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone' | 'resume';
};

export type Experience = {
  slug: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  period: string;
  current: boolean;
  domain: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  impact: { label: string; value: string }[];
};

export type ProjectStatus = 'shipped' | 'flagship' | 'concept';

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: 'Enterprise' | 'AgriTech' | 'E-Commerce' | 'ERP' | 'AI';
  status: ProjectStatus;
  year: string;
  company: string;
  cover: string;
  accent: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  challenges: { title: string; detail: string }[];
  features: string[];
  impact: { label: string; value: string }[];
  lessons: string[];
  screens: { title: string; caption: string }[];
};

export type SkillGroup = {
  name: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: number }[];
};

export type Achievement = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
};

export type ArchitecturePattern = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  layers: { name: string; detail: string }[];
  benefits: string[];
};

export type AICapability = {
  title: string;
  description: string;
  tools: string[];
};

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
};

export type BlogPost = BlogMeta & {
  content: string;
};
