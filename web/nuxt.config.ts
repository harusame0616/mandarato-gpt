// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  alias: {
    "@Domains/*": "../domains/*",
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/base.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    openAiApiKey: "",
  },
});
