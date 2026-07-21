import {
  Shield,
  Sprout,
  Route,
  GraduationCap,
  Milk,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const covers: Record<string, LucideIcon> = {
  insurance: Shield,
  agritech: Sprout,
  traceability: Route,
  erp: GraduationCap,
  dairy: Milk,
  ai: Bot,
};

/** Generative gradient cover art keyed to a project — no external images needed. */
export function ProjectCover({
  cover,
  accent,
  className,
}: {
  cover: string;
  accent: string;
  className?: string;
}) {
  const Icon = covers[cover] ?? Shield;
  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl',
        className,
      )}
      style={{
        background: `radial-gradient(120% 120% at 20% 10%, ${accent}22, transparent 60%), radial-gradient(120% 120% at 90% 90%, ${accent}18, transparent 55%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
      >
        <Icon className="h-8 w-8" />
      </div>
    </div>
  );
}
