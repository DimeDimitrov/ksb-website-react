import "./Footer.css";

import "../../assets/animations.css";

const Footer = () => {
  return (
    <footer>
      <div className="Sponsors">
        <div className="main-div">
          <a className="nickel" href="https://www.euronickel.com/">
            <img src="/Sponsors/feni.png" />
          </a>
          <a className="igm" href="https://www.igmtrade.com/">
            <img src="./Sponsors/Igmtrade.jpg" />
          </a>
          <a href="https://www.draexlmaier.com/en/">
            <img src="/Sponsors/draexelmaier.png" />
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="about-head con">
          <h2>Нашиот Тим</h2>
          <div className="about-p">
            <ul>
              <li>Јован Митрев</li>
              <li>Димитар Димитров</li>
              <li>Стефан Панов</li>
              <li>Петар Стефанов</li>
            </ul>
          </div>
        </div>
        <div className="info con">
          <div className="info-link">
            <h2>Додатни Линкови</h2>
          </div>
          <div className="content-info">
            <span>
              <a href="https://www.facebook.com/people/%D0%9A%D0%B8%D1%80%D0%BE-%D0%A1%D0%BF%D0%B0%D0%BD%D1%9F%D0%BE%D0%B2-%D0%91%D1%80%D0%BA%D0%BE/pfbid02Q8mXiZUXkmtzV6Dfe7nf6vSTkd7TCaH5HXEfEjckdrTiWGp6ZZaYmdZ6JfS39R4Rl/">
                Facebook Страна
              </a>
            </span>
          </div>
          <div className="content-info">
            <span>
              <a href="https://www.youtube.com/watch?v=Z75FPljkRkA">
                YouTube Канал
              </a>
            </span>
          </div>
          <div className="content-info">
            <span>
              <a href="#">Други Линкови</a>
            </span>
          </div>
        </div>
        <div className="contact con">
          <div className="contact-head">
            <h2>Контакт</h2>
          </div>
          <div className="contact-content">
            <span>Директор: м-р Душко Лазов</span>
          </div>
          <div className="contact-content">
            <span>Е-маил: dssuksb@t.mk</span>
          </div>
          <div className="contact-content">
            <span>Адреса: Улица Шишка 29 – Кавадарци</span>
          </div>
          <div className="contact-content">
            <span>Телефонски број: 043-412-847</span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright © 2023 Team ViperXE</span>
      </div>
    </footer>
  );
};

export default Footer;
