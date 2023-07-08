interface LinkType {
  name: string
  url: string
  img: string
  desc: string
}

const linkData: {
  linkList: LinkType[],
  myLink: LinkType,
} = {
  linkList: [
    {
      name: 'kifroom',
      url: 'https://www.kifroom.icu',
      img: 'https://kifimg.oss-cn-beijing.aliyuncs.com/imgforteachingdemo/20201127203438.png',
      desc: 'kifroom',
    },
    {
      name: 'Ylarod',
      url: 'https://xtuly.cn/',
      img: 'http://q1.qlogo.cn/g?b=qq&nk=770848871&s=640',
      desc: '一个希望成为草莓宇宙的人',
    },
    {
      name: 'ASC_8384',
      url: 'https://xtuly.cn/',
      img: 'https://avatars.githubusercontent.com/u/29878345?v=4',
      desc: '心中无一物，何处惹尘埃。',
    },
    {
      name: 'Lete乐特',
      url: 'https://blog.imlete.cn',
      img: 'https://www.imlete.cn/img/avatar.png',
      desc: '人生只有一次，大胆的生活！！',
    },
    {
      name: 'MiChong的🏡',
      url: 'https://www.buildworld.cn/',
      img: 'https://www.buildworld.cn/img/header.jpg',
      desc: 'MiChong',
    },
    {
      name: '十玖八柒',
      url: 'https://ahzoo.cn/',
      img: 'https://ahzoo.cn/img/avatar.jpg',
      desc: '每天进步多一点',
    },
  ],
  myLink: {
    name: '',
    url: '',
    img: '',
    desc: '',
  },
}
export default linkData