// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  unocss: {
    // icon: https://icones.js.org/   interactive: https://unocss.dev/interactive/
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [
      [
        'transform-center', {
          transform: 'translate(-50%, -50%)'
        }
      ]
    ]
  },
  css: ['~/assets/css/index.less', '~/assets/css/font.css', '~/assets/css/animista.css'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-ocean',
        // Theme used if `html.dark`
        dark: 'material-darker',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      },
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml']
    }
  },
  // plugins: [
  //   { src: '~/plugins/nprogress.ts', mode: 'client' }
  // ]
})
