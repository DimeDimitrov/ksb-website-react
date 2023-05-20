import "./Kadar.css";

const prev = () => {
  const container: any = document.querySelector(".profe-main");
  container.scrollLeft -= 1200;
};
const next = () => {
  const container: any = document.querySelector(".profe-main");
  container.scrollLeft += 1200;
};

const Kadar = () => {
  return (
    <>
      <div
        className="profe fadeinTop"
        id="administrativen"
        style={{ margin: "2rem" }}
      >
        <h3 style={{ padding: "1rem", fontSize: "2rem" }}>Директор</h3>
        <img src="/Professors/d lazov.webp" alt="" />
      </div>
      <div
        className="special fadeinTop"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          paddingTop: "10px",
        }}
      >
        <div className="profe">
          <h3>Психолог</h3>
          <img src="/Professors/m smilevska priholog.webp" alt="" />
        </div>
        <div className="profe">
          <h3>Педагог</h3>
          <img src="/Professors/missing.webp" alt="pedagog.webp" />
        </div>
        <div className="profe">
          <h3>Секретар</h3>
          <img src="/Professors/missing.webp" alt="sekretar.webp" />
        </div>
      </div>
      <div className="kadar section" data-category="kadar" id="kadar">
        <h2 id="kadar-dropdown-h2">Нашиот наставен кадар</h2>
      </div>
      <div className="kadar-div">
        <span className="prev" onClick={prev}>
          &#8249;
        </span>
        <div className="nav1 fadeinTop">
          <div className="profe-main">
            <div className="profe">
              <img src="/Professors/a ivanova.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/z kostadinovska.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/b arsov.webp" alt="" />
              <h3>Дипломиран Машински Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/b gokceva.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/c dojcinova.webp" alt="" />
              <h3>Професор по Македонски јазик</h3>
            </div>
            <div className="profe">
              <img src="/Professors/d angelkov.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/i ivanov.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/j gorgevik.webp" alt="" />
              <h3>Професор по Македонски јазик</h3>
            </div>
            <div className="profe">
              <img src="/Professors/k a velkova.webp" alt="" />
              <h3>Дипломиран Професор по Англиски јазик</h3>
            </div>
            <div className="profe">
              <img src="/Professors/l jovanov.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/m angelova.webp" alt="" />
              <h3>Професор по Физика</h3>
            </div>

            <div className="profe">
              <img src="/Professors/n kostova.webp" alt="" />
              <h3>Професор по Македонски јазик</h3>
            </div>
            <div className="profe">
              <img src="/Professors/n padikova.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/o d gjorceva.webp" alt="" />
              <h3>Професор по Математика</h3>
            </div>
            <div className="profe">
              <img src="/Professors/r gjorgijevska.webp" alt="" />
              <h3>Дипломиран Машински Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/s kuzmanova.webp" alt="" />
              <h3>Професор по Математика</h3>
            </div>
            <div className="profe">
              <img src="/Professors/s puskinov.webp" alt="" />
              <h3>Дипломиран Машински Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/t drenkova.webp" alt="" />
              <h3>Професор по Македонски јазик</h3>
            </div>
            <div className="profe">
              <img src="/Professors/t trajkova.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/todorka g bakeva.webp" alt="" />
              <h3>Професор по Англиски</h3>
            </div>
            <div className="profe">
              <img src="/Professors/v kostadinov.webp" alt="" />
              <h3>Дипломиран Електро Инженер</h3>
            </div>
            <div className="profe">
              <img src="/Professors/a grizev.webp" alt="a grizev.webp" />
              <h4 className="grizev">Александар грижев</h4>
              <h3>Дипломиран Електро Инженер</h3>
            </div>

            <div className="profe">
              <img src="/Professors/z smilevski.webp" alt="" />
              <h3>Професор по Музичко</h3>
            </div>
          </div>
        </div>
        <span className="next" onClick={next}>
          &#8250;
        </span>
      </div>
    </>
  );
};

export default Kadar;
