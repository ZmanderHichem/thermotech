// src/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-white">
            <h4>Info de l'entreprise</h4>
            <p className="text-white">ThermoTech s'engage à offrir des services de réparation et 
            d'entretien de haute qualité pour tous types d'appareils électroménagers.</p>
          </Col>
          <Col className="text-white">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="/home" className="text-white">Accueil</a></li>
              <li><a href="/about" className="text-white">A propos</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/rendez-vous" className="text-white">Passer un Rendez-vous</a></li>
            </ul>
          </Col>
          <Col className="text-white">
            <h4>Nous Contacter</h4>
            <p className="text-white">Email: contact@ThermoTech.tn</p>
            <p className="text-white">Tel: +216 26 779 333</p>
          </Col>
          {/* <Col className="text-white">
            <h4>Nous Localiser</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.6285659608571!2d10.18197110378573!3d36.817152686850946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35d26e262681%3A0xd966c6282540d0d7!2sThermoTech!5e0!3m2!1sfr!2stn!4v1727097415054!5m2!1sfr!2stn"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ThermoTech Location"
            ></iframe>
          </Col> */}
        </Row>
        {/* <Row className="text-center">
          <Col className="text-white">
            <p className="text-white">&copy; 2024 ThermoTech. All rights reserved.</p>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;
