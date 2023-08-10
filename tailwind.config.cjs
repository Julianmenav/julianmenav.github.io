/** @type {import('tailwindcss').Config} */
const programmingColors = {
  Astro: "#ff5d01",
  Typescript: "#2f74c0",
  React: "#61dafb",
  Javascript: "#efd81d",
  Tailwind: "#38bdf8",
  Express: "#89bb3c",
  Node: "#3b7f3a",
  PHP: "#4d588e",
  CSS: "#7151a5",
  HTML: "#d84924",
  Laravel: "#f25951",
  Python: "#f2c73e",
  Firebase: '#ffcc2f',
  MySQL: '#005e87'
};

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1900px",
        xl: "1400px",
        lg: "980px",
        sm: "640px",
        xs: "400px",
        "2xs": "345px",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        dark: "#101010",
        "custom-gray": "#777777",
        "bright-color": "#b09dc2",
        "grid-color-dark": "#404040",
        "grid-color-bright": "#d1d1d1",
        ...programmingColors,
      },
      backgroundImage: {
        "black-white-profile": "url('/img/bw-propic.webp')",
        "color-profile": "url('/img/color-propic.webp')",
        "dot-grid-dark": "radial-gradient(circle at 1px 1px, theme('colors.grid-color-dark') 1px, transparent 0)",
        "dot-grid-bright": "radial-gradient(circle at 1px 1px, theme('colors.grid-color-bright') 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-grid-dark": "27px 27px",
        "dot-grid-bright": "27px 27px",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-slide": "slide 50s linear infinite",
      },
    },
  },
  safelist: [...Object.keys(programmingColors).map((color) => `text-${color}`), ...Object.keys(programmingColors).map((color) => `border-${color}`)],
  plugins: [],
};
