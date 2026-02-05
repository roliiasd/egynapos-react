import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, useLocation, Routes, Route } from "react-router-dom";
import { initGA, logPageView } from "../src/analytics";

import "bootstrap/dist/css/bootstrap.min.css";
import "/src/styles/Prices.css";
import "/src/styles/Home.css";
import "/src/styles/PriceCalc.css";

import Home from "./pages/Home.jsx";
import Prices from "./pages/Prices.jsx";
import Calc from "./pages/Calc.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import References from "./pages/References.jsx";
import Faq from './pages/Faq.jsx';

// --- GA-tracking wrapper komponens ---
function GAListener({ children }) {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return children;
}

// --- Inicializáljuk a Google Analytics-t ---
initGA();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <GAListener>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/references" element={<References />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </GAListener>
    </HashRouter>
  </StrictMode>
);