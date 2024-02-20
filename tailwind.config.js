/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'LimeGreen': 'hsl(163, 72%, 41%)',
        'BrightRed': 'hsl(356, 69%, 56%)',

        LightTheme: {
          'WhiteBG': 'hsl(0, 0%, 100%)',
          'VeryPaleBlueTop': 'hsl(225, 100%, 98%)',
          'LightGrayishBlueCard': 'hsl(227, 47%, 96%)',
          'DarkGrayishBlueText': 'hsl(228, 12%, 44%)',
          'VeryDarkBlueText': 'hsl(230, 17%, 14%)'
        },

        DarkTheme: {
          'VeryDarkBlueBG': 'hsl(230, 17%, 14%)',
          'VeryDarkBlueTop': 'hsl(232, 19%, 15%)',
          'DarkDesaturatedBlueCard': 'hsl(228, 28%, 20%)',
          'DesaturatedBlueText': 'hsl(228, 34%, 66%)',
          'WhiteText': 'hsl(0, 0%, 100%)'
        }
      },
    },
  },
  plugins: [],
}

