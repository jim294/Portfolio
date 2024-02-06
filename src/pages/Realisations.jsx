// realisations.jsx
import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import { useParams } from "react-router-dom"; // Ajout de cette importation

const Realisations = () => {
  const firstName = "Mes projets ";
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { projectId } = useParams(); // Récupération de l'ID du projet depuis l'URL

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  // Fonction pour générer le lien dynamique en fonction de l'ID du projet
  const generateLink = (projectId) => `/project/${projectId}`;

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
            link={generateLink(project.id)} // Utilisation de la fonction pour générer le lien
          />
        ))}
      </section>
    </>
  );
};

export default Realisations;
