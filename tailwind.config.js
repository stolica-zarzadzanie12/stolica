/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8860B',
          light: '#D4AF37',
          dark: '#8B6914'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          dark: '#0D0D0D'
        }
      }
    },
  },
  plugins: [],
};
