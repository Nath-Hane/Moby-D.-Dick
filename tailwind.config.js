/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'abyss': '#0A1128',
        'gold': '#D4AF37',
        'foam': '#F8F9FA',
        'titanium': '#8C9BAB',
        'dark-glass': 'rgba(10, 17, 40, 0.7)',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'display': ['"Cormorant Garamond"', 'serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
