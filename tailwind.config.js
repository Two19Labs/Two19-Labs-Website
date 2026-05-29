/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f4f4f1',     // page background (warm off-white)
        ink: {
          DEFAULT: '#0a0a0c', // near-black text / dark surfaces
          soft: '#5a5a64',    // muted text
        },
        line: '#dcdcd6',      // hairline borders
        blue: '#2540ff',      // primary accent
        card: '#ffffff',      // elevated surface
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight2: '-0.03em',
      },
      borderRadius: {
        pill: '100px',
        band: '28px',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 28s linear infinite',
        'scroll-ind': 'scroll 32s linear infinite',
      },
    },
  },
  plugins: [],
}
