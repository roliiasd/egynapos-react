import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobButtons({side, icon, content, reference }) {
  return (
    <div className="col mb-4">
      <div className={`card text-center text-white mb-4 ${side}`}>
        <Link to={reference} style={{ textDecoration: "none" }}>
          <div className={`card-body ${side}`}>
            <h5 className="card-title">
              <FontAwesomeIcon icon={icon} />
              {content}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
