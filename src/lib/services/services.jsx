import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <p className="services-description">
        Découvrez notre expertise en entretien, installation et réparation. 
        Nous nous engageons à vous offrir un service rapide et de qualité 
        pour garantir votre confort au quotidien. Faites-nous confiance 
        pour prendre soin de vos appareils !
      </p>

      <div className="compartment">
        <h2 className="compartment-title">Nos Services</h2>
        <div className="services-grid">
          <Link to="/services/refrigerateur" className="service-item">
            <img src={require('../../assets/1.jpg')} alt="Service Réfrigérateur" />
          </Link>
          <Link to="/services/machines" className="service-item">
            <img src={require('../../assets/2.jpg')} alt="Service Machines" />
          </Link>
          <Link to="/services/climatisation" className="service-item">
            <img src={require('../../assets/3.jpg')} alt="Service Climatisation" />
          </Link>
          <Link to="/services/microonde" className="service-item">
            <img src={require('../../assets/4.jpg')} alt="Service Micro-ondes" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;