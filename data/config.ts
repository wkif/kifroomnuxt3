import bookshelfList from './bookshelfData'
import filmList from './filmData'
import linkData from './link'
import SayingData from './sayingData'
import travelData from './travelData'

const socialLink = {
  github: "https://github.com/wkif",
  email: "mailto:kif101001000@163.com"
}
// 博客名字
const blogname = 'kifroom'
const name = 'kif'
// 欢迎语
const welcome = '您好，可以叫我kif，23年加入工作的前端开发一枚，这里会记录一些自己觉得有意思的学习记录等，感兴趣Ctrl+D收藏吧~'
const welcomeinEnglish = 'Hello, you can call me kif, 23 years to join the work of front-end development, here will record some of their interesting learning records, interested in Ctrl+D collection it ~'

// valine配置
const valineConfig = {
  el: '#valineBox',
  appId: 'b7AAVOuWhWIEQsQfviV12FRp-gzGzoHsz',
  appKey: 'TYFSaiPIN5WAmTU3nv8wG8wb',
  serverURLs: 'https://b7aavouw.lc-cn-n1-shared.com',
  avatar: 'wavatar',
  visitor: true,
  recordIP: true,
  placeholder: '说说你想法'
}

const key = '1abf17fcdf2fc58bcf8e8b303a9cda2f'
export { socialLink, name, valineConfig, blogname, welcome, welcomeinEnglish, bookshelfList, filmList, linkData, SayingData, travelData, key }