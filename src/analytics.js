// analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  const trackingId = "G-V0TXK7XRK5";  // Remplace avec ton ID de mesure GA4
  ReactGA.initialize(trackingId);
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
