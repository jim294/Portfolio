// project.jsx
import React from "react";
import { useParams } from "react-router-dom"; // Importez useParams pour récupérer les paramètres d'URL
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Preloader from "../components/Preloader.jsx";

const Project = ({ project }) => {
  const { projectId } = useParams(); // Récupérez l'ID du projet depuis l'URL

  return (
    <>
      <Preloader />
      {/* Utilisez l'ID du projet dans la génération du lien */}
      <Carousel images={project.pictures} pagination={project.pictures.length} />
      <section className="project">
        <section className="project__left">
          <h1 className="project__title">{project.title}</h1>
          <p className="project__location">{project.site}</p>
          <ul>
            {project.tags.map((tag) => (
              <li className="project__tags" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </section>

        <section className="project__right">
          <figure>
            <figcaption className="project__photo-nom">Difficulté du projet</figcaption>
          </figure>
          <Stars numberActiveStars={project.rating} numberInactiveStars={5 - project.rating} />
        </section>
      </section>

      <section className="collapse__project">
        <Collapse
          key={Math.random()}
          title="Description"
          description={project.description}
        />
        <Collapse
          key={Math.random()}
          title="Liens"
          description={
            <ul className="collapseLiens">
              <li>
                <h2>
                  <a
                    href={project.lien1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lien vers projet GitHub
                  </a>
                </h2>
              </li>
              <li>
                {project.lien2 && (
                  <>
                    <h2>
                      <a
                        href={project.lien2[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lien vers page web
                      </a>
                    </h2>
                  </>
                )}
              </li>
            </ul>
          }
        />
      </section>
    </>
  );
};

export default Project;
