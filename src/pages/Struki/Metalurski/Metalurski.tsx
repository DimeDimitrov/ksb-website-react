
import './Metalurski.css'

const Metalurski = () => {
  return (
    <div className="struka fadeinTop">
          <div className="metalurgija" id="struka" data-struka="Metalurgija">
            <div className="meta-img">
              <img
                src="Struki/metalurska.jpg"
                alt="Metalurgija"
                draggable="false"
              />
            </div>
            <h2>Геолошко, рударски-металуршка струка</h2>
          </div>
          <div className="sub-struki" data-struka="Metalurgija">
            <div className="sub-struka">
              <h4>Металуршки техничар</h4>
              <span id="predmeti" data-subStr="Metalurgija">
                Предемети
              </span>
              <div className="predemti" data-subStr="Metalurgija">
                <ul>
                  <h5>Прва година:</h5>
                  <br />
                  <li>Македонски јазик и литература</li>
                  <li>Англиски јазик</li>
                  <li>Математика</li>
                  <li>Спорт и спортски активности</li>
                  <li>
                    Современи технологии на економските сектори на пазарот на
                    труд
                  </li>
                  <li>Заштита на животна и работна средина</li>
                  <li>Техничка комуникација</li>
                  <li>Минералогија</li>
                  <li>Заштита на животна и работна средина</li>
                  <li>Техничка комуникација</li>
                  <li>Основи на геологија, рударство и металургијата</li>
                </ul>
                <br />
                <ul>
                  <h5>Втора година:</h5>
                  <br />
                  <li>Македонски јазик и литература</li>
                  <li>Математика</li>
                  <li>Историја</li>
                  <li>Англиски јазик</li>
                  <li>Спорт и спортски активности</li>
                  <li>Хемија</li>
                  <li>Металуршка подготовка</li>
                  <li>Машинство</li>
                  <li>Металуршки печки</li>
                  <li>Топотна техника</li>
                  <li>Пирометалуршко добивање на метали и легури</li>
                  <li>Физичка металургија</li>
                  <li>Класен час</li>
                  <li>Феријална пракса</li>
                </ul>
                <br />
                <ul>
                  <h5>Трета година:</h5>
                  <br />
                  <li>Добивање на благородни метали</li>
                  <li>Добивање на прашкасти материјалии</li>
                  <li>Хидрометалуршко добивање на метали</li>
                  <li>Леење на благородни метали</li>
                  <li>Леење на железо и челик</li>
                  <li>Машини и уредии</li>
                  <li>Пирометалуршко добивање на метали и легури</li>
                  <li>Преработка со пластична деформација</li>
                  <li>Заварување на металите</li>
                  <li>Учење преку работа</li>
                </ul>
                <br />
                <ul>
                  <h5>Четврта година:</h5>
                  <br />
                  <li>Добивање на ретки метали</li>
                  <li>Електрометалуршко добивање на метали</li>
                  <li>Испитување на металите</li>
                  <li>Корозија и заштита – изборен</li>
                  <li>Леење на обоени метали</li>
                  <li>Преработка со пластична деформација</li>
                  <li>Преработка со пластична деформација – изборен</li>
                  <li>Термичка обработка</li>
                  <li>Учење преку работа кај работодавач</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Metalurski