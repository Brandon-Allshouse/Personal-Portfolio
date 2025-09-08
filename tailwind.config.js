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
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#000000',
        },
        primary: {
          50: '#fef2f2',
          100: '#fee2e2', 
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        pearl: {
          50: '#fefbff',
          100: '#fef7ff',
          200: '#feeeff',
          300: '#fde2ff',
          400: '#fccdff',
          500: '#faa6ff',
          600: '#f175ff',
          700: '#e03cff',
          800: '#be0aff',
          900: '#9c00db',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        danger: {
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 10s linear infinite',
        'pearl-shift': 'pearlShift 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(244, 63, 94, 0.2), 0 0 60px rgba(250, 166, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(244, 63, 94, 0.3), 0 0 120px rgba(250, 166, 255, 0.2)' 
          },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pearlShift: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #ef4444, #f43f5e, #faa6ff, #be0aff)' 
          },
          '25%': { 
            background: 'linear-gradient(45deg, #f43f5e, #faa6ff, #be0aff, #ef4444)' 
          },
          '50%': { 
            background: 'linear-gradient(45deg, #faa6ff, #be0aff, #ef4444, #f43f5e)' 
          },
          '75%': { 
            background: 'linear-gradient(45deg, #be0aff, #ef4444, #f43f5e, #faa6ff)' 
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(239, 68, 68, 0.3)',
        'glow-lg': '0 0 40px rgba(239, 68, 68, 0.4)',
        'glow-red': '0 0 25px rgba(239, 68, 68, 0.4), 0 0 50px rgba(244, 63, 94, 0.2)',
        'pearl': '0 0 30px rgba(250, 166, 255, 0.3), 0 0 60px rgba(190, 10, 255, 0.2)',
        'dark': '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(45deg, #ef4444, #f43f5e, #faa6ff, #be0aff)',
        'red-gradient': 'linear-gradient(135deg, #dc2626, #ef4444)',
        'accent-gradient': 'linear-gradient(135deg, #e11d48, #f43f5e)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}