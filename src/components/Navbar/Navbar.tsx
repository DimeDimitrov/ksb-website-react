import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="container no-gutters">
      <nav
        className={`navbar navbar-expand-lg py-4 navbar-dark ${
          isOpen ? "show" : ""
        }`}
      >
        <div className="containerNav">
          <div className="wrap-element">
            <div className="logo-lang fadeinLeft">
              <a href="/home" className="navbar-brand">
                <img src="/logo.webp" alt="Logo" />
              </a>
              <li className="flags">
                <div className="flag-container">
                  <div className="langSelect">
                    <img
                      className="flag"
                      src="/Flags/macedonianFlag.webp"
                      alt="Makedonski"
                      draggable="false"
                    />
                  </div>
                  <div className="langSelect">
                    <img
                      className="flag"
                      src="/Flags/englishFlag.webp"
                      alt="English"
                      draggable="false"
                    />
                  </div>
                  <div className="langSelect">
                    <img
                      className="flag"
                      src="/Flags/albanianFlag.webp"
                      alt="Albanski"
                      draggable="false"
                    />
                  </div>
                </div>
              </li>
            </div>
            <button
              className={`navbar-toggler md-auto hamburger-menu ${
                isOpen ? "active" : ""
              }`}
              type="button"
              onClick={isOpen ? closeMenu : toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`navmenu collapse navbar-collapse fadeinRight ${
                isOpen ? "show" : ""
              }`}
            >
              <ul className="navbar-nav ms-auto py-2 ">
                <li className="nav-item">
                  <a href="/home" className="nav-link">
                    Почетна
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/upisi" className="nav-link">
                    Уписи
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/news" className="nav-link">
                    Новости
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/gallery" className="nav-link">
                    Галерија
                  </a>
                </li>
                <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
                  <a
                    href="/struki"
                    className="nav-link dropdown-toggle"
                    role="button"
                  >
                    Струки
                  </a>
                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                    <a className="dropdown-item" href="/struki/masinski">
                      Машинска
                    </a>
                    <a className="dropdown-item" href="/struki/elektro">
                      Електротехничка
                    </a>
                    <a className="dropdown-item" href="/struki/metalurski">
                      Металуршка
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    За Нас
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Контакт
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
