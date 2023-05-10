import "./News.css";
import Navbar from "../../components/Navbar/Navbar";
import NewsCards from "./NewsCards/NewsCards";
import Footer from "../../components/Footer/Footer";

const News = () => {
  return (
    <>
      <Navbar />
      <NewsCards />
      <Footer />
    </>
  );
};

export default News;
