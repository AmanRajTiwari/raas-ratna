/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF8',
          100: '#FAF7F0',
          200: '#F5EFE0',
          300: '#EDE0C8',
          400: '#E2CFA8',
          DEFAULT: '#F5EFE0',
        },
        forest: {
          50: '#E8F0E0',
          100: '#C5D8B0',
          200: '#8FB878',
          300: '#5A9A42',
          400: '#2D7A14',
          500: '#1E5A0D',
          600: '#143D08',
          DEFAULT: '#2D5016',
          dark: '#1A3009',
        },
        honey: {
          50: '#FFF9E6',
          100: '#FFF0B3',
          200: '#FFE066',
          300: '#F5C842',
          400: '#D4A017',
          500: '#A67C00',
          DEFAULT: '#D4A017',
          dark: '#A67C00',
        },
        orange: {
          peel: '#FF7043',
          light: '#FF8A65',
          dark: '#E64A19',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#3D3D3D',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FAF7F0 0%, #E8F0E0 30%, #C5D8B0 60%, #2D5016 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FAF7F0 0%, #F5EFE0 100%)',
        'forest-gradient': 'linear-gradient(135deg, #2D5016 0%, #1A3009 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A017 0%, #A67C00 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF7043 0%, #E64A19 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'leaf-fall': 'leafFall 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        leafFall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 160, 23, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 160, 23, 0.7)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'glass-dark': '0 8px 32px rgba(0,0,0,0.3)',
        'premium': '0 20px 60px rgba(0,0,0,0.12)',
        'honey': '0 10px 40px rgba(212,160,23,0.3)',
        'forest': '0 10px 40px rgba(45,80,22,0.25)',
        'orange': '0 10px 40px rgba(255,112,67,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
