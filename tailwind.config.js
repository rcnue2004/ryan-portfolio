/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Navy/slate base palette
        base: {
          950: '#0a0f1e',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        // Electric blue accent
        accent: {
          DEFAULT: '#38bdf8',
          dim: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
      },
    },
  },
  plugins: [],
};
