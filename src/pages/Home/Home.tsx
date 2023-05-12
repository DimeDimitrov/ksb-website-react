import "./Home.css";

import Footer from "../../components/Footer/Footer";
import Header from "./Header/Header";
import News from "./News/News";
import Struki from "./Struki/Struki";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Struki />
      <News />
      <Footer />
    </>
  );
};

export default Home;
