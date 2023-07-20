export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },
  routeRules: {
    "/": {
      swr: 60 * 60,
    },
    "/blog/**": {
      swr: 60 * 60,
    },
  },
});
