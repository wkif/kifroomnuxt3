import bookshelfList from './bookshelfData'
import filmList from './filmData'
import linkData from './link'
import SayingData from './sayingData'

const socialLink = {
  github: "https://github.com/wkif",
  email: "mailto:kif101001000@163.com"
}
const blogname = 'kifroom'
const name = 'kif'
// 欢迎语
const welcome = '欢迎来到kifroom'
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

export { socialLink, name, valineConfig, blogname, welcome, bookshelfList, filmList, linkData, SayingData }