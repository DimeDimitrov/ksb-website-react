import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import History from "./History/History";
import Kadar from "./Kadar/Kadar";
import Mission from "./Mission/Mission";
import SortButtons from "./SortButtons/SortButtons";

const About = () => {
  return (
    <>
      <Navbar />
      <SortButtons />
      <History />
      <Mission />
      <Kadar />
    </>
  );
};

export default About;
