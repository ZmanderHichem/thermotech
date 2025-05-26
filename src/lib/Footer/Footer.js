import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>À Propos de ThermoTech</h4>
          <p>
            Leader dans le domaine de la réparation et l'entretien d'appareils électroménagers,
            nous nous engageons à fournir un service de qualité supérieure à nos clients.
          </p>
        </div>

        <div className="footer-section">
          <h4>Liens Rapides</h4>
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/services/climatisation">Climatisation</Link></li>
            <li><Link to="/services/refrigerateur">Réfrigérateur</Link></li>
            <li><Link to="/services/machines">Machines</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/rendez-vous">Rendez-vous</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaPhone /> <a href="tel:+21626779333">+216 26 779 333</a>
            </li>
            <li>
              <FaEnvelope /> <a href="mailto:contact@thermotech.tn">contact@thermotech.tn</a>
            </li>
            <li>
              <FaMapMarkerAlt /> Tunis, Tunisie
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.facebook.com/646200471909861" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/thermotech.tn/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/21626779333" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ThermoTech. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;