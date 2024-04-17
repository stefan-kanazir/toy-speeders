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
    animation: {
      "infinite-scroll": "infinite-scroll 30s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
};
