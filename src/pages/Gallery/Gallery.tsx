import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Natprevari from "./Natprevari/Natprevari";
import Banner from "../../components/Banner/Banner";
import Prakticna from "./Prakticna/Prakticna";
import BackToTop from "../../components/BackToTop/BackToTop";

const Gallery = () => {
  return (
    <>
      <Banner img="/Gallery/banner.jpg" text="Галерија">
        <Navbar />
      </Banner>
      <Natprevari />
      <Prakticna />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Gallery;
