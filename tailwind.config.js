/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Derived from the electric-blue "19" in the Two19 Labs logo
        brand: {
          50: '#eaf0ff',
          100: '#d3e0ff',
          200: '#aac1ff',
          300: '#7e9dff',
          400: '#5a7eff',
          500: '#3b6dff', // primary accent
          600: '#2b53e6',
          700: '#1f3fb8',
          800: '#162d83',
          900: '#101f5c',
        },
        ink: {
          0: '#050507',   // base canvas
          50: '#0a0a0d',  // page bg
          100: '#0e0e13', // elevated
          200: '#14141b', // card
          300: '#1c1c26', // floating
        },
        line: 'rgba(255,255,255,0.08)',
        'line-strong': 'rgba(255,255,255,0.14)',
        mute: '#9aa0ad',
        faint: '#6b7180',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Poppins', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(59,109,255,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.40)',
        glow: '0 0 0 1px rgba(59,109,255,0.20), 0 8px 40px -8px rgba(59,109,255,0.45)',
        float: '0 24px 60px -20px rgba(0,0,0,0.7), 0 4px 14px -4px rgba(59,109,255,0.20)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
      },
    },
  },
  plugins: [],
}
