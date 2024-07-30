/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    colors: {
      darkCyan: "hsl(158, 36%, 37%)",
      darkerCyan: "#1a4031",
      cream: "hsl(30, 38%, 92%)",
      veryDarkBlue: "hsl(212, 21%, 14%)",
      darkGrayishBlue: "hsl(228, 12%, 48%)",
      white: "#fff",
    },

    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      heading: ["Fraunces", "serif"],
    },
    
    screens: {
      sm: "480px",
      md: "640px",
    },

    fontSize: {
      '4xl': ['2.25rem', '2.25rem'],
      'sm': ['1rem', '1.5rem']
    },

    extend: {},
  },
  plugins: [],
};
