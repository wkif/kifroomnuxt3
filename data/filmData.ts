// https://www.themoviedb.org/

interface FilmType {
  name: string
  image: string
  time: string
  haveSeen: boolean
}
const filmList: FilmType[] = [
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
  },
  {
    name: '当幸福来敲门',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/nKOQiWjhv6LXXSR3PiIab3LrKtU.jpg',
    time: '2006 剧情 传记',
    haveSeen: true
  },
  {
    name: '我不是药神',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xNPeL9cvTCCAwlAwq7Vdq9HNJd.jpg',
    time: '2018 剧情 喜剧',
    haveSeen: true
  },
  {
    name: '平凡的世界',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/457ZtBrEFY6NnJz7evXUOTth0Ws.jpg',
    time: '2015 剧情',
    haveSeen: true
  },
  {
    name: '白鹿原',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sM2thynLt65tk8FKdBaCqOHtypj.jpg',
    time: '2012 剧情',
    haveSeen: true
  },
  {
    name: '三国',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/nOvohp6CvEpHbSPiDg9q8ZsEMh9.jpg',
    time: '2008 剧情 历史',
    haveSeen: true
  },
  {
    name: '大秦帝国',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cb263Bo6Mh5Pz3Q8qTQaUJaD2mh.jpg',
    time: '2020 剧情 历史',
    haveSeen: true
  },
  {
    name: '行尸走肉',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tCQ32pH7qAgxhhFohykWMOYux1E.jpg',
    time: '2010 剧情 恐怖',
    haveSeen: true
  },
  {
    name: '杀人回忆',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2NArMoObkAbnIPvqlHC3gRGsfBb.jpg',
    time: '2003 剧情 悬疑',
    haveSeen: true
  },
  {
    name: '看见恶魔',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ylqOWMU3nyZqg8hjJBG4EPdsGSk.jpg',
    time: '2019 剧情 悬疑',
    haveSeen: true
  },
  {
    name: '华尔街之狼',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
    time: '2013 剧情 犯罪',
    haveSeen: true
  },
  {
    name: "绿皮书",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg",
    time: "2018 剧情 喜剧",
    haveSeen: true
  },
  {
    name: "我家买了动物园",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uUVCkF3Bdfd9MVoK0uwdEaKnntw.jpg",
    time: "2017 喜剧",
    haveSeen: true
  },
  {
    name: "恶人传",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/fI6X3Hd8KvtAuOKVdmxckdNzrx.jpg",
    time: "2018 剧情 动作",
    haveSeen: true
  },
  {
    name: "罪恶都市",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6YOrNBdoXvT8aC5VPLkkN6t5z0V.jpg",
    time: "2019 剧情 动作",
    haveSeen: true
  },
  {
    name: "破产姐妹",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/u04AvxFIDgL9JSd9xoVNK3BoBEd.jpg",
    time: "2011 喜剧",
    haveSeen: true
  },
  {
    name: "爱情与灵药",
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mcSQa6hyBY3kLj0Eaey2K1Ev852.jpg",
    time: "2010 剧情",
    haveSeen: true
  },
  {
    name: '花束みたいな恋をした',
    image: 'https://picx.zhimg.com/v2-bc6a4fcf8c1ecce676c9076ca7a4afaf_r.jpg',
    time: '2021 剧情 爱情',
    haveSeen: true
  },
  {
    name: '只有芸知道',
    image: 'https://pic4.zhimg.com/v2-9ebb05f37457045099946f4ff614aee7_r.jpg',
    time: '2019 剧情 爱情',
    haveSeen: false
  },
  {
    name: '纽约的一个雨天',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/3C6hamStn5HHTNmGmXmmGKHFWhT.jpg',
    time: '2019 剧情 爱情',
    haveSeen: false
  },
  {
    name: '海边的曼彻斯特',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wj2nLa0vfS0SLu2vJ6ABTRhMrok.jpg',
    time: '2016 剧情',
    haveSeen: false
  },
  {
    name: '达拉斯买家俱乐部',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jHwASc8hBtdfRGUmxS6pq5mHiyN.jpg',
    time: '2013 剧情',
    haveSeen: false
  },
  {
    name: '丘奇先生',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/y6jpd3c1UFoouBmIVWZMCGVyQmS.jpg',
    time: '2017 剧情',
    haveSeen: false
  },
  {
    name: '心灵捕手',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/bpV8wn48s82au37QyUJ51S7X2Vf.jpg',
    time: '2002 剧情',
    haveSeen: false
  },
  {
    name: '遗愿清单',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lVrUhaURUHStrl3mr15zkKplavB.jpg',
    time: '2007 剧情',
    haveSeen: false
  },
  {
    name: '一个叫欧维的男人决定去死',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yMCHeGA9OU2JS8s3P1JDdozYAAM.jpg',
    time: '2015 剧情',
    haveSeen: false
  },
  {
    name: '幸福终点站',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/zywtNiaZ9r7azrcNdl2j0jOgrkw.jpg',
    time: '2006 剧情',
    haveSeen: false
  },
  {
    name: '闻香识女人',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/fa03pD2qYmms4ZMgAv7PMqfFiGO.jpg',
    time: '1992 剧情',
    haveSeen: false
  },
  {
    name: '海蒂',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jbEbL1gl8VQBAX43kcPCMfBZum7.jpg',
    time: '2015 剧情',
    haveSeen: false
  },
  {
    name: '大象席地而坐',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vAp1u1TVufGRzmNsqtVuZhdHUFY.jpg',
    time: '2018 剧情',
    haveSeen: false
  },
  {
    name: '大鱼',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/bLqUd0tBvKezDr9MEla7k34i3rp.jpg',
    time: '2003 剧情',
    haveSeen: false
  },
  {
    name: '时空恋旅人',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/5ZoFGrFCKP0QrcfVwOIHiAwunBg.jpg',
    time: '2013 剧情',
    haveSeen: false
  },
  {
    name: '爱你，罗茜',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/txDX7lBx8bBhF7dRCEfDYmAmdnk.jpg',
    time: '2018 剧情',
    haveSeen: false
  },
  {
    name: '遇见你之前',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg',
    time: '2016 剧情',
    haveSeen: false
  },
  // 爱乐之城
  {
    name: '爱乐之城',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg',
    time: '2016 剧情',
    haveSeen: false
  },
  // 两小无猜
  {
    name: '两小无猜',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pkDBwOWUjIE1hycR4epPGgfIX4.jpg',
    time: '2018 剧情',
    haveSeen: false
  },
  // 血色清晨
  {
    name: '血色清晨',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8I3fSyy9ms6j6gcdJtLUD4PelyK.jpg',
    time: '2017 剧情',
    haveSeen: false
  },
  // 何以为家
  {
    name: '何以为家',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1p6cMqrxwLjTHmruMCWfpbTAxvt.jpg',
    time: '2018 剧情',
    haveSeen: false
  },
  // 我是山姆
  {
    name: '我是山姆',
    image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mOsg2l9zq315ouw55rbNATSwgU1.jpg',
    time: '2001 剧情',
    haveSeen: false
  }
]
export default filmList
