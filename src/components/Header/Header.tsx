import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import "./Header.css"

const Header = () => {
  return (
    <section className="container">
      <Navbar />
      <Banner />
    </section>
  );
};

export default Header;
