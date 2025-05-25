// lib/Services/Refrigerateur.js
import React from 'react';

const Refrigerateur = () => {
  return (
    <div>
      <h1 className='title-service'>Réparation des Réfrigérateurs</h1>
      <p className='des-service'>Nous prenons en charge tout le processus de réparation de votre réfrigérateur, assurant une mise en service parfaite et des réparations rapides. Avec notre expertise, nous veillons à ce que votre appareil reste en excellent état, garantissant la fraîcheur de vos aliments.
       Ne laissez pas les pannes vous gêner : nous sommes là pour vous offrir un service de qualité et un confort optimal !.</p>
      <div className='img-service'>
        <img src={require('../../../assets/refregerateur.jpg')} alt='refrigerateur' />
      </div>
    </div>
  );
};

export default Refrigerateur;
