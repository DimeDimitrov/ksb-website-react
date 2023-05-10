import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg py-4 navbar-dark">
        <div className="container">
          <div className="logo-lang fadeinLeft">
            <a href="home" className="navbar-brand">
              <img src="/logo.png" alt="Logo" />
            </a>
            <li className="flags">
              <div className="flag-container">
                <div className="langSelect">
                  <img
                    className="flag"
                    src="/Flags/macedonianFlag.png"
                    alt="Makedonski"
                    draggable="false"
                  />
                </div>
                <div className="langSelect">
                  <img
                    className="flag"
                    src="/Flags/englishFlag.png"
                    alt="English"
                    draggable="false"
                  />
                </div>
                <div className="langSelect">
                  <img
                    className="flag"
                    src="/Flags/albanianFlag.png"
                    alt="Albanski"
                    draggable="false"
                  />
                </div>
              </div>
            </li>
          </div>
          <button
            className="navbar-toggler md-auto hamburger-menu "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navmenu collapse navbar-collapse fadeinRight">
            <ul className="navbar-nav ms-auto py-2 ">
              <li className="nav-item">
                <a href="home" className="nav-link">
                  Почетна
                </a>
              </li>
              <li className="nav-item">
                <a href="news" className="nav-link">
                  Новости
                </a>
              </li>
              <li className="nav-item">
                <a href="gallery" className="nav-link">
                  Галерија
                </a>
              </li>
              <li className="nav-item">
                <a href="struki" className="nav-link">
                  Струки
                </a>
              </li>
              <li className="nav-item">
                <a href="about" className="nav-link">
                  За Нас
                </a>
              </li>
              <li className="nav-item">
                <a href="contact" className="nav-link">
                  Контакт
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
