import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";

const Realisations = () => {
  const firstName = "Mes  projets ";
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <>
      <section>
        <NomPrenomAnimation string={firstName} speed={100} delay={1200} />
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
