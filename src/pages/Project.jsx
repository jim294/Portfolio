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
      <main>
        <Carousel
          images={project.pictures}
          pagination={project.pictures.length}
        />

        <section className="house">
          <section className="house__left">
            <h1 className="house__title">{project.title}</h1>
            <p className="house__location">{project.site}</p>
            <ul>
              {project.tags.map((tag) => (
                <li className="house__tags" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          <section className="house__right">
            <figure>
              <figcaption className="house__photo-nom">
                Difficulté du projet
              </figcaption>
            </figure>
            <Stars
              numberActiveStars={project.rating}
              numberInactiveStars={5 - project.rating}
            />
          </section>
        </section>

        <section className="collapse__house">
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
                  <h1> lien vers page page web:</h1>
                  <a
                    href={project.lien2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.lien2}
                  </a>
                </li>
              </ul>
            }
          />
        </section>
      </main>
    </>
  );
};

export default Project;
