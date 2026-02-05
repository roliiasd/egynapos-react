// src/analytics.js
import ReactGA from "react-ga4";

// GA4 inicializálás
export const initGA = () => {
  ReactGA.initialize("G-Y51M4FZ529");
};

// Oldallátogatás
export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Egyedi konverziós esemény
export const logConversion = () => {
  ReactGA.event({
    category: "ads",
    action: "conversion",
    label: "Ismer_s_1"
  });
};
