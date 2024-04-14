/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2em",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1240px",
    },
  },
};
