import { cn } from '@/lib/utils';

/** Subtle grid + radial glow backdrop used behind hero and section headers. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] dark:bg-grid-dark" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl dark:bg-brand/[0.15]" />
      <div className="absolute right-[8%] top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl dark:bg-accent/[0.12]" />
    </div>
  );
}
