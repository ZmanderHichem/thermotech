import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import '../climatisation/climatisation.css';

const Microonde = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="title-service">Service Micro-ondes</h1>
        <p className="des-service">
          Experts en réparation et maintenance de micro-ondes toutes marques.
          Notre équipe qualifiée assure un service rapide et efficace pour
          remettre votre appareil en parfait état de fonctionnement.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={require('../../../assets/4.jpg')} alt="Réparation micro-ondes" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Réparation Professionnelle</h3>
            <p className="service-description">
              Service de réparation expert pour tous types de micro-ondes
              avec diagnostic précis et solutions durables.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={require('../../../assets/machinereparation.jpg')} alt="Maintenance micro-ondes" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Maintenance Préventive</h3>
            <p className="service-description">
              Entretien régulier pour garantir la sécurité et
              la performance optimale de votre appareil.
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
              Techniciens qualifiés pour toutes marques
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
            <h4 className="feature-title">Pièces d'Origine</h4>
            <p className="feature-description">
              Utilisation exclusive de pièces constructeur
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
              Service rapide sous 24-48h
            </p>
          </div>
        </li>
      </ul>

      <div className="cta-section">
        <h2 className="cta-title">Besoin d'une Réparation ?</h2>
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

export default Microonde;