export default function InfoCardPiece({
  mRoland,
  mRolandnumber,
  kBalazs,
  kBalazsnumber,
  email,
  irs,
  irsNumber,
  emaiL,
}) {
  return (
    <>
      <div className="col mb-3">
        <div className="infoCard">
          <div className="infoCard-body">
            <span className="infoCard-name">{mRoland}</span>
            <span className="infoCard-line">
              Tel:{" "}
              <a href={`tel:${mRolandnumber}`} className="infoCard-link">
                {mRolandnumber}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <div className="infoCard">
          <div className="infoCard-body">
            <span className="infoCard-name">{kBalazs}</span>
            <span className="infoCard-line">
              Tel:{" "}
              <a href={`tel:${kBalazsnumber}`} className="infoCard-link">
                {kBalazsnumber}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <div className="infoCard">
          <div className="infoCard-body">
            <span className="infoCard-line">
              {irs}{" "}
              <span className="infoCard-highlight">{irsNumber}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <div className="infoCard">
          <div className="infoCard-body">
            <span className="infoCard-line">
              {emaiL}{" "}
              <a href={`mailto:${email}`} className="infoCard-link">
                {email}
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <div className="infoCard">
          <div className="infoCard-body">
            <span className="infoCard-small">
              Kovács István egyéni vállalkozó
              <br />
              Debrecen, Piac u. 1-3, 4031
            </span>
          </div>
        </div>
      </div>
    </>
  );
}