import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // hooks utils
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Projects from "../projects.json";

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

return work == null  ? (<div>loader...En attente de données chargées</div>) : 
  (
    <>
      <main>
        <Carousel images={project.pictures} pagination={project.pictures.length} />

        <section className="house">
          <section className="house__left">
            <h1 className="house__title">{project.title}</h1>
            <p className="house__location">{project.location}</p>
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
                {project.host.name}
              </figcaption>
              <img
                className="house__photo-profil"
                src={project.host.picture}
                alt="profil"
              />
            </figure>
            <Stars
              numberActiveStars={project.rating}
              numberInactiveStars={5-project.rating}
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
            title="Équipements"
            description={
              <ul>
                {project.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    </>
  );
};

export default Project;
