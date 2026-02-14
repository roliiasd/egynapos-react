import { Link } from "react-router-dom";
import ASZFModal from "./ASZFModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faImage } from "@fortawesome/free-regular-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {




  return (
    <footer>
      <ul
        className="list-unstyled"
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "10px",
        }}
      >
        <li>
          <Link to={"/references"}>
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faImage} />
          </Link>
        </li>
        <li>
          <Link to={"/contactus"}>
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faEnvelope} />
          </Link>
        </li>
        <li>
          <Link to={"/prices"}>

          </Link>
        </li>
        <li>
          <ASZFModal
            content={'Adatvédelmi szabályzat'}
          />
        </li>

      </ul>
      <tt>
        <p>&copy; 2024 EgyNaposFestés. Minden jog fenntartva.</p>
        <p style={{ fontSize: "8pt" }}>
          Logók készítője:
          <a href="https://www.freepik.com" style={{ fontSize: "8pt" }}>
            <span> Designed by BiZkettE1 / Freepik</span>
          </a>
        </p>
        <p style={{ fontSize: ".85rem" }}>
          Weboldalt tervezte:
          <Link to={"/donateforthisproudaiuserdeveloper"}>
            <span> Kovács Roland</span>
          </Link>
        </p>
      </tt>
    </footer>
  );
}
