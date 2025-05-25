// lib/Services/Climatisation.js
import React from 'react';
import './climatisation.css';
const Climatisation = () => {
  return (
    <div>
      <h1 className='title-service'>Climatisation</h1>
      <p className='des-service'>Nous nous occupons de tout, du nettoyage à vapeur aux vérifications essentielles, pour garantir un fonctionnement optimal. Avec notre expertise, nous prenons la relève pour vous offrir
      un air frais et sain tout au long de l'année. Faites le choix de la tranquillité d'esprit et laissez-nous prendre soin de votre confort !</p>
      <div className='img-service'>
        <img src={require('../../../assets/entretien.jpg')} alt='climatisation' />
      </div>
    </div>
  );
};

export default Climatisation;
