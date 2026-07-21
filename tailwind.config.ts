import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563EB',
          50: '#EFF5FF',
          100: '#DBE7FE',
          200: '#BFD3FE',
          300: '#93B4FD',
          400: '#608BFA',
          500: '#2563EB',
          600: '#1D4FD7',
          700: '#1A3FB0',
          800: '#1B378C',
          900: '#1C3372',
        },
        ink: {
          DEFAULT: '#0F172A',
          950: '#020617',
        },
        accent: {
          DEFAULT: '#06B6D4',
          soft: '#22D3EE',
        },
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        card: '0 4px 24px -8px rgba(15, 23, 42, 0.12), 0 2px 8px -4px rgba(15, 23, 42, 0.08)',
        elevated:
          '0 24px 48px -12px rgba(15, 23, 42, 0.18), 0 8px 24px -8px rgba(15, 23, 42, 0.10)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.12), 0 8px 40px -12px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 2s infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
