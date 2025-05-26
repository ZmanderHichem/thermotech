import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../Firebase/configFirebase';
import emailjs from 'emailjs-com';
import './RendezVous.css';

const RendezVous = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    typeMachine: '',
    model: '',
    city: '',
    address: '',
    email: '',
    phone: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const machineTypes = [
    { label: 'Machine à laver', models: ["ACER", "ARISTON", "AUXSTAR", "AZUR", "BIOLUX", "BOSCH", "BRANDT", "CANDY", "CONDOR", "FOCUS", "FRESH", "HGE", "HISENSE", "HOOVER", "IT-WASH", "LG", "MONTBLANC", "NEWSTAR", "ORIENT", "SABA", "SAMSUNG", "SCHEIDER", "SHARP", "TELEFUNKEN", "TORNADO", "UNIONAIRE", "VEGA", "WHIRLPOOL"] },
    { label: 'Lave-vaisselle', models: ["ARCELIK", "ARISTON", "BEKO", "BIOLUX", "BOSCH", "BRANDT", "CONDOR", "FOCUS", "HISENSE", "HOOVER", "INDESIT", "LAV", "LG", "MONTBLANC", "NEWSTAR", "SABA", "SAMSUNG", "SHARP", "TELEFUNKEN", "WHIRLPOOL"] },
    { label: 'Climatiseur', models: ["BIOLUX", "BOSCH", "COALA", "COMFEE", "CONDOR", "FRESH", "GREE", "HISENSE", "KOALA", "LG", "MIDEA", "NEWSTAR", "SABA", "SONAI", "Sans-Fabricant", "TCL", "TRANE"] },
    { label: 'Micro-onde', models: ["ARISTON", "BLACK-AND-DECKER", "BOSCH", "BRANDT", "CONDOR", "FOCUS", "FRANCO", "FRESH", "GALANZ", "HISENSE", "HOOVER", "MIDEA", "MONTBLANC", "SABA", "SAMSUNG", "STAR-ONE", "TEKA", "WHIRLPOOL", "WKM-BY-TOPMATIC", "ZEROWATT"] },
    { label: 'Refrigerateur', models: ["ACER", "ARCELIK", "ARISTON", "AUXSTAR", "BEKO", "BIOLUX", "BOSCH", "BRANDT", "CANDY", "CONDOR", "CONFORT-LINE", "DAEWOO", "FOCUS", "FRESH", "HISENSE", "HOOVER", "INDESIT", "IRIS_", "LG", "MONTBLANC", "NEWSTAR", "RANARO", "SABA", "SAMSUNG", "SHARP", "Sans-Fabricant", "TCL", "TELEFUNKEN", "TORNADO", "UNIONAIRE", "WHIRLPOOL"] }
  ];

  const cities = [
    "Tunis",
    "Ariana",
    "Menzeh",
    "Manar",
    "Marsa",
    "Soukra"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: false });
    }
  };

  const validateForm = () => {
    const errors = {};
    const fields = ['firstName', 'lastName', 'typeMachine', 'model', 'city', 'address', 'email', 'phone'];
    
    fields.forEach(field => {
      if (!formData[field]) {
        errors[field] = true;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email invalide';
    }

    if (formData.phone && !/^\d{8}$/.test(formData.phone)) {
      errors.phone = 'Numéro de téléphone invalide (8 chiffres requis)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Add to Firestore
      await addDoc(collection(firestore, 'Rendez-vous_web'), {
        ...formData,
        timestamp: new Date()
      });

      // Send confirmation email
      const emailParams = {
        to_email: formData.email,
        to_name: `${formData.firstName} ${formData.lastName}`,
        message: "Votre rendez-vous est en cours de traitement. Nous vous contacterons prochainement.",
        type_machine: formData.typeMachine,
        model: formData.model,
      };

      await emailjs.send('service_9frimjq', 'template_u8192kh', emailParams, '045MKDooB2Thc1kTN');

      setSuccessMessage('Rendez-vous enregistré avec succès ! Vous recevrez bientôt un email de confirmation.');
      setFormData({
        firstName: '',
        lastName: '',
        typeMachine: '',
        model: '',
        city: '',
        address: '',
        email: '',
        phone: ''
      });

      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error("Erreur:", error);
      setSuccessMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rendez-vous-container">
      <div className="appointment-card">
        <div className="appointment-header">
          <h1 className="appointment-title">Prendre un Rendez-vous</h1>
          <p className="appointment-subtitle">
            Réservez votre intervention en quelques clics
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                placeholder="Votre prénom"
              />
              {formErrors.firstName && <div className="error-message">Prénom requis</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                placeholder="Votre nom"
              />
              {formErrors.lastName && <div className="error-message">Nom requis</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Type d'appareil</label>
              <select
                name="typeMachine"
                value={formData.typeMachine}
                onChange={handleInputChange}
                className={`form-select ${formErrors.typeMachine ? 'is-invalid' : ''}`}
              >
                <option value="">Sélectionnez un type d'appareil</option>
                {machineTypes.map((type, index) => (
                  <option key={index} value={type.label}>{type.label}</option>
                ))}
              </select>
              {formErrors.typeMachine && <div className="error-message">Type d'appareil requis</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Modèle</label>
              <select
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className={`form-select ${formErrors.model ? 'is-invalid' : ''}`}
              >
                <option value="">Sélectionnez un modèle</option>
                {formData.typeMachine && machineTypes.find(type => type.label === formData.typeMachine)?.models.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
              {formErrors.model && <div className="error-message">Modèle requis</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Ville</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`form-select ${formErrors.city ? 'is-invalid' : ''}`}
              >
                <option value="">Sélectionnez une ville</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
              {formErrors.city && <div className="error-message">Ville requise</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
                placeholder="Votre adresse complète"
              />
              {formErrors.address && <div className="error-message">Adresse requise</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                placeholder="votre@email.com"
              />
              {formErrors.email && <div className="error-message">{typeof formErrors.email === 'string' ? formErrors.email : 'Email requis'}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                placeholder="Votre numéro de téléphone"
              />
              {formErrors.phone && <div className="error-message">{typeof formErrors.phone === 'string' ? formErrors.phone : 'Téléphone requis'}</div>}
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Prendre Rendez-vous'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RendezVous;