import Cards from "../components/Cards";
import Projects from "../assets/Json/projects.json";
import myGift from "../assets/images/Travail.gif";
import myProject from "../assets/images/Mes-projets.gif";

const Realisations = () => {
  return (
    <>
      <section className="realisation">
          <img src={myProject} alt="contact GIF" />
          <img className="giftTravail" src={myGift} alt="Travail GIF" />
        <h3>1/ OpenClassrooms</h3>
        <section className="cardsBackground">
          {Projects.Openclassrooms.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.cover}
              link={`/projectcours/${project.id}`}
            />
          ))}
        </section>
        <h3>2/ Réalisations personnelles</h3>
        <section className="cardsBackground">
          {Projects.Perso.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageUrl={project.cover}
              link={`/projectperso/${project.id}`}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Realisations;
