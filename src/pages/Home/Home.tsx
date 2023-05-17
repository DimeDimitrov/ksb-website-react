import "./Home.css";

import Footer from "../../components/Footer/Footer";
import News from "./News/News";
import Struki from "./Struki/Struki";
import Header from "./Header/Header";
import Liner from "./Liner/Liner";
import Stories from "./About/About";
import Card from "./Card/Card";

const Home = () => {
  return (
    <>
      <Header />
      <Struki />
      <Liner />
      <News numPosts={3} />
      <Stories />
      <Card
        imageSrc="/News/1.jpg"
        title="Od KSB do Holywood"
        description="Od ksb stigna do holywood, wow!"
        story="Lorem ipsum dolor sit amet amongus Lorem ipsum dolor sit amet amongus Lorem ipsum dolor sit amet amongus "
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
