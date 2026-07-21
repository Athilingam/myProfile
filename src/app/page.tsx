import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { AchievementsStrip } from '@/components/sections/achievements-strip';
import { AboutSummary } from '@/components/sections/about-summary';
import { ExperienceTimeline } from '@/components/sections/experience-timeline';
import { ProjectsGrid } from '@/components/sections/projects-grid';
import { ArchitectureShowcase } from '@/components/sections/architecture-showcase';
import { AIShowcase } from '@/components/sections/ai-showcase';
import { SkillsGrid } from '@/components/sections/skills-grid';
import { CtaBand } from '@/components/sections/cta-band';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AchievementsStrip />
      <AboutSummary />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-12">
        <SectionHeading
          eyebrow="Experience"
          title="A decade of shipping enterprise mobile."
          description="Three chapters, one mission: turning business complexity into products that scale."
        />
        <ExperienceTimeline />
        <div className="mt-10">
          <Button href="/experience" variant="outline">
            Full experience
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Enterprise platforms, shipped end to end."
            description="From offline-first AgriTech at global scale to an enterprise insurance suite."
          />
          <Button href="/projects" variant="outline" className="shrink-0">
            All projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <ProjectsGrid featured={3} />
      </section>

      <section className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/30">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Architecture"
              title="How I build systems that last."
              description="The patterns and pipelines behind every product — the most important part of the craft."
            />
            <Button href="/architecture" variant="outline" className="shrink-0">
              Explore architecture
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <ArchitectureShowcase compact />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="AI"
            title="Building mobile that's powered by AI."
            description="AI-assisted development today, on-device intelligence tomorrow."
          />
          <Button href="/ai" variant="outline" className="shrink-0">
            AI expertise
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <AIShowcase compact />
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Skills"
            title="A full-stack mobile toolkit."
            description="Architecture, mobile, backend, cloud, AI and leadership."
          />
          <Button href="/skills" variant="outline" className="shrink-0">
            All skills
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <SkillsGrid compact />
      </section>

      <CtaBand />
    </>
  );
}
