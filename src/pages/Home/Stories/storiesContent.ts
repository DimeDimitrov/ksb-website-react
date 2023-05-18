interface Story {
  title: string;
  image: string;
  description: string;
  content: string
}

interface Props {
  [key: number]: Story;
}

const storiesContent: Props = {
  1: {
    title: "Title 1",
    image: "/News/1.jpg",
    description: "Desription 1",
    content: "Content 1 Content 1 Content 1 Content 1 "
  },
  2: {
    title: "Title 2",
    image: "/News/2.jpg",
    description: "Desription 1",
    content: "Content 1 Content 1 Content 1 Content 1 "
  },
  3: {
    title: "Title 3",
    image: "/News/3.jpg",
    description: "Desription 1",
    content: "Content 1 Content 1 Content 1 Content 1 "
  },
  4: {
    title: "Title 4",
    image: "/News/4.jpg",
    description: "Desription 1",
    content: "Content 1 Content 1 Content 1 Content 1 "
  },
  5: {
    title: "TITLE 5 HAHAHA",
    image: "/News/17.jpg",
    description: "Secription 5",
    content: "HAHAHAHAHAHAH"
  }
};

export default storiesContent