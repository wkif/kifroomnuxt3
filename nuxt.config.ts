// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from './site.config'

<<<<<<< HEAD
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://webapi.amap.com/maps?v=2.0&key=8f0886bdea254dc94628be87db49bba9',
          type: 'text/javascript'
        }
      ],
      // link: [
      //   { rel: 'stylesheet', href: "./assets/icon/iconfont.css" },
      // ],
    }

  },
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxtjs/i18n'],
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
=======
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],

  app: {
    rootId: 'nuxt-root',
    head: {
      meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },

>>>>>>> v2.0
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'one-dark-pro',
        // Theme used if `html.dark`
        dark: 'one-dark-pro',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: [
        'c',
        'cpp',
        'java',
      ],

    },
  },
<<<<<<< HEAD
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
  // plugins: [
  //   { src: './assets/icon/iconfont.js', ssr: false }
  // ]
})
=======

  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],

  // stylelint: {
  //   /* module options */
  //   lintOnStart: false,
  // },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})
>>>>>>> v2.0
