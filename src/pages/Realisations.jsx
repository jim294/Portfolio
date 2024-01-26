import Cards from "../components/Cards";
import Projects from "../projects.json";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";

const Realisations = () => {

  const firstName = "Mes  projects ";
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
        <section className="cardsBackground">
          {Projects.map((project, index) => (
            <Cards
              className="card"
              key={index}
              title={project.title}
              imageUrl={project.cover}
              link={`/project/${project.id}`}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Realisations;
