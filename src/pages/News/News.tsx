import "./News.css";
import Navbar from "../../components/Navbar/Navbar";
import NewsCards from "./NewsCards/NewsCards";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const News = () => {
  return (
    <>
      <Navbar />
      <Banner img="/News/banner.jpg" />
      <NewsCards />
      <Footer />
    </>
  );
};

export default News;
