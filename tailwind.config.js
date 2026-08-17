/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0B0B',
          900: '#111111',
          850: '#161618',
          800: '#1C1C1C',
          750: '#222226',
          700: '#2C2C2C',
          600: '#3a3a40',
          500: '#4a4a52',
          400: '#6b6b76',
          300: '#9a9aa6',
          200: '#c4c4cc',
          100: '#e6e6ec',
        },
        // "unity" scale remapped to neon orange (#ff7b00) so all existing
        // unity-* utility classes cascade the cyberpunk theme automatically.
        unity: {
          DEFAULT: '#ff7b00',
          50: '#fff3e6',
          100: '#ffe0c2',
          200: '#ffc285',
          300: '#ffa347',
          400: '#ff8c1a',
          500: '#ff7b00',
          600: '#e66e00',
          700: '#b35600',
          800: '#803f00',
          900: '#4d2600',
        },
        neon: {
          orange: '#ff7b00',
          green: '#39FF14',
          cyan: '#00F0FF',
          amber: '#FFB020',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        'glow-unity': '0 0 24px -4px rgba(255, 123, 0, 0.55)',
        'glow-neon': '0 0 24px -4px rgba(255, 123, 0, 0.55)',
        'glow-green': '0 0 24px -4px rgba(57, 255, 20, 0.45)',
        'glow-soft': '0 0 40px -12px rgba(255, 123, 0, 0.35)',
      },
      backgroundImage: {
        'grid-overlay':
          'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(255,123,0,0.12), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'drift-bg': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(3%, -2%) scale(1.05)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'scan-line': 'scan-line 6s linear infinite',
        'float-y': 'float-y 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'drift-bg': 'drift-bg 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
