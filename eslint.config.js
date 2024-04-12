import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    rules: {
      "no-unused-vars": "error",
    },
  },
];
