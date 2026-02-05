export default function InfoCardPiece({ mRoland, mRolandnumber, kBalazs, kBalazsnumber, email, irs, irsNumber, emaiL }) {
  return (
    <>
      <div className="col mb-3">
        <div className="infoCard text-center bg-dark text-white mb-4">
          <div className="infoCard-body">
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.75rem",
              }}
            >
              {mRoland}
            </span>
            <br />
            <span style={{ fontSize: "1.25rem" }}>
              Tel: <a href={`tel:${mRolandnumber}`}> {mRolandnumber} </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="infoCard text-center bg-dark text-white mb-4">
          <div className="infoCard-body">
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.75rem",
              }}
            >
              {kBalazs}
            </span>
            <br />
            <span style={{ fontSize: "1.25rem" }}>
              Tel: <a href={`tel:${kBalazsnumber}`}> {kBalazsnumber} </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="infoCard text-center bg-dark text-white mb-4">
          <div className="infoCard-body">
            <span
              style={{
                fontSize: "1.25rem"
              }}
            >
              {irs}

              <span style={{ color: '#459a55' }}>
                {irsNumber}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="col mb-3">
        <div className="infoCard text-center bg-dark text-white mb-4">
          <div className="infoCard-body">
            <span
              style={{
                fontSize: "1.25rem"
              }}
            >
              {emaiL}
            </span>
            <span style={{ fontSize: "1.25rem" }}>
              <a href={`mailto:${email}`}> {email} </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="infoCard text-center bg-dark text-white mb-4">
          <div className="infoCard-body">
            <span
              style={{
                fontSize: ".85rem"
              }}
            >
              Kovács István egyéni vállalkozó<br /> Debrecen, Piac u. 1-3, 4031
            </span>
          </div>
        </div>
      </div>

    </>
  );
}
