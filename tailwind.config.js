const colors = require('tailwindcss/colors')

// #880808
const bloodPallete = {
  DEFAULT: 'hsl(0, 89%, 28%)',
  25: 'hsl(0, 89%, 98%)',
  50: 'hsl(0, 89%, 90%)',
  100: 'hsl(0, 89%, 80%)',
  200: 'hsl(0, 89%, 70%)',
  300: 'hsl(0, 89%, 60%)',
  400: 'hsl(0, 89%, 44%)',
  500: 'hsl(0, 89%, 28%)',
  600: 'hsl(0, 89%, 20%)',
  700: 'hsl(0, 89%, 14%)',
  800: 'hsl(0, 89%, 08%)',
  900: 'hsl(0, 89%, 04%)',
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blood: bloodPallete,
      primary: bloodPallete,
      accent: colors.black,
    },

    extend: {
      zIndex: {
        1000: '1000',
        1100: '1100',
        1200: '1200',
        1300: '1300',
        1400: '1400',
        1500: '1500',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        '90p': '90%',
      },
      minHeight: {
        screen50: '50vh',
        screen80: '80vh',
      },
      animation: {
        'spin-reverse': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
