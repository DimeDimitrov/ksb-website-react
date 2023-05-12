import Navbar from "../../../components/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";

import "./Header.css";
import HeadContent from "./HeadContent/HeadContent";

const Header = () => {
  return (
    <section className="container">
      <Navbar />
      <HomeBanner />
      <HeadContent />
    </section>
  );
};

export default Header;
