/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-base': '#0B0F19',
        'surface-raised': '#0F1623',
        'surface-overlay': '#141B2D',
        'surface-sunken': '#080C14',
        'accent-gold': '#E8A020',
        'accent-green': '#22C55E',
        'accent-red': '#EF4444',
        'accent-blue': '#3B82F6',
        'accent-purple': '#A855F7',
      },
      fontFamily: {
        'display': ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'code': ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 40px rgba(232, 160, 32, 0.15)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 160, 32, 0)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(232, 160, 32, 0.15)' },
        },
      },
    },
  },
  plugins: [],
}
