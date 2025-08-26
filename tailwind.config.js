
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#0f1115", gold: "#C8A86B", goldSoft: "#E8D8B0" },
      fontFamily: { serif: ["serif"] }
    }
  },
  plugins: []
};
