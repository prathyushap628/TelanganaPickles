// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        // Google Material Icon Symbols
        {
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
          rel: "stylesheet",
        },
        // Nunito Sans Font.
        {
          href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap",
          rel: "stylesheet"
        }
      ],

      title: "nConnect Admin v2",
    },
  },
})
