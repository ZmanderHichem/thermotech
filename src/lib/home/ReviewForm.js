import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaStar } from 'react-icons/fa';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../Firebase/configFirebase'; // Assurez-vous que le chemin est correct

const StarRating = ({ rating, onClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar
            key={index}
            size={30}
            color={index < rating ? '#ffc107' : '#e4e5e9'}
            onClick={() => onClick(index + 1)}
            style={{ cursor: 'pointer', margin: '0 5px' }}
          />
        );
      })}
    </div>
  );
};

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(firestore, 'Avis_client'), {
        name: values.name,
        review: values.review,
        rating: rating,
        date: new Date()
      });
      
      setShowSuccess(true);
      resetForm();
      setRating(0);
      
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'avis :", error);
    }
  };

  return (
    <div>
      {showSuccess && (
        <div style={{ color: 'green', margin: '10px 0' }}>
          Merci pour votre avis ! Votre commentaire a été enregistré.
        </div>
      )}

      <Formik
        initialValues={{ name: '', review: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, resetForm }) => (
          <Form>
            <div>
              <label htmlFor="name">Votre nom :</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                style={{ width: '100%', margin: '5px 0' }}
              />
            </div>
            <div>
              <label htmlFor="review">Votre avis :</label>
              <Field
                as="textarea"
                id="review"
                name="review"
                placeholder="Écrivez votre avis ici"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.review}
                style={{ width: '100%', height: '100px' }}
              />
            </div>
            <div>
              <label>Évaluation :</label>
              <StarRating rating={rating} onClick={setRating} />
            </div>
            <button type="submit">Soumettre</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReviewForm;
