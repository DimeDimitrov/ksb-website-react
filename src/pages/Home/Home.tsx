import "./Home.css";

import Footer from "../../components/Footer/Footer";
import News from "./News/News";
import Struki from "./Struki/Struki";
import Header from "./Header/Header";
import Liner from "./Liner/Liner";
import Stories from './About/About'

const Home = () => {
  return (
    <>
      <Header />
      <Struki />
      <Liner />
      <News numPosts={3} />
      <Stories />
      <Footer />
    </>
  );
};

export default Home;
