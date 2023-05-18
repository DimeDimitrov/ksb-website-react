import "./Home.css";

import Footer from "../../components/Footer/Footer";
import News from "./News/News";
import Struki from "./Struki/Struki";
import Header from "./Header/Header";
import Liner from "./Liner/Liner";
import Stories from './Stories/Stories'

const Home = () => {
  return (
    <>
      <Header />
      <Struki />
      <Liner />
      <News numPosts={3} />
      <br /><br />
      <Stories />
      <br /><br />
      <Footer />
    </>
  );
};

export default Home;
