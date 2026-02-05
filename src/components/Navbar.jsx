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
            <Link to={homePage} className="nav-link">
              <FontAwesomeIcon icon={faPaintRoller} />
              Főoldal
            </Link>
          </li>
          <li className="nav-item">
            <Link to={pricesPage} className="nav-link">
              <FontAwesomeIcon icon={faTags} />
              Árak
            </Link>
          </li>
          <li className="nav-item">
            <Link to={referencesPage} className="nav-link ">
              <FontAwesomeIcon icon={faImage} />
              Referenciák
            </Link>
          </li>
          <li className="nav-item">
            <Link to={contactPage} className="nav-link ">
              <FontAwesomeIcon icon={faEnvelope} />
              Kapcsolat
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
