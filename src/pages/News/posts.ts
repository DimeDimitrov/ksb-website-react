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
    title: "Decata sega imaat prevoz",
    image: "/News/3.jpg",
    daysAgo: 20,
  },
  2: {
    title: "Sirenata alarmirase vo KSB",
    image: "/News/2.jpg",
    daysAgo: 20,
  },
  3: {
    title: "Najdobriot dzudist na 2023",
    image: "/News/1.jpg",
    daysAgo: 20,
  },
};

export default posts