/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#c9a84c', light: '#e2c47a', dark: '#a07830' },
        charcoal: { DEFAULT: '#0f0f0f', light: '#1a1a1a', mid: '#141414' },
        orange: { DEFAULT: '#e07020', light: '#f08030' },
        cream: '#f5f0e8',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.9s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'star-twinkle': 'starTwinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3), 0 0 40px rgba(201,168,76,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #c9a84c 0%, #e2c47a 40%, #c9a84c 60%, #a07830 100%)',
      },
    },
  },
  plugins: [],
}
