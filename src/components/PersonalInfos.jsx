import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PersonalInfos() {
  return (
    <div className="infoContainer">
      <h2 style={{ color: "white", fontWeight: "bold" }}>Kovács István</h2>
      <p>
        egyéni vállalkozó
        <br />
        <span>Debrecen, Piac u. 1-3, 4031</span>
        <br />
        <span style={{ fontSize: "1.15rem" }}>
          Adószám:{" "}
          <span style={{ color: "#459a55" }}>
            <tt>71675378-1-29</tt>
          </span>
          <br />
        </span>
        <span style={{ color: "white", fontWeight: "bold" }}>
          Kovács Balázs
        </span>
        Tel:{" "}
        <a href="tel:+3630-403-4134">
          <tt >+3630-403-4134</tt>
        </a>
        <br />
        <span style={{ color: "white", fontWeight: "bold" }}>
          <tt>Mészáros Roland</tt>
        </span>
        Tel:{" "}
        <a href="+3630-958-3660">
          <tt >+3630-958-3660</tt>
        </a>
        <br />
        E-mail:{" "}
        <a href="mailto:egynaposfestes@gmail.com">
          <tt >egynaposfestes@gmail.com</tt>
        </a>
      </p>
      <div className="social-icons">
        <div className="social-icons">
          <a href="https://www.facebook.com/Egynaposfestes/" target="_blank">
            <FontAwesomeIcon style={{ fontSize: '3.5rem', marginRight: '50px'}} icon={faFacebook} />
          </a>
          <a href="https://www.tiktok.com/@egynaposfestes.hu">
            <FontAwesomeIcon style={{ fontSize: '3.5rem'}}  icon={faTiktok} />
          </a>
        </div>
      </div>
    </div>
  );
}
