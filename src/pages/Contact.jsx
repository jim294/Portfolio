import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import Form from "../components/Form";

const Contact = () => {
  const firstName = "Me contacter";
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  const getFontSize = () => {
    return isSmallScreen ? "40px" : "80px";
  };

  return (
    <>
      <main>
        <section>
          <div className="contact">
            <NomPrenomAnimation
              style={{fontSize: getFontSize() }}
              string={firstName}
              speed={100}
              delay={1200}
            />
            <h2>Une question ?</h2>
            <p>
              N’hésitez pas à m’écrire ! Je vous répondrai en moins de 24 heures.
            </p>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
