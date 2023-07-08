interface FilmType {
  name: string
  image: string
  time: string
  haveSeen: boolean
}
const filmList: FilmType[] = [
  {
    name: '花束みたいな恋をした',
    image: 'https://picx.zhimg.com/v2-bc6a4fcf8c1ecce676c9076ca7a4afaf_r.jpg',
    time: '2021 剧情 爱情',
    haveSeen: false
  },
  {
    name: '只有芸知道',
    image: 'https://pic4.zhimg.com/v2-9ebb05f37457045099946f4ff614aee7_r.jpg',
    time: '2019 剧情 爱情',
    haveSeen: false
  },
  {
    name: '忠犬八公',
    image: 'https://cdn.04pic.com/image/640d59b6b65e2.jpg',
    time: '2009 剧情  家庭 ',
    haveSeen: true
  },
  {
    name: 'one day',
    image: 'https://pica.zhimg.com/v2-d56a8692012e5457639435a2abfef3f0_r.jpg',
    time: '2011 剧情  爱情',
    haveSeen: true
  },
  {
    name: '触不可及',
    image: 'https://img2.doubanio.com/view/photo/l/public/p2575135153.webp',
    time: '2017 剧情 喜剧',
    haveSeen: true
  },
  {
    name: '最后的棒棒',
    image: 'https://pic1.zhimg.com/v2-40e1a3150f770d1bec5032a87e6c07f7_r.jpg',
    time: '2016 纪录片',
    haveSeen: true
  },
  {
    name: '恋恋笔记本',
    image: 'https://pic4.zhimg.com/v2-2fb3139595c58acce45353d2db82b6d7_r.jpg',
    time: '2004 剧情 爱情',
    haveSeen: true
  },
  {
    name: '牧马人',
    image: 'https://picx.zhimg.com/v2-94c7b59ee0fa62a2bd8cfbabf8718455_r.jpg',
    time: '1982 剧情 爱情',
    haveSeen: true
  },
  {
    name: '浪客剑心',
    image: 'https://picx.zhimg.com/v2-581a2dab14b686933fd75e9c493f16cd_1440w.jpg',
    time: '真人版 剧情 爱情',
    haveSeen: true
  },
  {
    name: '肖申克的救赎',
    image: 'https://pic4.zhimg.com/v2-d3e1540469fe1729de7ca5468fdac633_r.jpg',
    time: '1994 剧情 犯罪',
    haveSeen: true
  }
]
export default filmList
