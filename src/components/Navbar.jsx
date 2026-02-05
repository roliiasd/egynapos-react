import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBars,
  faEnvelope,
  faPaintRoller,
  faTags,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import logoImg from "/src/logo.svg";
import { Link } from "react-router-dom";

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
      <Link to={homePage} className="navbar-brand">
        <img src={logoImg} alt="Egynaposfestes logo" />
      </Link>
      {/* hamburger menu button */}
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* navbar */}

      <div className={`collapse navbar-collapse ${isOpen}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href={homePage} className="nav-link">
              <FontAwesomeIcon icon={faPaintRoller} />
              Főoldal
            </a>
          </li>
          <li className="nav-item">
            <a href={pricesPage} className="nav-link">
              <FontAwesomeIcon icon={faTags} />
              Árak
            </a>
          </li>
          <li className="nav-item">
            <a href={referencesPage} className="nav-link ">
              <FontAwesomeIcon icon={faImage} />
              Referenciák
            </a>
          </li>
          <li className="nav-item">
            <a href={contactPage} className="nav-link ">
              <FontAwesomeIcon icon={faEnvelope} />
              Kapcsolat
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
