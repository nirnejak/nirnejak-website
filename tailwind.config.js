/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(-10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideDown: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideLeft: {
          from: { transform: "translateX(-10px)" },
          to: { transform: "translateX(0)" },
        },
        slideRight: {
          from: { transform: "translateX(10px)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDown: "slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUp: "slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeft: "slideLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRight: "slideRight 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    fontFamily: {
      sans: ["Space Grotesk"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
