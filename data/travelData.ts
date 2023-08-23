interface TravelDataType {
  time: string;
  city: string;
  title: string;
  desc: string;
  img: string;
  path: string;
  type: 'md' | 'vue'
}

const travelData: TravelDataType[] = [
  {
    time: "2022年国庆",
    city: "江西萍乡武功山",
    title: '武功山',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221449040.jpg',
    path: '/travel/wugongshan',
    type: 'vue'
  },
  {
    time: "2023年2月11",
    city: "湖南凤凰县凤凰古城",
    title: '凤凰古城',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221504969.jpg',
    path: '/travel/fenghuang',
    type: 'md'
  },
  {
    time: "2023年5月",
    city: "云南丽江",
    title: '丽江古城',
    desc: "丽江古城是世界文化遗产",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221548289.jpg',
    path: '/travel/lijiang',
    type: 'md'
  },
  {
    time: "2023年5月",
    city: "虎跳峡",
    title: '虎跳峡',
    desc: "虎跳峡",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221549095.jpg',
    path: '/travel/hutiaoxia',
    type: 'md'
  },
  {
    title: "梅里雪山",
    time: "2023年5月",
    city: "梅里雪山",
    desc: "梅里雪山",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221550807.jpg',
    path: '/travel/meilixueshan',
    type: 'md'
  },
  {
    title: "雨崩",
    time: "2023年5月",
    city: "云南雨崩",
    desc: "雨崩",
    img: 'https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308221553730.jpg',
    path: '/travel/yubeng',
    type: 'vue'
  }
]
export default travelData