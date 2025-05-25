// src/Home.js
import React from 'react';
import './Home.css'; // Import custom CSS for the Home page
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm'; // Assurez-vous que le chemin est correct

const Home = () => {
  
  return (
    <div className="home-container">
      {/* Compartment 1 */}
      <div className='installation-gif-container'>
  <img src={require('../../assets/affichethermotech.png')} alt="Installation" className='installation-gif' />
  <button className='appointment-button' onClick={() => window.location.href = '/rendez-vous'}>Réservez un Rendez-vous</button>
</div>

  <img src={require('../../assets/separation.png')} alt="Séparation" className='separation' />



  <img src={require('../../assets/affiche2.png')} alt="Affiche 2" className='affiche2' />


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


      <div className="compartment compartment-2">
        <h2 className="compartment-title title-2">Entretien et maintenance Climatisation</h2>
        <div className="compartment-content content-2">
          <div className="compartment-description description-2">
            <p>Nous nous occupons de tout, du nettoyage à vapeur aux vérifications essentielles, pour garantir un fonctionnement optimal. Avec notre expertise, nous prenons la relève pour vous offrir
            un air frais et sain tout au long de l'année. Faites le choix de la tranquillité d'esprit et laissez-nous prendre soin de votre confort !</p>
          </div>
          <div className="compartment-image image-2">
            <img src={require('../../assets/entretien.jpg')} alt="Compartment 2" />
          </div>
        </div>
      </div>

      {/* Compartment 3 */}
      <div className="compartment compartment-3">
        <h2 className="compartment-title title-3">Installation et Réparation de Machines à Laver / Lave-vaisselle / Sèche-linge</h2>
        <div className="compartment-content content-3">
        <div className="compartment-image image-3">
            <img src={require('../../assets/machinereparation.jpg')} alt="Compartment 3" />
          </div>
          <div className="compartment-description description-3">
            <p>Laissez-nous gérer l'installation et la réparation de tous types de 
            machines ! Que ce soit pour une nouvelle installation ou une réparation rapide, nous intervenons avec expertise et efficacité. Nous prenons en charge chaque étape pour vous assurer un équipement fonctionnel, durable et performant. Ne vous inquiétez plus des pannes, 
            nous sommes là pour vous offrir des solutions fiables et adaptées à vos besoins.</p>
          </div>

        </div>
      </div>

      {/* Compartment 4 */}
      <div className="compartment compartment-4">
        <h2 className="compartment-title title-4">Réparation de Réfrigérateurs</h2>
        <div className="compartment-content content-4">
          <div className="compartment-description description-4">
            <p> 
            Nous prenons en charge tout le processus de réparation de votre réfrigérateur, assurant une mise en service parfaite et des réparations rapides. Avec notre expertise, nous veillons à ce que votre appareil reste en excellent état, garantissant la fraîcheur de vos aliments. 
            Ne laissez pas les pannes vous gêner : nous sommes là pour vous offrir un service de qualité et un confort optimal !.</p>
          </div>
          <div className="compartment-image image-4">
            <img src={require('../../assets/refregerateur.jpg')} alt="Compartment 4" />
          </div>
        </div>
      </div>

      <div className="review-compartment">
        <h2>Donnez votre avis</h2>
        <ReviewForm /> {/* Ajoutez le composant de formulaire d'avis ici */}
      </div>
    </div>

  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2022 All rights reserved.</p>
    </footer>
  );
};

export default Home;
