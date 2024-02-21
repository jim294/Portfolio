import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Projects from "../assets/Json/projects.json";
import Preloader from "../components/Preloader.jsx";

const ProjectPerso = () => {
  const [work, setWork] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const projectPerso = Projects.Perso.find((project) => project.id === id);

  useEffect(() => {
    if (projectPerso) {
      setWork(projectPerso);
    } else {
      navigate("/Error");
    }
  }, [projectPerso, navigate]);

  return work == null ? (
    <Preloader />
  ) : (
    <>
      <section className="project">
        <section className="project__left">
          <h1 className="project__title">{projectPerso.title}</h1>
          <p className="project__location">{projectPerso.site}</p>
          <Carousel
            images={projectPerso.pictures}
            pagination={projectPerso.pictures.length}
          />
          <ul>
            {projectPerso.tags.map((tag) => (
              <li className="project__tags" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </section>
        <section className="project__right">
          <figure>
            <figcaption className="project__photo-nom">
              Difficulté du projet
            </figcaption>
          </figure>
          <Stars
            numberActiveStars={projectPerso.rating}
            numberInactiveStars={5 - projectPerso.rating}
          />
        </section>
      </section>

      <section className="collapse__project">
        <Collapse
          key={Math.random()}
          title="Description"
          description={projectPerso.description}
        />
        <Collapse
          key={Math.random()}
          title="Liens"
          description={
            <ul className="collapseLiens">
              <li>
                <h2>
                  <a
                    href={projectPerso.lien1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lien vers projet GitHub
                  </a>
                </h2>
              </li>
              <li>
                {projectPerso.lien2 && (
                  <>
                    <h2>
                      <a
                        href={projectPerso.lien2[0]}
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

export default ProjectPerso;
