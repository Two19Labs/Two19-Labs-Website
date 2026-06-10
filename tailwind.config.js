/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette (two19labs-brand-guidelines v1.0 / 2026)
        bone: '#f0efea',      // brand: Bone — primary background
        paper: '#f0efea',     // alias kept so existing utilities map to Bone
        ink: {
          DEFAULT: '#0a0a0c', // brand: Ink — type / icon
          soft: '#5a5a64',    // muted text (extended for hierarchy)
        },
        line: '#dcdcd6',      // hairline borders (extended)
        blue: '#2540ff',      // brand: Lab Blue — primary / 40%+ of layout
        card: '#ffffff',      // brand: White — type on blue / elevated surface
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
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
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        'scroll-ind': 'scroll 24s linear infinite',
      },
    },
  },
  plugins: [],
}
