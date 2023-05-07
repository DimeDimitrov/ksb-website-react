import "./News.css";

const News = () => {
  return (
    <section className="news">
      <h1 id="news-title">Новости</h1>
      <div className="news-wrapper" id="secti1">
        <div className="news-left fadeinLeft animate">
          <div className="news-left-post news-post">
            <div className="news-left-img">
              <span>Најнова вест</span>
              <img src="/News/1.jpg" alt="" />
            </div>
            <div className="news-left-text">
              <h2>
                <b>
                  Учиниците од СОУ "Киро Спанџов-Брко" зедоа Второ место во
                  натпревар по џудо.
                </b>
              </h2>
            </div>
            <span className="date1">22.03.2023</span>
          </div>
          <div className="news-left-post1 news-left-hidden news-post">
            <div className="news-left-img">
              <span className="span1">Нова вест</span>
              <img className="img-el" src="/News/2.jpg" alt="" />
            </div>
            <div className="news-left-text1">
              <h2>
                Сирената алармираше за пожар во СОУ „Киро Спанџов Брко“ во
                Кавадарци
              </h2>
            </div>
            <div id="news"></div>
            <span className="date1">16.03.2023</span>
          </div>
          <div className="news-left-post1 news-left-hidden news-post">
            <div className="news-left-img">
              <span className="span1">Нова вест</span>
              <img className="img-el" src="/News/3.jpg" alt="" />
            </div>
            <div className="news-left-text1">
              <h2>
                СОУ "Киро Спанџов Брко" потпиша меморандум со компанијата
                "Велком Трејд"
              </h2>
            </div>
            <span className="date1">29.12.2023</span>
          </div>
        </div>
        <div className="news-right fadeinRight animiate">
          <ul>
            <li className="news-post news-y">
              <p>29.03.2022</p>{" "}
              <a href="news">
                Успешен почеток на второто полугодие од учебната 2022/23 година
              </a>
            </li>
            <li className="news-post news-y">
              <p>20.01.2022</p>{" "}
              <a href="news">
                Персонализираните картички наместо 150 денари, граѓаните со
                ставен минимум кредит од 300 денари
              </a>
            </li>
            <li className="news-post news-y">
              <p>03.01.2023</p>{" "}
              <a href="news">СОУ КИРО СПАНЏОВ БРКО ПАТРОНЕН ПРАЗНИК</a>
            </li>
            <li className="news-post news-y">
              <p>29.12.2022</p>{" "}
              <a href="news">
                ⚽️ ТУРНИР ВО МАЛ ФУДБАЛ ⚽️ - СОУ КИРО СПАНЏОВ БРКО
              </a>
            </li>
            <li className="news-post news-n">
              <p>22.12.2022</p>{" "}
              <a href="news">
                Победници во сектор енергија. Иднината е сега со СОУ Киро
                Спанџов-Брко.
              </a>
            </li>
            <li className="news-post news-y">
              <p>16.12.2022</p>{" "}
              <a href="news">
                СОУ „Киро Спанџов Брко“ беше домаќин на настан за вмрежување
              </a>
            </li>
            <li className="news-post news-n">
              <p>07.12.2022</p>{" "}
              <a href="news">
                Топло добредојде на учениците и професорите од Шведска
              </a>
            </li>
            <li className="news-post news-n">
              <p>06.12.2022</p>{" "}
              <a href="news">
                МВР: Сите дојави за бомби во кавадаречките училишта се лажни
              </a>
            </li>
            <li className="news-post news-n">
              <p>01.12.2022</p>{" "}
              <a href="news">
                Во Скопје се оддржуваа меѓународнате манифестации МАКИНОВА и
                ЕКОНОВА.
              </a>
            </li>
            <li className="news-post news-n">
              <p>31.11.2022</p>{" "}
              <a href="news">Во училиштето се одржа едукативно предавање</a>
            </li>
          </ul>
          <h3>
            {" "}
            <a href="news" className="all">
              Сите новости <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default News;
