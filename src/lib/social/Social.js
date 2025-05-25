import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo-thermotech.png';
import './Social.css';

function Social() {
  return (
    <div className="social-container">
      <div className="social-card">
        <div className="logo-container">
          <img src={logo} alt="Thermotech Logo" className="social-logo" />
        </div>
        
        <p className="bio-text">
          Spécialiste en climatisation et froid – Installation, entretien et dépannage.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+21626779333">26 779 333</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:contact@thermotech.tn">contact@thermotech.tn</a>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com/646200471909861" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/thermotech.tn/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://wa.me/21626779333" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@thermotech.tn" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social; 