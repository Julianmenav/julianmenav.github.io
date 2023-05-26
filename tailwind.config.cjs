/** @type {import('tailwindcss').Config} */
const programmingColors = {
  Astro: '#ff5d01',
  Typescript: '#2f74c0',
  React: "#61dafb",
  Javascript: "#efd81d",
  Tailwind: "#38bdf8",
  Express: "#89bb3c",
  Node: "#3b7f3a",
  PHP: "#4d588e",
  CSS: "#7151a5",
  HTML: "#d84924",
  Laravel: "#f25951",
  Python: "##f2c73e"
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
      },
      colors: {
        "dark":"#101010",
        "custom-gray": "#777777",
        ...programmingColors
      },
      backgroundImage: {
        "dot-grid": "url('/dotGrid.svg')"
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' } 
        }
      },
      animation: {
        'infinite-slide': 'slide 50s linear infinite' 
      },
    },
  },
  safelist: [
    ...Object.keys(programmingColors).map(color => `text-${color}`),
    ...Object.keys(programmingColors).map(color => `border-${color}`)
  ],
	plugins: [],
}