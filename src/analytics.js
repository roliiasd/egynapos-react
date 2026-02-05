import ReactGA from "react-ga4";

export const initGA = () => ReactGA.initialize("G-Y51M4FZ529");

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Egyedi konverzió (ContactUs)
export const logConversion = () => {
  ReactGA.event({
    category: "ads",
    action: "conversion",
    label: "Ismer_s_1"
  });
};