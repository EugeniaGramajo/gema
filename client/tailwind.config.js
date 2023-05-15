/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        darkBlue:"#0081A7",
        buttonBlue:"#00AFB9",
        bgHome:"#FDFCDC",
        bgHome2:"#FED9B7",
        logo:"#F07167",
        agenda:"#ffcfd2"
      }
    },
  },
  plugins: [],
}
