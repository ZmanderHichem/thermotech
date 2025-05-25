import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import Home from './lib/home/home';
import About from './lib/about/AboutUs';
import Footer from './lib/Footer/Footer';
import Login from './lib/Login/Login';
import Register from './lib/Register/Register';
import RendezVous from './lib/RendezVous/RendezVous';
import './App.css';  // Import the updated CSS
import logo from './assets/logo-thermotech.png';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon
import Services from './lib/services/services';
import Refrigerateur from './lib/services/refrigerateur/refrigerateur';
import Machines from './lib/services/machines/machines';
import Climatisation from './lib/services/climatisation/climatisation';
import Microonde from './lib/services/microonde/microonde';
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component
import { initGA, logPageView } from "./analytics";
import Loading from './Loading.js'; // Import the loading component
import Social from './lib/social/Social';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Google Analytics setup
  useEffect(() => {
    initGA(); // Initialise GA
    logPageView(location.pathname); // Log the first page view
  }, [location.pathname]);

  // Simulate a delay to show loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Switch to main content after delay
    }, 2000); // 2-second delay for demo purposes
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Loading />; // Show the loading screen while loading
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav>
  <Link to="/home">
    <img src={logo} alt="logo" className="logo" />
  </Link>
  <input type="checkbox" id="checkbox" />
  <label htmlFor="checkbox" id="icon">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <ul className="nav-links">
    <li><Link to="/rendez-vous" className="active">Réservez un RDV</Link></li>
    <li><Link to="/services/climatisation">Climatisation</Link></li>

    <li><Link to="/services/refrigerateur">Réfrigérateur</Link></li>
    <li><Link to="/services/machines">Machines</Link></li>
    <li><Link to="/about">A propos</Link></li>
  </ul>

  <div className="call-action">
    <Link to="tel:+21626779333">
      Appelez-nous <FaPhoneAlt /> +216 26 779 333
    </Link>
  </div>
</nav>


      <ScrollToTop />

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/refrigerateur" element={<Refrigerateur />} />
        <Route path="/services/machines" element={<Machines />} />
        <Route path="/services/climatisation" element={<Climatisation />} />
        <Route path="/services/microonde" element={<Microonde />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
