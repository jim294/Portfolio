import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import { useMediaQuery } from "react-responsive";

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
      <section>
        <NomPrenomAnimation style={{ color: "black", fontSize: getFontSize() }} string={firstName} speed={100} delay={1200} />
      </section>
      <section className="cardsBackground">
        {Projects.map((project, index) => (
          <Cards
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.cover}
            link={`/project/${project.id}`}
          />
        ))}
      </section>
    </>
  );
};

export default Realisations;
