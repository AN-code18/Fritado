/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left bottom, #d2e6ec, #d8e6ee, #dfe7ee, #e4e8ed, #e8e9ec)",
      },
    },
  },
  plugins: [],
};
