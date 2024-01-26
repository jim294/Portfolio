import React from "react";

const Form = () => {
  return (
    <form className="form" method="post">
      <div className="case">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" />
      </div>
      <div className="case">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
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
