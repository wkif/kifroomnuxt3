interface BookType {
  name: string
  image: string
  url: string
}

const bookshelfList: Array<Array<BookType>> = [
  [
    {
      name: '查特莱夫人的情人',
      image: 'https://file.book123.info/covers/9787544783965.jpg',
      url: 'https://www.book123.info/detail/9787544783965'
    },
    {
      name: '百年孤独',
      image: 'https://www.kunnu.com/images/2018/07/bainiangudu.jpg',
      url: 'https://www.book123.info/detail/9787544291170'
    },
    {
      name: '亲密关系',
      image: 'https://file.book123.info/covers/9787115390578.jpg',
      url: 'https://www.book123.info/detail/9787115390578'
    }
  ],
  [
    {
      name: '平凡的世界',
      image: 'https://file.book123.info/covers/9787530216781.jpg',
      url: 'https://www.book123.info/detail/9787530216781'
    },
    {
      name: '你不知道的JavaScript',
      image: 'https://file.book123.info/covers/9787115385734.jpg',
      url: 'https://www.book123.info/detail/9787115385734'
    },
    {
      name: '活着',
      image: 'https://file.book123.info/covers/9787506365437.jpg',
      url: 'https://www.book123.info/detail/9787506365437'
    }
  ]
]
export default bookshelfList
