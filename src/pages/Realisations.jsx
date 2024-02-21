import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import { useMediaQuery } from "react-responsive";
import myGift  from '../assets/images/Travail.gif'

const Realisations = () => {
  const firstName = "Mes  projets ";
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
      <section className="realisation">
        <NomPrenomAnimation style={{ color: "black", fontSize: getFontSize() }} string={firstName} speed={100} delay={1200} />
      
      <img className="giftTravail" src={myGift} alt="Travail GIF" />
      <h3>1/ OpenClassrooms</h3>
      <section className="cardsBackground">
        {Projects.Openclassrooms.map((project, index) => (
          <Cards
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.cover}
            link={`/projectcours/${project.id}`}
          />
        ))}
      </section>
      <h3>2/ Conception personnelle</h3>
      <section className="cardsBackground">
        {Projects.Perso.map((project, index) => (
          <Cards
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.cover}
            link={`/projectperso/${project.id}`}
          />
        ))}
      </section>
      </section>
    </>
  );
};

export default Realisations;
