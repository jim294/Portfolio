import React, { useState } from "react";
import emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const Form = () => {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Expression régulière simple pour la validation d'un courriel
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Collectez les données du formulaire
    const formData = new FormData(e.target);
    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const message = formData.get("message");

    // Valider l'email
    if (!validateEmail(email)) {
      setEmailError("Adresse e-mail non valide");
      return;
    }

    // Réinitialiser l'erreur d'email
    setEmailError("");

    // Utilisez EmailJS pour envoyer l'email
    emailjs
      .send("service_hcharz7", "template_p4xjhxf", {
        to_name: nom,
        to_firstName: prenom,
        from_email: email,
        message: message,
      })
      .then((response) => {
        alert("Email envoyé", response);
      })
      .catch((error) => {
        console.error("Le mail ne s'est pas envoyé", error);
      });
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="case">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" />
      </div>
      <div className="case">
        <label htmlFor="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" />
      </div>
      <div className="case">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>
      <div className="case">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <input className="submit" type="submit" value="Envoyer" />
    </form>
  );
};

export default Form;
