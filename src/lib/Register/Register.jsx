
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/configFirebase";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from "react-router-dom";

import "./Register.css"; 

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const Téléphone = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    try {
      // Créer l'utilisateur
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Créer l'utilisateur dans Firestore
      await setDoc(doc(getFirestore(), "users", res.user.uid), {
        uid: res.user.uid,
        Téléphone,
        displayName,
        email,
      });

      setLoading(false);
      navigate("/"); // Rediriger vers la page d'accueil après l'inscription
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-formWrapper">
        <span className="title-customLogin">S'inscrire</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Nom & Prénom" className="Register-input" />
          <input required type="tel" placeholder="Téléphone" className="Register-input" />
          <input required type="email" placeholder="Votre Email" className="Register-input"/>
          <input required type="password" placeholder="Mot de Passe" className="Register-input"/>
          <button disabled={loading}>S'inscrire</button>
          {loading && "Veuillez patienter..."}
          {err && <span>Une erreur s'est produite</span>}
        </form>
        <p>
          Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;