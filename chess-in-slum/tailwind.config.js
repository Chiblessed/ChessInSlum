/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../src/asstes/home image/Rectangle 107.png')",
     },
      fontFamily: {
        josefin: ["Josefin Sans" ],
      },
    animation: {
      slide: 'slide 15s linear infinite',
    },
    screens: {
      'sm': { 'max': '600px' },   // Small devices (phones)
      'md': { 'min': '600px' },   // Medium devices (tablets)
      'lg': { 'min': '850px' },  // Large devices (desktops)
      'xl': { 'min': '1279px' },  // Extra large devices (large desktops)
      '2xl': { 'max': '1535px' }, // 2X extra large devices
      // Custom max-width breakpoints
      'xxl': { 'max': '1599px' }, // Example custom max-width breakpoint
      '3xl': { 'max': '1919px' }, // Another custom max-width breakpoint
    },
  },
  plugins: [],
}
}

