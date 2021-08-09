module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
    },
    screens: {
      sm: "340px",
      // => @media (min-width: 340x) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "light-gray": "#fff",
        "light-black":"#282c35",
        "light-primary":"#d23669",
        "dark-black":"#282c35",
        "dark-gray": "#fff",
        "dark-primary":"#ffa7c4"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
