import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import History from "./History/History";
import Kadar from "./Kadar/Kadar";
import Mission from "./Mission/Mission";
import SortButtons from "./SortButtons/SortButtons";

const About = () => {
  return (
    <>
      <Banner img="/About/banner.jpg" text="За нас">
        <Navbar />
      </Banner>
      <SortButtons />
      <History />
      <Mission />
      <Kadar />
      <Footer />
    </>
  );
};

export default About;
