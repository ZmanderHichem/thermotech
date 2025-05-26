import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import './climatisation.css';

const Climatisation = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="title-service">Services de Climatisation</h1>
        <p className="des-service">
          Experts en climatisation, nous vous offrons des solutions complètes pour votre confort thermique.
          De l'installation à la maintenance, notre équipe qualifiée assure un service professionnel et efficace
          pour garantir une performance optimale de votre système.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={require('../../../assets/entretien.jpg')} alt="Installation climatisation" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Installation Professionnelle</h3>
            <p className="service-description">
              Installation experte de systèmes de climatisation adaptés à vos besoins spécifiques,
              avec un service clé en main et des conseils personnalisés.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={require('../../../assets/3.jpg')} alt="Maintenance climatisation" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Maintenance Préventive</h3>
            <p className="service-description">
              Programmes de maintenance régulière pour prévenir les pannes et optimiser
              la performance de votre système de climatisation.
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
            <h4 className="feature-title">Expertise Technique</h4>
            <p className="feature-description">
              Techniciens certifiés avec une expérience approfondie en systèmes de climatisation
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
              Satisfaction client garantie avec un service après-vente réactif
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Maintenance Préventive</h4>
            <p className="feature-description">
              Programmes d'entretien régulier pour éviter les pannes
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
              Service d'urgence disponible avec des délais d'intervention rapides
            </p>
          </div>
        </li>
      </ul>

      <div className="cta-section">
        <h2 className="cta-title">Besoin d'un Service de Climatisation ?</h2>
        <p className="cta-description">
          Contactez-nous dès aujourd'hui pour un devis gratuit ou prenez rendez-vous pour une intervention.
        </p>
        <Link to="/rendez-vous" className="cta-button">
          Prendre Rendez-vous
        </Link>
      </div>
    </div>
  );
};

export default Climatisation;