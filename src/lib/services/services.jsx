import React from 'react';
import { Link } from 'react-router-dom';

import './services.css'; // Optional: Create a CSS file for styling

const Services = () => {
  return (
    <div>
      <div className="services-container">
        <p>
          Découvrez notre expertise en entretien, installation et réparation. 
          Nous nous engageons à vous offrir un service rapide et de qualité 
          pour garantir votre confort au quotidien. Faites-nous confiance 
          pour prendre soin de vos appareils !
        </p>
      </div>

      <div className="compartment compartment-1">
        <h2 className="compartment-title title-1">Nos Services</h2>

        <div className="services-container">
          <Link to="/services/refrigerateur" className="service-item">
            <img src={require('../../assets/1.jpg')} alt="Service 1" />
          </Link>
          <Link to="/services/machines" className="service-item">
            <img src={require('../../assets/2.jpg')} alt="Service 2" />
          </Link>
          <Link to="/services/climatisation" className="service-item">
            <img src={require('../../assets/3.jpg')} alt="Service 3" />
          </Link>
          <Link to="/services/microonde" className="service-item">
            <img src={require('../../assets/4.jpg')} alt="Service 4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
