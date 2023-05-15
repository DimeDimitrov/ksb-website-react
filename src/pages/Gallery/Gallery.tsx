import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Natprevari from "./Natprevari/Natprevari";
import Banner from "../../components/Banner/Banner";
import Prakticna from "./Prakticna/Prakticna";
import BackToTop from "../../components/BackToTop/BackToTop";
import Navigation from "./Navigation/Navigation";
import Eko from "./Eko/Eko";

const Gallery = () => {
  return (
    <>
      <Banner img="/Gallery/banner.jpg" text="Галерија">
        <Navbar />
      </Banner>
      <Navigation />
      <Natprevari />
      <Prakticna />
      <Eko />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Gallery;
