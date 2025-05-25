import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../Firebase/configFirebase';
import './RendezVous.css';
import emailjs from 'emailjs-com'; // Import EmailJS
import MapboxMap from './MapboxMap'; // Import the Mapbox component (you'll create this)
import Map, { Marker } from 'react-map-gl'; // Ensure this import is correct

import MapboxGL from 'mapbox-gl';

const mapboxToken = 'pk.eyJ1Ijoiem1hbmRhciIsImEiOiJjbHhxanRrbnowOGpqMmtzZTlmbG5yc3l1In0.teCik_xjKRjrjLceCXYVGA'; // Replace with your Mapbox access token
MapboxGL.accessToken = mapboxToken; // Replace with your Mapbox access token

export default function Delivery() {
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
  const [selectedType, setSelectedType] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [mapModalOpen, setMapModalOpen] = useState(false); // State for modal visibility
  const [mapCoordinates, setMapCoordinates] = useState(null); // To hold selected coordinates
  const [showMapPopup, setShowMapPopup] = useState(false); // State to manage the map popup visibility

  const machineTypes = [
    { label: 'Machine à laver', models: ["ACER", "ARISTON", "AUXSTAR", "AZUR", "BIOLUX", "BOSCH", "BRANDT", "CANDY", "CONDOR", "FOCUS", "FRESH", "HGE", "HISENSE", "HOOVER", "IT-WASH", "LG", "MONTBLANC", "NEWSTAR", "ORIENT", "SABA", "SAMSUNG", "SCHEIDER", "SHARP", "TELEFUNKEN", "TORNADO", "UNIONAIRE", "VEGA", "WHIRLPOOL"] },
    { label: 'Lave-vaisselle', models: ["ARCELIK", "ARISTON", "BEKO", "BIOLUX", "BOSCH", "BRANDT", "CONDOR", "FOCUS", "HISENSE", "HOOVER", "INDESIT", "LAV", "LG", "MONTBLANC", "NEWSTAR", "SABA", "SAMSUNG", "SHARP", "TELEFUNKEN", "WHIRLPOOL"] },
    { label: 'Climatiseur', models: ["BIOLUX", "BOSCH", "COALA", "COMFEE", "CONDOR", "FRESH", "GREE", "HISENSE", "KOALA", "LG", "MIDEA", "NEWSTAR", "SABA", "SONAI", "Sans-Fabricant", "TCL", "TRANE"] },
    { label: 'Micro-onde', models: ["ARISTON", "BLACK-AND-DECKER", "BOSCH", "BRANDT", "CONDOR", "FOCUS", "FRANCO", "FRESH", "GALANZ", "HISENSE", "HOOVER", "MIDEA", "MONTBLANC", "SABA", "SAMSUNG", "STAR-ONE", "TEKA", "WHIRLPOOL", "WKM-BY-TOPMATIC", "ZEROWATT"] },
    { label: 'Refrigerateur', models: ["ACER", "ARCELIK", "ARISTON", "AUXSTAR", "BEKO", "BIOLUX", "BOSCH", "BRANDT", "CANDY", "CONDOR", "CONFORT-LINE", "DAEWOO", "FOCUS", "FRESH", "HISENSE", "HOOVER", "INDESIT", "IRIS_", "LG", "MONTBLANC", "NEWSTAR", "RANARO", "SABA", "SAMSUNG", "SHARP", "Sans-Fabricant", "TCL", "TELEFUNKEN", "TORNADO", "UNIONAIRE", "WHIRLPOOL"] }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getModelOptions = () => {
    const selectedMachine = machineTypes.find(machine => machine.label === selectedType);
    return selectedMachine ? selectedMachine.models : [];
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = true;
    if (!formData.lastName) errors.lastName = true;
    if (!selectedType) errors.typeMachine = true;
    if (!formData.model) errors.model = true;
    if (!formData.city) errors.city = true;
    if (!formData.address) errors.address = true;
    if (!formData.email) errors.email = true;
    if (!formData.phone) errors.phone = true;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        await addDoc(collection(firestore, 'Rendez-vous_web'), {
          firstName: formData.firstName,
          lastName: formData.lastName,
          typeMachine: selectedType,
          model: formData.model,
          city: formData.city,
          address: formData.address,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date()
        });

        const emailParams = {
          to_email: formData.email,
          to_name: `${formData.firstName} ${formData.lastName}`,
          message: "Votre rendez-vous est en cours de traitement. Nous vous contacterons prochainement.",
          type_machine: selectedType,
          model: formData.model,
        };

        emailjs.send('service_9frimjq', 'template_u8192kh', emailParams, '045MKDooB2Thc1kTN')
          .then(() => {
            alert('Rendez-vous enregistré et email envoyé avec succès!');
          })
          .catch((error) => {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            alert('Rendez-vous enregistré mais erreur lors de l\'envoi de l\'email.');
          });

      } catch (error) {
        console.error("Erreur lors de l'enregistrement: ", error);
        alert("Erreur lors de l'enregistrement.");
      }
    } else {
      setFormErrors(formErrors); // Keep the existing errors
    }
  };

  const getInputClassName = (field) => {
    return formErrors[field] ? 'form-control is-invalid' : 'form-control';
  };
  const handleMapClick = (event) => {
    const coordinates = event.lngLat;
    setMapCoordinates(coordinates);
    setFormData({ ...formData, address: `${coordinates.lng}, ${coordinates.lat}` }); // Update address field
    setMapModalOpen(false); // Close the modal
  };

  const handleMapLocationSelect = (selectedLocation) => {
    setFormData({ ...formData, address: selectedLocation }); // Set the selected location in the address field
    setShowMapPopup(false); // Close the map popup
  };
  return (
    <div className="mx-auto gradient-custom mt-5 mb-5" style={{ maxWidth: '1000px', minHeight: '400px' }}>
      <MDBRow className="pt-3 mx-3">
        <MDBCol md="3">
          <div className="text-center">
            <MDBIcon fas icon="shipping-fast text-white" size="3x" />
            <MDBTypography tag="h3" className="text-white">Bienvenue</MDBTypography>
            <p className="white-text">Vous êtes à 30 secondes de passer un Rendez-Vous !</p>
            <Link to="/home">
              <MDBBtn color="white" rounded>Retour</MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol md="9">
          <MDBCard className="card-custom pb-4">
            <MDBCardBody className="mt-0 mx-5">
              <MDBTypography tag="h4" style={{ color: '#495057' }}>Détails du Rendez-Vous</MDBTypography>
              <form onSubmit={handleSubmit}>
                <MDBRow className="mb-4">
                  <MDBCol md="6">
                    <MDBInput label='Prénom' type='text' name="firstName" className={getInputClassName('firstName')} onChange={handleInputChange} />
                    {formErrors.firstName && <p className="text-danger">Prénom requis</p>}
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput label='Nom' type='text' name="lastName" className={getInputClassName('lastName')} onChange={handleInputChange} />
                    {formErrors.lastName && <p className="text-danger">Nom requis</p>}
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol md="6">
                    <select 
                      id="typeMachine"
                      className={getInputClassName('typeMachine')} 
                      name="typeMachine" 
                      onChange={e => setSelectedType(e.target.value)}
                    >
                      <option value="">Sélectionner Type de Machine</option>
                      {machineTypes.map((machine, index) => (
                        <option key={index} value={machine.label}>{machine.label}</option>
                      ))}
                    </select>
                    <label htmlFor="typeMachine" className="mt-1 d-block">Type de Machine</label>
                    {formErrors.typeMachine && <p className="text-danger">Type de machine requis</p>}
                  </MDBCol>
                  <MDBCol md="6">
                    <select 
                      id="model"
                      className={getInputClassName('model')} 
                      name="model" 
                      onChange={handleInputChange} 
                      value={formData.model}
                    >
                      <option value="">Sélectionner Modèle</option>
                      {selectedType && machineTypes.find(machine => machine.label === selectedType)?.models.map((model, index) => (
                        <option key={index} value={model}>{model}</option>
                      ))}
                    </select>
                    <label htmlFor="model" className="mt-1 d-block">Modèle</label>
                    {formErrors.model && <p className="text-danger">Modèle requis</p>}
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol md="6">
                    <select 
                      id="city"
                      className={getInputClassName('city')} 
                      name="city"  
                      onChange={handleInputChange} 
                      value={formData.city}
                    >
                      <option value="">Sélectionner une Ville</option>
                      <option value="Tunis">Tunis</option>
                      <option value="Ariana">Ariana</option>
                      <option value="Menzeh">Menzeh</option>
                      <option value="Manar">Manar</option>
                      <option value="Marsa">Marsa</option>
                      <option value="Soukra">Soukra</option>
                    </select>
                    <label htmlFor="city" className="mt-1 d-block">Ville</label>
                    {formErrors.city && <p className="text-danger">Ville requise</p>}
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput label='Adresse' type='text' name="address" className={getInputClassName('address')} onChange={handleInputChange} />
                    {formErrors.address && <p className="text-danger">Adresse requise</p>}
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                  <MDBCol md="6">
                    <MDBInput label='Email' type='email' name="email" className={getInputClassName('email')} onChange={handleInputChange} />
                    {formErrors.email && <p className="text-danger">Email requis</p>}
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput label='Téléphone' type='text' name="phone" className={getInputClassName('phone')} onChange={handleInputChange} />
                    {formErrors.phone && <p className="text-danger">Téléphone requis</p>}
                  </MDBCol>
                </MDBRow>

                <MDBBtn type="submit" color="primary">Envoyer</MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}