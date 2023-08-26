
import { welcome, welcomeinEnglish } from './data/config'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    en: {
      welcome: welcomeinEnglish,
      language: 'Language',
      header:{
        home:'Home',
        about:'About',
        link:'Link',
        saying:'Saying',
        travel:'Travel',
      }
    },
    zh: {
      welcome,
      language: '語言',
      header:{
        home:'首页',
        about:'关于',
        link:'友人帐',
        saying:'闲言碎语',
        travel:'活在旅途',
      }
    }
  }
}))
