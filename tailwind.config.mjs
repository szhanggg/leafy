/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "#3FA929",
        secondary: "#D9EAD7",
        tertiary: "#ECF4EA",
      },
      height: {
        screen: "calc(var(--vh, 1vh) * 100)",
      },
    },
  },
  plugins: [],
};
