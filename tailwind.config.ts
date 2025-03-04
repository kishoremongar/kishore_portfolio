import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#0a0a0c',
        white: '#fafafa',
      },
      keyframes: {
        slideUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%)' },
        },
        drawBorder: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        drawBoxBorder: {
          '0%': {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          },
          '100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
        },
        fadeSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out',
        drawBorder: 'drawBorder 0.3s ease-out forwards',
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
