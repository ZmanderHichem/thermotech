import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import '../climatisation/climatisation.css';

const Refrigerateur = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="title-service">Service Réfrigérateurs</h1>
        <p className="des-service">
          Experts en réparation et maintenance de réfrigérateurs toutes marques.
          Notre équipe assure un service professionnel pour maintenir vos aliments
          au frais et votre appareil en parfait état de fonctionnement.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={require('../../../assets/refregerateur.jpg')} alt="Réparation réfrigérateur" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Réparation Spécialisée</h3>
            <p className="service-description">
              Service de réparation expert pour tous types de réfrigérateurs,
              congélateurs et combinés avec diagnostic précis.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={require('../../../assets/1.jpg')} alt="Maintenance réfrigérateur" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Maintenance Préventive</h3>
            <p className="service-description">
              Entretien régulier pour optimiser la performance et
              prolonger la durée de vie de votre appareil.
            </p>
          </div>
        </div>
      </div>

      <ul className="features-list">
        <li className="feature-item">
          <div className="feature-icon">
            <FaTools />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Diagnostic Précis</h4>
            <p className="feature-description">
              Identification rapide et précise des pannes
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaCheckCircle />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Service Garanti</h4>
            <p className="feature-description">
              Garantie sur toutes nos interventions
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Pièces Authentiques</h4>
            <p className="feature-description">
              Utilisation de pièces d'origine constructeur
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaClock />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Intervention Rapide</h4>
            <p className="feature-description">
              Service d'urgence disponible 7j/7
            </p>
          </div>
        </li>
      </ul>

      <div className="cta-section">
        <h2 className="cta-title">Votre Réfrigérateur a Besoin d'une Réparation ?</h2>
        <p className="cta-description">
          Contactez-nous pour un diagnostic rapide et professionnel.
        </p>
        <Link to="/rendez-vous" className="cta-button">
          Prendre Rendez-vous
        </Link>
      </div>
    </div>
  );
};

export default Refrigerateur;