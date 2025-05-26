import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaStar } from 'react-icons/fa';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../Firebase/configFirebase';

const StarRating = ({ rating, onClick }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`star ${index < rating ? 'active' : ''}`}
          onClick={() => onClick(index + 1)}
          style={{ color: index < rating ? '#ffc107' : '#e4e5e9' }}
        />
      ))}
    </div>
  );
};

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addDoc(collection(firestore, 'reviews'), {
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
    <div className="review-form-container">
      {showSuccess && (
        <div className="success-message">
          Merci pour votre avis ! Votre commentaire a été enregistré.
        </div>
      )}

      <Formik
        initialValues={{ name: '', review: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="review-form">
          <Field
            type="text"
            name="name"
            placeholder="Votre nom"
            className="review-input"
          />
          
          <StarRating rating={rating} onClick={setRating} />
          
          <Field
            as="textarea"
            name="review"
            placeholder="Partagez votre expérience avec nous"
            className="review-input review-textarea"
          />
          
          <button 
            type="submit" 
            className="review-submit"
            disabled={!rating}
          >
            Envoyer votre avis
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReviewForm;