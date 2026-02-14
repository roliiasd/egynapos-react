import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaintRoller,
  faTags,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "/src/logo.svg";

export default function Navbar({
  isOpen,
  toggleMenu,
  homePage,
  pricesPage,
  referencesPage,
  contactPage,
}) {
  return (
    <>
      <NavLink to={homePage} className="navbar-brand">
        <img src={logoImg} alt="Egynaposfestes logo" />
      </NavLink>

      <button
        className={`navbar-toggler ${isOpen ? "is-open" : ""}`}
        type="button"
        onClick={toggleMenu}
        aria-label="Menü"
        aria-expanded={isOpen}
      >
        <span className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={`navbar-menu ${isOpen ? "is-open" : ""}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink
              to={homePage}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              <FontAwesomeIcon icon={faPaintRoller} />
              <span>Főoldal</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={pricesPage}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              <FontAwesomeIcon icon={faTags} />
              <span>Árak</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={referencesPage}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              <FontAwesomeIcon icon={faImage} />
              <span>Referenciák</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={contactPage}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Kapcsolat</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}