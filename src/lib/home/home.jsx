import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaClock, FaUserShield, FaArrowRight } from 'react-icons/fa';
import './Home.css';
import ReviewForm from './ReviewForm';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Votre Expert en Réparation d'Électroménager</h1>
          <Link to="/rendez-vous" className="cta-button">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={require('../../assets/1.jpg')} alt="Réfrigérateurs" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Réfrigérateurs</h3>
              <p className="service-description">
                Réparation et entretien de tous types de réfrigérateurs pour garantir la conservation optimale de vos aliments.
              </p>
              <Link to="/services/refrigerateur" className="service-link">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img src={require('../../assets/2.jpg')} alt="Machines à laver" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Machines à laver</h3>
              <p className="service-description">
                Installation et réparation professionnelle de machines à laver et lave-vaisselle.
              </p>
              <Link to="/services/machines" className="service-link">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img src={require('../../assets/3.jpg')} alt="Climatisation" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Climatisation</h3>
              <p className="service-description">
                Installation, entretien et réparation de systèmes de climatisation pour votre confort.
              </p>
              <Link to="/services/climatisation" className="service-link">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Pourquoi Nous Choisir</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaTools />
            </div>
            <h3 className="feature-title">Expertise Technique</h3>
            <p className="feature-description">
              Nos techniciens sont formés et certifiés pour intervenir sur tous types d'appareils.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3 className="feature-title">Service Rapide</h3>
            <p className="feature-description">
              Intervention dans les 24-48h pour minimiser les désagréments.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaUserShield />
            </div>
            <h3 className="feature-title">Garantie Satisfaction</h3>
            <p className="feature-description">
              Nous nous engageons à vous offrir un service de qualité et des résultats durables.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Clients Satisfaits</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Service Client</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Garantie</div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <h2 className="section-title">Votre Avis Compte</h2>
        <div className="review-container">
          <ReviewForm />
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">Témoignages Clients</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-content">
              "Service rapide et professionnel. Mon réfrigérateur fonctionne comme neuf maintenant. Je recommande vivement !"
            </p>
            <p className="testimonial-author">- Sarah B.</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-content">
              "Excellente expertise technique et service client impeccable. Très satisfait de l'intervention."
            </p>
            <p className="testimonial-author">- Mohamed K.</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-content">
              "Intervention rapide et efficace sur ma climatisation. Je n'hésiterai pas à faire appel à eux à nouveau."
            </p>
            <p className="testimonial-author">- Leila M.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;