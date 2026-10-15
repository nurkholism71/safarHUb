/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#15803d',
          600: '#0e5f2c',
          700: '#0a4620',
          800: '#073318',
          900: '#042210',
          dark: '#0a2318',
          gold: '#c59b27',
          'gold-light': '#dfb74a',
        },
        sidebar: '#0d2218',
        card: '#ffffff',
        muted: '#64748b',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px 0 rgba(0,0,0,0.06)',
        'glow': '0 0 25px rgba(197, 155, 39, 0.25)',
      }
    },
  },
  plugins: [],
}
