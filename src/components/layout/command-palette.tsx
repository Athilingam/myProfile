'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Command,
  Search,
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  CornerDownLeft,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { navItems, siteConfig, socialLinks } from '@/constants/site';
import { cn } from '@/lib/utils';

type CommandItem = {
  id: string;
  label: string;
  hint: string;
  icon: ReactNode;
  action: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  const items = useMemo<CommandItem[]>(() => {
    const nav = navItems.map((item) => ({
      id: `nav-${item.href}`,
      label: item.label,
      hint: item.description ?? 'Navigate',
      icon: <Search className="h-4 w-4" />,
      keywords: item.label,
      action: () => {
        router.push(item.href);
        close();
      },
    }));

    const actions: CommandItem[] = [
      {
        id: 'home',
        label: 'Home',
        hint: 'Go to the homepage',
        icon: <Command className="h-4 w-4" />,
        keywords: 'home start',
        action: () => {
          router.push('/');
          close();
        },
      },
      {
        id: 'resume',
        label: 'Download Resume',
        hint: 'Open the PDF resume',
        icon: <FileText className="h-4 w-4" />,
        keywords: 'resume cv download pdf',
        action: () => {
          window.open(siteConfig.resume, '_blank');
          close();
        },
      },
      {
        id: 'theme',
        label: 'Toggle Theme',
        hint: 'Switch light / dark',
        icon:
          resolvedTheme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          ),
        keywords: 'theme dark light mode',
        action: () => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          close();
        },
      },
      ...socialLinks
        .filter((s) => s.href.startsWith('http') || s.href.startsWith('mailto'))
        .map((s) => ({
          id: `social-${s.label}`,
          label: s.label,
          hint: s.handle,
          keywords: s.label,
          icon:
            s.icon === 'github' ? (
              <Github className="h-4 w-4" />
            ) : s.icon === 'linkedin' ? (
              <Linkedin className="h-4 w-4" />
            ) : (
              <Mail className="h-4 w-4" />
            ),
          action: () => {
            window.open(s.href, '_blank');
            close();
          },
        })),
    ];

    return [...actions, ...nav];
  }, [router, close, resolvedTheme, setTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.keywords ?? '').toLowerCase().includes(q),
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => setActive(0), [query]);

  const onListKey = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((prev) => Math.min(prev + 1, filtered.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((prev) => Math.max(prev - 1, 0));
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      filtered[active]?.action();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 md:inline-flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="ml-2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-700 dark:bg-slate-800">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onKeyDown={onListKey}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-elevated dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 px-4 dark:border-slate-800">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages, actions, links…"
                  className="h-14 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 dark:border-slate-700 dark:bg-slate-800">
                  ESC
                </kbd>
              </div>
              <ul className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <li className="px-3 py-6 text-center text-sm text-slate-400">
                    No results.
                  </li>
                ) : (
                  filtered.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(index)}
                        onClick={item.action}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors',
                          index === active
                            ? 'bg-brand/10 text-brand-700 dark:text-brand-200'
                            : 'text-slate-700 dark:text-slate-300',
                        )}
                      >
                        <span className="text-slate-400">{item.icon}</span>
                        <span className="flex-1">
                          <span className="block font-medium">{item.label}</span>
                          <span className="block text-xs text-slate-400">
                            {item.hint}
                          </span>
                        </span>
                        {index === active ? (
                          <CornerDownLeft className="h-3.5 w-3.5 text-slate-400" />
                        ) : null}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
