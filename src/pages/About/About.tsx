import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import History from "./History/History";
import Kadar from "./Kadar/Kadar";
import Mission from "./Mission/Mission";

const About = () => {
  return (
    <>
      <Banner img="/About/banner.webp" text="За нас">
        <Navbar />
      </Banner>
      <Kadar />
      <Mission />
      <History />
      <Footer />
    </>
  );
};

export default About;
