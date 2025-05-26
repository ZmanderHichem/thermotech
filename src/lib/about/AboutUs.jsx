import React from 'react';
import './AboutUs.css';
import { FaEnvelope, FaPhone, FaClock, FaTools, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <div className="about-us__header">
          <h1 className="about-us__title">À propos de ThermoTech</h1>
          <p className="about-us__intro">
            Depuis plus de 5 ans, ThermoTech s'est imposé comme le leader dans le domaine de la réparation
            et de l'entretien d'appareils électroménagers. Notre engagement envers l'excellence et la satisfaction
            client nous a permis de construire une réputation solide basée sur la confiance et le professionnalisme.
          </p>
        </div>

        <section className="about-us__services">
          <div className="services-grid">
            <div className="service-item">
              <FaTools />
              <h3>Expertise Technique</h3>
              <p>Notre équipe de techniciens certifiés possède une expertise approfondie dans la réparation
                de tous types d'appareils électroménagers.</p>
            </div>
            <div className="service-item">
              <FaShieldAlt />
              <h3>Service Garanti</h3>
              <p>Nous comprenons l'importance d'une intervention rapide et nous nous engageons à résoudre
                vos problèmes dans les plus brefs délais.</p>
            </div>
            <div className="service-item">
              <FaCheckCircle />
              <h3>Qualité Garantie</h3>
              <p>Nous utilisons exclusivement des pièces d'origine et offrons une garantie sur toutes
                nos interventions pour votre tranquillité d'esprit.</p>
            </div>
          </div>
        </section>

        <section className="about-us__mission">
          <h2 className="mission-title">Notre Mission</h2>
          <p className="mission-text">
            Chez ThermoTech, notre mission est d'offrir des solutions de réparation et d'entretien
            fiables et durables, tout en garantissant une expérience client exceptionnelle. Nous nous
            engageons à maintenir les plus hauts standards de qualité et de professionnalisme dans
            chacune de nos interventions.
          </p>
        </section>

        <section className="about-us__contact">
          <h2 className="contact-title">Contactez-nous</h2>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <h4>Téléphone</h4>
              <p>+216 26 779 333</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <h4>Email</h4>
              <p>contact@ThermoTech.tn</p>
            </div>
            <div className="contact-item">
              <FaClock />
              <h4>Horaires</h4>
              <p>Lun - Sam: 8h - 19h <br /> Dimanche: 9h - 15h</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;