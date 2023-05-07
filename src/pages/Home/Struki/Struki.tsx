import "./Struki.css";

const Struki = () => {
  return (
    <section className="struki" id="2">
      <h1>Струки</h1>
      <div id="secti"></div>
      <div className="row">
        <div className="row-el reveal animated fadeinLeft">
          <div className="struki-col el0">
            <div className="row-img">
              <img src="/Struki/masinska.jpg" />
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
        <div className="row-el animated fadeinTop">
          <div className="struki-col el2">
            <div className="row-img">
              <img src="/Struki/elektro.jpg" />
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
        <div className="row-el reveal animated fadeinRight">
          <div className="struki-col el1">
            <div className="row-img">
              <img src="/Struki/metalurska.jpg" />
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
      <div id="row"></div>
      <section id="section08" className="demo">
        <a href="#secti1">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </section>
    </section>
  );
};

export default Struki;
