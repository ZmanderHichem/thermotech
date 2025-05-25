// lib/Services/Microonde.js
import React from 'react';

const Microonde = () => {
  return (
    <div>
      <h1 className='title-service'>Micro-onde</h1>
      <p className='des-service'>Nous offrons des services de réparation et d'entretien pour toutes les micro-ondes. Nous travaillons avec des techniciens qualifiés pour garantir un service de qualité supérieure.</p>
      <div className='img-service'>
        <img src={require('../../../assets/4.jpg')} alt='microonde' />
      </div>
    </div>
  );
};

export default Microonde;
