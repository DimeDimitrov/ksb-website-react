import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Matura.css";
import MaturaMain from "./MaturaMain/MaturaMain";

const Matura = () => {
  return (
    <>
      <Banner img="/Banners/main.webp" text="Матура">
        <Navbar />
      </Banner>

      <MaturaMain />
      <Footer />
    </>
  );
};

export default Matura;
