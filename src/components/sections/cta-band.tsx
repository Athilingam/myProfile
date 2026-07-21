import { ArrowRight, Download } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/shared/reveal';

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-gradient-to-br from-slate-900 to-ink-950 px-8 py-16 text-center shadow-elevated dark:border-slate-800 sm:px-16">
        <div
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build the next generation of AI-powered mobile.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-slate-300">
            Open to Principal / Staff mobile architecture roles and AI mobile initiatives.
            Let&apos;s talk about what you&apos;re building.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Let&apos;s Connect
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={siteConfig.resume}
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
