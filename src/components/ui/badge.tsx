import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'brand' | 'accent' | 'success' | 'muted';
};

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  default:
    'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300',
  brand:
    'border-brand/20 bg-brand/10 text-brand-700 dark:border-brand/30 dark:bg-brand/10 dark:text-brand-200',
  accent:
    'border-accent/20 bg-accent/10 text-cyan-700 dark:border-accent/30 dark:text-accent-soft',
  success:
    'border-success/20 bg-success/10 text-green-700 dark:border-success/30 dark:text-green-300',
  muted:
    'border-transparent bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
