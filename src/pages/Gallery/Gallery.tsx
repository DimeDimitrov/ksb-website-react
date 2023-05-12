import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Natprevari from "./Natprevari/Natprevari";
import Banner from "../../components/Banner/Banner";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Natprevari />
      <Footer />
    </>
  );
};

export default Gallery;
