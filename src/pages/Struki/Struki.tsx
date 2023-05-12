import "./Struki.css";
import Navbar from "../../components/Navbar/Navbar";
import StrukiMain from "./StrukiMain/StrukiMain";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const Struki = () => {
  return (
    <>
      <Navbar />
      <Banner img="/Struki/banner.jpg" text="Струки" />
      <StrukiMain />
      <Footer />
    </>
  );
};

export default Struki;
