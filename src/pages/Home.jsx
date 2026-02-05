import { useState } from "react";

// components
import Navbar from "../components/Navbar";
import JobButtons from "../components/JobButtons";
import HeroOverlay from "../components/HeroOverlay";

import PersonalInfos from "../components/PersonalInfos";
import Footer from "../components/Footer";
//

import { Link } from "react-router-dom";
import {
  faBorderStyle,
  faBrush,
  faCogs,
  faHammer,
  faIndustry,
  faLayerGroup,
  faPaintRoller,
  faScroll,
  faSprayCan,
  faToolbox,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

import { faTruckMonster } from "@fortawesome/free-solid-svg-icons/faTruckMonster";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
      </nav>
      <section className="py-5 jobButtons">
        <div className="content">
          <Link to={"/prices"} style={{ textDecoration: "none" }}>
            <p className="pulse" style={{ backgroundSize: "cover" }}>
              Árak
            </p>
          </Link>
        </div>
        <div className="container">
          <h1 className="text-center mb-4 text-light display-3 font-weight-bold">
            Szolgáltatások
          </h1>
          <div className="row row-cols-1 row-cols-md-2">
            {/* Job buttons */}
            {/* 1. */}
            <JobButtons
              side={"leftSide"}
              content={" Szobafestés"}
              icon={faPaintRoller}
              reference={"/references/#Szobafestés"}
            />
            {/* 2. */}
            <JobButtons
              side={"rightSide"}
              content={" Homlokzat festés"}
              icon={faBrush}
              reference={"/references/#Homlokzat Festés"}
            />
            {/* 3. */}
            <JobButtons
              side={"leftSide"}
              content={" Mázolas"}
              icon={faBrush}
              reference={"/references/#Mázolás"}
            />
            {/* 4. */}
            <JobButtons
              side={"rightSide"}
              content={" Tapétázás"}
              icon={faScroll}
              reference={"/references/#Tapétázás"}
            />
            {/* 5. */}
            <JobButtons
              side={"leftSide"}
              content={" Gipszkartonozás"}
              icon={faLayerGroup}
              reference={"/references/#Gipszkartonozás"}
            />
            {/* 6. */}
            <JobButtons
              side={"rightSide"}
              content={" Komplett felújítás"}
              icon={faHammer}
              reference={"/references/#Komplett felújítás"}
            />
            {/* 7. */}
            <JobButtons
              side={"leftSide"}
              content={" Lazúrozás"}
              icon={faSprayCan}
              reference={"/references/#Lazurozás"}
            />
            {/* 8. */}
            <JobButtons
              side={"rightSide"}
              content={" Kerítés Festés"}
              icon={faBorderStyle}
              reference={"/references/#Kerítés festés"}
            />
            {/* 9. */}
            <JobButtons
              side={"leftSide"}
              content={" Ipari Munkák"}
              icon={faIndustry}
              reference={"/references/#Ipari munkák"}
            />
            {/* 10. */}
            <JobButtons
              side={"rightSide"}
              content={" Gépi glettelés"}
              icon={faToolbox}
              reference={"/references/#Gépi festés"}
            />
            {/* 11. */}
            <JobButtons
              side={"leftSide"}
              content={" Gépi festés"}
              icon={faCogs}
              reference={"/references/#Gépi festés"}
            />
            {/* 12. */}
            <JobButtons
              side={"rightSide"}
              content={" Emelőkosaras autóhasználat"}
              icon={faTruckMonster}
              reference={"/references/#Emelőkosaras"}
            />
            {/* 13. */}
            <JobButtons
              side={"leftSide"}
              content={" Tűzvédelmi festés"}
              icon={faPaintRoller}
              reference={"/references/#Tűzvédelmi festés"}
            />
            {/* 14. */}
            <JobButtons
              side={"rightSide"}
              content={" Homlokzat tisztítás"}
              icon={faWater}
              reference={{
                pathname: "/references",
                hash: "#Homlokzat tisztítás",
              }}
            />
          </div>
        </div>
      </section>

      {/* herooverlay */}
      <section className="py-5 hero grid-bg">
        <HeroOverlay />
      </section>

      <section className="py-5 text-center" style={{ color: "white" }}>
        <PersonalInfos />
      </section>
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default Home;
