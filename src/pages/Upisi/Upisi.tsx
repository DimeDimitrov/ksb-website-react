import "./Upisi.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UpisiMain from "./UpisiMain/UpisiMain";
import Banner from "../../components/Banner/Banner";

const Upisi = () => {
  return (
    <>
      <Banner img="/Banners/struki.jpg" text="Уписи">
        <Navbar />
      </Banner>
      <UpisiMain />
      <Footer />
    </>
  );
};

export default Upisi;
