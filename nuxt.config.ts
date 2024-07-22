// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from "./site.config";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image", "@nuxt/content"],

  app: {
    rootId: "nuxt-root",
    head: {
      title: siteConfig.title,
      meta: [
        { name: "description", content: siteConfig.description },
        { name: "author", content: siteConfig.author },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "revisit-after", content: "7 days" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        {
          name: "referrer",
          content: "strict-origin-when-cross-origin",
        },
        {
          name: "msvalidate.01",
          content: "0825B99EE365008C3D71C595BBCA41E3",
        },
        // <meta name="baidu-site-verification" content="codeva-mTATCuR6RX" />
        {
          name: "baidu-site-verification",
          content: "codeva-mTATCuR6RX",
        },
      ],
      script: [
        {
          innerHTML: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a3e4c6e98dfa2d82e754005c8e5240fb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      bodyAttrs: {
        class: "font-sans",
      },
    },
  },

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "one-dark-pro",
        // Theme used if `html.dark`
        dark: "one-dark-pro",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
      preload: ["c", "cpp", "java"],
    },
  },

  css: [
    "@unocss/reset/tailwind.css",
    "@/assets/styles/global.scss",
    "@/assets/styles/theme.css",
    "@/assets/styles/transition.css",
    "@/assets/styles/font.css",
    "@/assets/styles/markdown.scss",
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

  compatibilityDate: "2024-07-10",
});
