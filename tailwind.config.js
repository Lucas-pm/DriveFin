import { colors } from './src/styles/colors'
import { fontMontserrat } from './src/styles/fontFamily'



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
    plugins: [],
  }
}
