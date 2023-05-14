interface Post {
  title: string;
  image: string;
  daysAgo: number;
}

interface Posts {
  [key: number]: Post;
}

const posts: Posts = {
  1: {
    title: "Post 1",
    image: "/News/3.jpg",
    daysAgo: 20,
  },
  2: {
    title: "Post 2",
    image: "/News/3.jpg",
    daysAgo: 20,
  },
  3: {
    title: "Post 3",
    image: "/News/3.jpg",
    daysAgo: 20,
  },
  4: {
    title: 'Post 4',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  5: {
    title: 'Post 5',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  6: {
    title: 'Post 6',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  7: {
    title: 'Post 7',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  8: {
    title: 'Post 8',
    image: "/News/33.jpg",
    daysAgo: 70,
  },
  9: {
    title: 'Post 9',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  10: {
    title: 'Post 10',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  11: {
    title: 'Post 11',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  12: {
    title: 'Post 12',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  13: {
    title: 'Post 13',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  14: {
    title: 'Post 14',
    image: "/News/3.jpg",
    daysAgo: 70,
  },
  15: {
    title: 'Оваа учебна 2023/24 година ги отвараме вратите на нашето училиште за учениците заинтересирани за следните струки и профили.',
    image: "/News/15.png",
    daysAgo: 10,
  },
  16: {
    title: 'Оваа година на МАССУМ нашето училиште се претстави со три тима во три категории и тоа: изработка на WEB страна, најдобра фотографија и најдобар штанд. ',
    image: "/News/16.jpg",
    daysAgo: 6,
  },
  17: {
    title: 'Успешно изведени натпревари и оваа година од страна на учениците',
    image: "/News/17.jpg",
    daysAgo: 4,
  },
  18: {
    title: 'СОУ "Киро Спанџов Брко" е вклучено како партнер во Еразмус + проект во соработка со компанијата Дрекслмаер и училишта и компании од Германија, Кипар и Романија',
    image: "/News/18.png",
    daysAgo: 3,
  },
  19: {
    title: 'ВАШАТА ИДНИНА, НАШ ФОКУС',
    image: "/News/19.png",
    daysAgo: 2,
  },
  20: {
    title: 'Учениците од СОУ„Киро Спанџов-Брко“ Кавадарци изминатите три месеци учествуваа во ЦКА-ПХВ програмата.',
    image: "/News/20.jpg",
    daysAgo: 1,
  },
};

export default posts