import "./Home.css";

import Footer from "../../components/Footer/Footer";
import News from "./News/News";
import Struki from "./Struki/Struki";
import Header from "./Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Struki />
      <News />
      <Footer />
    </>
  );
};

export default Home;
