import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridBackdrop } from '@/components/shared/grid-backdrop';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
      <GridBackdrop />
      <div className="text-center">
        <p className="text-gradient-accent text-8xl font-bold tracking-tight">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          This page took the offline-first route.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Button href="/projects" variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
}
