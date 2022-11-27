import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {},
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image-edge"],
  imports: {
    dirs: ["stores"],
  },
  pinia: { autoImports: ["defineStore", "acceptHMRUpdate"] },
  image: { domains: [] },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Template",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        {
          name: "description",
          content: "Sample description",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "favicon.svg",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [eslintPlugin()],
  },
});
