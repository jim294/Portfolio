import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import Form from "../components/Form";

const Contact = () => {
  const firstName = "Pour me contacter";
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <>
      <main>
        <section>
          <NomPrenomAnimation firstName={firstName} speed={100} delay={1200} />
        </section>
        <section>
          <div className="contact">
            <h2>Une question ?</h2>
            <p>
              N’hésitez pas à m’écrire ! Je vous répondrai en moins de 24
              heures
            </p>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
