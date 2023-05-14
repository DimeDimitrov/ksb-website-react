import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Location from "./Location/Location";
import Form from "./Form/Form";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const Contact = () => {
  return (
    <>
      <Banner img="/Contact/banner.jpg" text="Контакт">
        <Navbar />
      </Banner>
      <Location />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
