import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1B3A',
          gold: '#C7A14A',
          light: '#F7F9FC'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(199, 161, 74, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
