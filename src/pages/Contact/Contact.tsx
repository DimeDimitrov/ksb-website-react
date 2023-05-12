import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Location from "./Location/Location";
import Form from "./Form/Form";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Banner img="/Contact/banner.jpg" />
      <Location />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
