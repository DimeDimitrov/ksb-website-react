import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Stories.css";
import StoriesMain from "./StoriesMain/StoriesMain";

const Stories = () => {
  return (
    <>
      <Banner img="/Banners/main.webp" text="Успешни приказни">
        <Navbar />
      </Banner>
      <StoriesMain />
      <Footer />
    </>
  );
};

export default Stories;
