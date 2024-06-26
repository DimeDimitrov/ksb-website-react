interface Post {
  title: string;
  image: string;
  date: string;
}

interface Posts {
  [key: number]: Post;
}

const posts: Posts = {
  1: {
    title: "СОУ КИРО СПАНЏОВ БРКО - ПАТРОНЕН ПРАЗНИК - ДЕН 1",
    image: "/News/1.webp",
    date: "29 Декември 2022",
  },
  2: {
    title: `СОУ "Киро Спанџов Брко" потпиша меморандум за соработка и изведување на практична настава на учениците со компанијата "Велком Трејд" од Кавадарци.`,
    image: "/News/2.webp",
    date: "3 Март 2023",
  },
  3: {
    title:
      "Пожар во СОУ „Киро Спанџов Брко“ во Кавадарци. Ова беше дел од сценариото за денешната показна вежба што се реализираше во нашето училиште.",
    image: "/News/3.webp",
    date: "17 Март 2023",
  },
  4: {
    title:
      'СОУ "Киро Спанџов-Брко" се гордее со своите ученици кои постигнуваат исклучително добри резултати на секое поле.',
    image: "/News/4.webp",
    date: "22 Март 2023",
  },
  5: {
    title:
      "ВАШАТА ИДНИНА, НАШ ФОКУС! Почитувани полуматуранти, се наоѓате на крстопат на Вашиот живот. ",
    image: "/News/5.webp",
    date: "25 Април 2023",
  },
  6: {
    title:
      "Предавање и едукација БЕЗБЕДНИ И СРЕЌНИ МАТУРСКИ ВЕЧЕРИ во СОУ„Киро Спанџов-Брко“",
    image: "/News/6.webp",
    date: "27 Април 2023",
  },
  7: {
    title:
      "По повод денот на планетата Земја беше реализирана еколошка акција во училишниот двор.",
    image: "/News/7.webp",
    date: "2 Мај 2023",
  },
  8: {
    title: "СОУ “Киро Спанџов-Брко - ВАШАТА ИДНИНА, НАШ ФОКУС",
    image: "/News/8.webp",
    date: "3 Мај 2023",
  },
  9: {
    title:
      "Оваа година на МАССУМ нашето училиште се претстави со три тима во три категории",
    image: "/News/9.webp",
    date: "8 Мај 2023",
  },
  10: {
    title: "Успешно изведени натпревари и оваа година од страна на учениците",
    image: "/News/10.webp",
    date: "9 Мај 2023",
  },
  11: {
    title:
      'СОУ "Киро Спанџов Брко" е вклучено како партнер во Еразмус + проект во соработка со компанијата Дрекслмаер и училишта и компании од Германија, Кипар и Романија.',
    image: "/News/11.webp",
    date: "11 Мај 2023",
  },
  12: {
    title:
      "Почитувани полуматуранти, СОУ “Киро Спанџов-Брко” се фокусира на иднината на своите ученици.",
    image: "/News/12.webp",
    date: "11 Мај 2023",
  },
  13: {
    title:
      "Учениците од СОУ„Киро Спанџов-Брко“ Кавадарци изминатите три месеци учествуваа во ЦКА-ПХВ програмата.",
    image: "/News/13.webp",
    date: "12 Мај 2023",
  },
  14: {
    title:
      "На ден 16.05.2023 година во Куманово се одржа Државен натпревар во огранизација на Федерација на училишен спорт на Македонија",
    image: "/News/14.webp",
    date: "17 Мај 2023",
  },
  15: {
    title: "Новата Web страна на Киро Спанџов Брко е готова!",
    image: "/News/15.webp",
    date: "20 Мај 2023",
  },
  16: {
    title: "Отоворен ден во Киро Спанџов Брко на 31 Мај! ",
    image: "/News/16.jpg",
    date: "29 Мај 2023",
  },
};

export default posts;
