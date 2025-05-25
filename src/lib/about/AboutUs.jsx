// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <h1>À propos de ThermoTech</h1>
        <p className="about-us__intro">
          Fondée en 1990, ThermoTech s'engage à offrir des services de réparation et d'entretien de haute qualité pour tous types d'appareils électroménagers. Forts de plusieurs décennies d'expérience, nous sommes spécialisés dans la réparation de machines à laver, lave-vaisselles, micro-ondes, fours et systèmes de climatisation.
        </p>

        <section className="about-us__services">
  <h2>Nos Spécialités</h2>
  <div className="services-container">
    <div className="services-column">
      <ul>
        <li>Machines à laver</li>
        <li>Lave-vaisselles</li>
        <li>Micro-ondes</li>
      </ul>
    </div>
    <div className="vertical-line"></div>
    <div className="services-column">
      <ul>
        <li>Fours</li>
        <li>Climatisation</li>
        <li>Refrigerateur</li>
      </ul>
    </div>
  </div>
</section>



        <section className="about-us__mission">
          <h2>Notre Mission</h2>
          <p>
            Chez ThermoTech, nous nous engageons à assurer le plus haut niveau de satisfaction client grâce à nos services de réparation experts. Notre équipe de professionnels certifiés travaille sans relâche pour redonner vie à vos appareils électroménagers, avec un accent sur la fiabilité et l'efficacité.
          </p>
        </section>

        <section className="about-us__contact">
          <h2>Contactez-nous</h2>
          <p>Pour toute demande ou pour planifier une réparation, n'hésitez pas à nous contacter :</p>
          <p><strong>Email :</strong> contact@ThermoTech.tn</p>
          <p><strong>Téléphone :</strong> +216 26 779 333</p>
        </section>
        <section className="about-us__location">
          <h2>Nous localiser</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.6285659608571!2d10.18197110378573!3d36.817152686850946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35d26e262681%3A0xd966c6282540d0d7!2sThermoTech!5e0!3m2!1sfr!2stn!4v1727097415054!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
