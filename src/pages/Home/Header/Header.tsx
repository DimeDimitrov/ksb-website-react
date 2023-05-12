import Navbar from "../../../components/Navbar/Navbar";

import "./Header.css";
import HeadContent from "./HeadContent/HeadContent";

const Header = () => {
  return (
    <section className="container">
      <Navbar />
      <HeadContent />
    </section>
  );
};

export default Header;
