import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oath: {
          emerald: {
            primary: '#0FAA77',
            deep: '#067B60',
            bright: '#23E1B2',
            pressed: '#0A8D67',
            surface: 'rgba(15, 170, 119, 0.14)',
            hairline: 'rgba(15, 170, 119, 0.35)',
            glow: 'rgba(35, 225, 178, 0.30)',
          },
          gold: {
            primary: '#EBDFA4',
            deep: '#BFA35A',
            bright: '#FFF9E6',
            pressed: '#D5C17C',
          },
          text: {
            DEFAULT: '#111827',
            secondary: '#6B7280',
            dark: '#FFFFFF',
            'dark-secondary': '#9CA3AF',
          },
          bg: {
            DEFAULT: '#FFFFFF',
            surface: '#FAFBFC',
            dark: '#000000',
            'dark-surface': '#1F2124',
          },
          hairline: {
            DEFAULT: '#E5E7EB',
            dark: '#262B30',
          },
          miss: {
            bg: '#FFD27A',
            border: '#FFC34D',
            ink: '#111216',
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.25px', fontWeight: '700' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['0.9375rem', { lineHeight: '1.5' }],
        'small': ['0.8125rem', { lineHeight: '1.4' }],
        'caption': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.25px' }],
      },
      borderRadius: {
        'oath-sm': '8px',
        'oath-md': '12px',
        'oath-lg': '16px',
        'oath-xl': '20px',
      },
      spacing: {
        'oath-xs': '4px',
        'oath-sm': '8px',
        'oath-md': '12px',
        'oath-lg': '16px',
        'oath-xl': '20px',
        'oath-xxl': '24px',
        'oath-xxxl': '32px',
      },
      boxShadow: {
        'oath-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'oath-md': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'oath-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'oath-xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
