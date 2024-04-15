/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'primary-red' : '#B43C08',
        'secondary-blue': '#0e162a',
        'bg-blue': '#192642'
      },
      fontFamily: {
        chakra : ['Chakra Petch', 'sans-serif'],
      },
      animation: {
        'slide-in-right': 'slide-in-right 1s ease-in-out',
        'slide-in-left': 'slide-in-left 1s ease-in-out',
        'bouncing': 'bouncing 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)', // Start off-screen to the left
            opacity: '0', // Initially hidden
          },
          '100%': {
            transform: 'translateX(0)', // Slide in to the right
            opacity: '1', // Fully visible
          },
        },
        'bouncing': {
          '0%': {
            transform: 'translateY(0px)', // Start off-screen to the left
          },
          '100%': {
            transform: 'translateY(10px)', // Slide in to the right
          },
        },
    },
    },
  },
  plugins: [],
}