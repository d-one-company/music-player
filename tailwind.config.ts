import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      gridTemplateRows: {
        body: '45px 1fr',
        content: '2.75rem 1fr',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.grid-stack': {
          display: 'grid',
          '> *': {
            'grid-area': '1 / 1',
          },
        },
        '.scroll-shadow': {
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            bottom: 'auto',
            height: 'var(--tw-scroll-shadow-size)',
            background:
              'linear-gradient(180deg, var(--tw-scroll-shadow-from), transparent)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            top: 'auto',
            height: 'var(--tw-scroll-shadow-size)',
            background:
              'linear-gradient(0deg, var(--tw-scroll-shadow-from), transparent)',
            pointerEvents: 'none',
          },
        },
      });
      matchUtilities(
        {
          'scroll-shadow-size': value => ({ '--tw-scroll-shadow-size': value }),
        },
        { values: theme('spacing') }
      );
      matchUtilities(
        { 'scroll-shadow': value => ({ '--tw-scroll-shadow-from': value }) },
        { values: theme('colors') }
      );
    }),
  ],
} satisfies Config;

export default config;
