import "./Gallery.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Natprevari from "./Natprevari/Natprevari";
import Banner from "../../components/Banner/Banner";
import Prakticna from "./Prakticna/Prakticna";
import Navigation from "./Navigation/Navigation";
import Eko from "./Eko/Eko";

import { lazy } from "react";
const BackToTop = lazy(() => import("../../components/BackToTop/BackToTop"));

const Gallery = () => {
  return (
    <>
      <Banner img="/Gallery/banner.webp" text="Галерија">
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
