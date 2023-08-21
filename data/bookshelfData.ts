interface BookType {
  name: string
  image: string
  url: string
}

const bookshelfList: Array<Array<BookType>> = [
  [
    {
      name: '查特莱夫人的情人',
      image: 'https://www2.jiumodiary.com/img_local_qcenglish/fb5629f110ed5327de49318208937eeb.jpg',
      url: 'https://www.book123.info/detail/9787544783965'
    },
    {
      name: '百年孤独',
      image: 'https://www.kunnu.com/images/2018/07/bainiangudu.jpg',
      url: 'https://www.book123.info/detail/9787544291170'
    },
    {
      name: '亲密关系',
      image: 'https://www.guishuji.com/d/file/xinlixue/4631e8e7d048268c03c143d52d78aebe.jpg',
      url: 'https://www.book123.info/detail/9787115390578'
    }
  ],
  [
    {
      name: '平凡的世界',
      image: 'https://www.lysxhsd.cn/repository/image/bb44d0d0-09d3-4bf1-a6dc-7a856265f284.jpg',
      url: 'https://www.book123.info/detail/9787530216781'
    },
    {
      name: '活着',
      image: 'https://file.book123.info/covers/9787506365437.jpg',
      url: 'https://www.book123.info/detail/9787506365437'
    }
  ]
]
export default bookshelfList
