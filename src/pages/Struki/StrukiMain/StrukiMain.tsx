import "./StrukiMain.css";

const Struki = () => {
  return (
    <section className="struki" id="2">
      <h1>Струки</h1>
      <div id="secti"></div>
      <div className="row g-4">
        <div className="col-md-3">
          <div
            className="struki-col el0 reveal animated fadeinLeft"
            onClick={() => (window.location.href = "/struki/masinski")}
          >
            <div className="row-img">
              <img
                src="/Struki/masinska.webp"
                className="img-fluid"
                alt="Машинска струка"
              />
            </div>
            <h3>Машинска струка</h3>
            <ul>
              <li>
                <span>Машински Техничар за моторни возила</span>
              </li>
              <li>
                <span>Техничар за компјутерско управување</span>
              </li>
              <li>
                <span>Автомеханичар</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="struki-col el2 animated fadeinTop"
            onClick={() => (window.location.href = "/struki/elektro")}
          >
            <div className="row-img">
              <img
                src="/Struki/elektro.webp"
                className="img-fluid"
                alt="Електротехничка струка"
              />
            </div>
            <h3>Електротехничка струка</h3>
            <ul>
              <li>
                <span>
                  Електротехничар за компјутерска техника и автоматика
                </span>
              </li>
              <li>
                <span>Електротехничар енергетичар</span>
              </li>
              <li>
                <span>Техничар за индустриска мехатроника</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="struki-col el1 reveal animated fadeinRight"
            onClick={() => (window.location.href = "/struki/metalurski")}
          >
            <div className="row-img">
              <img
                src="/Struki/metalurska.webp"
                className="img-fluid"
                alt="Геолошко, рударски-металуршка струка"
              />
            </div>
            <h3>Геолошко, рударски-металуршка струка</h3>
            <ul>
              <li>
                <span>Металуршки техничар</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struki;
