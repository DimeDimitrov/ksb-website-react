import "./Home.css";

import Footer from "../../components/Footer/Footer";
import Header from "./Header/Header";
import News from "./News/News";
import Struki from "./Struki/Struki";
import HomeBanner from "./Header/HomeBanner/HomeBanner"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Header />
      <Struki />
      <News />
      <Footer />
    </>
  );
};

export default Home;
