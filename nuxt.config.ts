// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }, // Disable devtools to avoid vite-plugin-inspect
  vite: {
    plugins: []
  }
})