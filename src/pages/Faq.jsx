import { useState, useEffect } from "react";
import "/src/styles/Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/roliiasd/json-files/refs/heads/faq/faq.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const withOpen = data.map((item) => ({
          ...item,
          open: false,
        }));
        setFaqs(withOpen);
      })
      .catch((err) => console.error("hiba a faq betoltesenel"));
  }, []);
  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };
  return (
    <>
      <div id="faqHeader">
      <Link to={"/"} >
          <Btn
            content={"Vissza a főoldalra"}
            btnClass={"homeBtn"}
            btnMargin={''}
          />
        </Link>
        <h1>
          <strong>GYIK</strong>
        </h1>
      </div>
      <div className="faq-layout">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id ?? index} className="faq-row">
              <div
                className={`faq-list-item ${faq.open ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <FontAwesomeIcon icon={faPlus} className="faq-icon" />
              </div>

              {/* Mobil válasz: csak mobilon látszik */}
              {faq.open && (
                <div className="faq-mobile-answer mobile-only">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop válasz panel: csak desktopon látszik */}
        <div className="faq-content desktop-only">
          {faqs.map(
            (faq, index) =>
              faq.open && (
                <div key={faq.id ?? index}>
                  <h2>{faq.question}</h2>
                  <p>{faq.answer}</p>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default Faq;
