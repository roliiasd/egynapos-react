import { useState, useEffect } from "react";

import { logConversion } from "../analytics";
import Navbar from "../components/Navbar";
import InfoCardPiece from "../components/InfoCardPiece";
import ContactUsFooter from "../components/ContactUsFooter";
import '/src/styles/ContactUs.css'
export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Csak az oldal betöltésekor küldjük a konverziót
    logConversion();
  }, []);
  return (
    <>
      <div className="navbar navbar-expand-lg">
        <div className="container">
          <Navbar
            homePage={"/"}
            pricesPage={"/prices"}
            contactPage={"/contactus"}
            referencesPage={"/references"}
            isOpen={isOpen ? "show" : ""}
            toggleMenu={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <section className="py-5 contactSection">
        <div className="container">
          <h1 className="text-center text-white mb-4">Kapcsolat</h1>

          <InfoCardPiece
            mRoland={'Mészáros Roland'}
            mRolandnumber={'+3630-958-3660'}
            kBalazs={'Kovács Balázs'}
            kBalazsnumber={'+3630-403-4134'}
            irs={'Adószám: '}
            irsNumber={'71675378-1-29'}
            emaiL={'E-mail: '}
            email={'egynaposfestes@gmail.com'}
          />

        </div>
      </section>
      <ContactUsFooter />
    </>
  );
}
