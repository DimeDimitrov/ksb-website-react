import "./Home.css";

import Footer from "../../components/Footer/Footer";
import News from "./News/News";
import Struki from "./Struki/Struki";
import Header from "./Header/Header";
import Liner from "./Liner/Liner";
import Stories from "./Stories/Stories";

const Home = () => {
  return (
    <>
      <Header />
      <Struki />
      <Liner />
      <div className="zastita">
        <h2>Пожар и спасување</h2>
        <a href="/elaboratzapokaznavezba.pdf" target="_blank">
          Елаборат за изведба на показна вежба за заштита од пожар
        </a>
        <br />
        <a href="/planzazastitaispasuvanje.pdf" target="_blank">
          План за заштита и спасување од природни непогоди и други несреќи
        </a>
      </div>
      <News numPosts={3} />
      <br />
      <br />
      <Stories />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
