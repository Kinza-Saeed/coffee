/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#8c5c3c",
        latte: "#f5f3ed",
        mocha: "#b08968",
        foam: "#d2b48c",
        espresso: "#4b2e2e",
        coffeeCream: "#fdf6f0",
        darkCoffee: "#4b2e2e",
        mediumCoffee: "#6b4226",
        lightCoffee: "#c49a6c",
        primary: "#fff0f5", // light pink
        accent: "#f9a8d4", // soft rose
        dark: "#be185d", // dark rose
      },
      fontFamily: {
        body: ['"Poppins"', "sans-serif"],
        navbar: ['"Raleway"', "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out both",
        steamUp: "steamUp 4s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        steamUp: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-40px) scale(1.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
