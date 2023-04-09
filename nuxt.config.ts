// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "nuxt-icons",
    "nuxt-swiper",
  ],
  headlessui: {
    prefix: "Hui",
  },
});
