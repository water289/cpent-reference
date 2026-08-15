/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0B0F19',
        'bg-secondary': '#141927',
        'bg-tertiary': '#1C2333',
        'bg-code': '#0D1117',
        'accent-primary': '#E8A020',
        'accent-web': '#3B82F6',
        'accent-binary': '#EF4444',
        'accent-iot': '#10B981',
        'accent-ctf': '#A855F7',
        'accent-recon': '#6B7280',
        'text-primary': '#E8EAED',
        'text-secondary': '#9CA3AF',
        'text-code': '#79C0FF',
        'border-custom': '#1F2D40',
        'success': '#22C55E',
        'warning': '#F59E0B',
        'danger': '#EF4444',
      },
      fontFamily: {
        'display': ['JetBrains Mono', 'monospace'],
        'body': ['Inter', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
