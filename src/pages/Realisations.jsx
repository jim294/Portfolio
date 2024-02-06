import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";

const Realisations = () => {
  const firstName = "Mes projets";
  const [projects, setProjects] = useState([]);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
    // Charger les projets une seule fois lorsque le composant est monté
    setProjects(Projects);
  }, [animationTriggered]);

  return (
    <>
      <section>
        <NomPrenomAnimation string={firstName} speed={100} delay={1200} />
      </section>
      <section className="cardsBackground">
        {projects.map((project, index) => (
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
