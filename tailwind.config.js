/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        rblack:["Roboto-Black","sans-serif"],
        rthin:["Roboto-Thin","sans-serif"],
        rlight:["Roboto-Light","sans-serif"]
      }







    },
  },
  plugins: [],
}

