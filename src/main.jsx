import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/Prices.css";
import "/src/Home.css";
import '/src/PriceCalc.css'

import Home from "./pages/Home.jsx";
import Prices from "./pages/Prices.jsx";
import Calc from "./pages/Calc.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import References from "./pages/References.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/egynapos-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/references" element={<References />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
