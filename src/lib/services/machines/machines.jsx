// lib/Services/Machines.js
import React from 'react';

const Machines = () => {
  return (
    <div>
      <h1 className='title-service'>Installation et Réparation de Machines à Laver / Lave-vaisselle / Sèche-linge</h1>
      <p className='des-service'>Laissez-nous gérer l'installation et la réparation de tous types de 
            machines ! Que ce soit pour une nouvelle installation ou une réparation rapide, nous intervenons avec expertise et efficacité. Nous prenons en charge chaque étape pour vous assurer un équipement fonctionnel, durable et performant. Ne vous inquiétez plus des pannes, 
            nous sommes là pour vous offrir des solutions fiables et adaptées à vos besoins.</p>
      <div className='img-service'>
        <img src={require('../../../assets/machinereparation.jpg')} alt='machines' />
      </div>
    </div>

  );
};

export default Machines;
