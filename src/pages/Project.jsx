import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // hooks utils
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Projects from "../projects.json";
import Preloader from "../components/Preloader.jsx";

const Project = () => {
  const [work, setWork] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const project = Projects.find((project) => project.id === id);

  useEffect(() => {
    if (project) {
      setWork(project);
    } else {
      navigate("/Error");
    }
  }, [project, navigate]);

  return work == null ? (
    <Preloader />
  ) : (
    <>
        <Carousel
          images={project.pictures}
          pagination={project.pictures.length}
          />

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
              <figcaption className="project__photo-nom">
                Difficulté du projet
              </figcaption>
            </figure>
            <Stars
              numberActiveStars={project.rating}
              numberInactiveStars={5 - project.rating}
            />
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
              <ul>
                <li>
                  <h1> lien vers projet GitHub:</h1>
                  <a
                    href={project.lien1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.lien1}
                  </a>
                </li>
                <li>
                  {project.lien2 && (
                    <>
                      <h1> lien vers page web:</h1>
                      <a
                        href={project.lien2[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.lien2[0]}
                      </a>
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
