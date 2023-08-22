// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // script: [
      //   { src: './assets/icon/iconfont.js', type: 'text/javascript' },
      // ],
      // link: [
      //   { rel: 'stylesheet', href: "./assets/icon/iconfont.css" },
      // ],
    }

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
      ],
      [
        'box-shadow-term', {
          'box-shadow': '0px 4.3px 2.2px rgba(0, 0, 0, 0.034),0px 10.2px 5.3px rgba(0, 0, 0, 0.048),0px 19.3px 10px rgba(0, 0, 0, 0.06),0px 34.4px 17.9px rgba(0, 0, 0, 0.072),0px 64.3px 33.4px rgba(0, 0, 0, 0.086),0px 154px 80px rgba(0, 0, 0, 0.12)'
        }
      ]
    ]
  },
  css: ['~/assets/css/index.less', '~/assets/css/font.css', '~/assets/css/animista.css', '~/assets/icon/iconfont.css'],
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
  //   { src: './assets/icon/iconfont.js', ssr: false }
  // ]
})
