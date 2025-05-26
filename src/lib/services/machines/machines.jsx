import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import '../climatisation/climatisation.css';

const Machines = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="title-service">Réparation et Installation d'Électroménager</h1>
        <p className="des-service">
          Experts en réparation et installation de machines à laver, lave-vaisselle et sèche-linge.
          Notre équipe qualifiée assure un service rapide et fiable pour tous vos appareils électroménagers.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={require('../../../assets/machinereparation.jpg')} alt="Réparation machines" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Réparation Professionnelle</h3>
            <p className="service-description">
              Service de réparation expert pour tous types de machines à laver et lave-vaisselle,
              avec diagnostic précis et solutions durables.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={require('../../../assets/2.jpg')} alt="Installation machines" className="service-image" />
          <div className="service-content">
            <h3 className="service-title">Installation Experte</h3>
            <p className="service-description">
              Installation professionnelle de vos appareils avec mise en service
              et vérification complète du fonctionnement.
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
            <h4 className="feature-title">Expertise Multi-marques</h4>
            <p className="feature-description">
              Intervention sur toutes les marques d'électroménager
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaCheckCircle />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Garantie Intervention</h4>
            <p className="feature-description">
              Toutes nos réparations sont garanties
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
              Utilisation exclusive de pièces détachées d'origine
            </p>
          </div>
        </li>
        <li className="feature-item">
          <div className="feature-icon">
            <FaClock />
          </div>
          <div className="feature-text">
            <h4 className="feature-title">Service Rapide</h4>
            <p className="feature-description">
              Intervention dans les 24-48h selon l'urgence
            </p>
          </div>
        </li>
      </ul>

      <div className="cta-section">
        <h2 className="cta-title">Besoin d'une Réparation ?</h2>
        <p className="cta-description">
          Contactez-nous pour un diagnostic rapide et un devis gratuit.
        </p>
        <Link to="/rendez-vous" className="cta-button">
          Prendre Rendez-vous
        </Link>
      </div>
    </div>
  );
};

export default Machines;