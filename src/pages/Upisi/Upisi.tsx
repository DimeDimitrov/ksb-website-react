import "./Upisi.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UpisiMain from "./UpisiMain/UpisiMain";
import Banner from "../../components/Banner/Banner";

const Upisi = () => {
  return (
    <>
      <Navbar />
      <Banner img="/Banners/struki.jpg" text="Уписи" />
      <UpisiMain />
      <Footer />
    </>
  );
};

export default Upisi;
