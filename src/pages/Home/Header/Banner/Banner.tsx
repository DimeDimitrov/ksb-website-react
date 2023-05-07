import "./Banner.css";

let googleMapsLink =
  "https://www.google.com/maps/place/Technical+high+school+%E2%80%9EKiro+Spand%C5%BEov+-+Brko%E2%80%9C/@41.4418811,22.0202293,415m/data=!3m1!1e3!4m6!3m5!1s0x1356650b903daca7:0xabf6272b41d0f0cf!8m2!3d41.4414329!4d22.0199069!16s%2Fg%2F1thjq4kd";

const Banner = () => {
  return (
    <div className="homepage">
      <h1 className="fadeinLeft">
        Добредојдовте во Киро Спанџов-Брко Кавадарци
      </h1>
      <p className="fadeinRight">
        Современо училиште во кое се застапени електротехничката и машинската
        струка
        <br />
        со профили од три и четиригодишно траење на образованието.
      </p>
      <a href={googleMapsLink} target="_blank" className="map-btn fadeinTop">
        Отвори на Google Maps
      </a>
      <section id="section07" className="demo">
        <a href="#secti">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </section>
    </div>
  );
};

export default Banner;
