import Banner from "../components/Banner";
import Icones from "../assets/Json/icones.json";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import { useMediaQuery } from "react-responsive";

const Presentation = () => {
  const presentation = "Laissez moi vous parler de moi...";
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const getFontSize = () => {
    return isSmallScreen ? "40px" : "60px";
  };

  return (
    <>
      <main>
        <div className="titleStructure">
          <NomPrenomAnimation
            style={{ fontSize: getFontSize() }}
            firstName={presentation}
            speed={50}
            delay={1200}
          />
        </div>
        <Banner
          imageUrl="https://i.postimg.cc/508jhqnr/Sation.webp"
          alt="image de montagne"
        />
        <div className="ancres">
          <h4>
            <a href="#presentation">1-Présentation</a>
          </h4>
          <h4>
            <a href="#skills">2-Skills</a>
          </h4>
        </div>
        <section className="cv_text">
          <h3 id="presentation">1-Présentation</h3>
          <p>
            Je m'appelle Jean-Marie DESCHAMPS, originaire de Besançon. Après
            avoir obtenu avec succès une licence en commerce (Bac+3), j'ai
            consacré plusieurs années à des responsabilités dans le secteur de
            la grande distribution. Cependant, après avoir effectué un bilan de
            compétences il y a quelques années, j'ai réalisé que le monde du
            développement informatique représentait une véritable source
            d'épanouissement pour moi.
          </p>
          <p>
            Fort de cette prise de conscience, j'ai entrepris une reconversion
            professionnelle, mettant en lumière ma passion de longue date pour
            l'informatique, présente depuis mon plus jeune âge. Au cours de
            cette année de reconversion, j'ai concentré mes efforts sur
            l'apprentissage des langages informatiques de base, développant
            ainsi les compétences nécessaires pour évoluer dans le domaine du
            développement informatique.
          </p>
          <p>
            Parallèlement, je suis actuellement en cours de formation en tant
            qu'intégrateur web chez OpenClassroom, et je suis sur le point de
            terminer mon parcours pour obtenir mon diplôme le 15 février
            prochain. Passionné par le monde du développement web, je m'efforce
            constamment de me perfectionner, avec un intérêt particulier pour
            React, une bibliothèque JavaScript que je trouve particulièrement
            puissante et captivante.
          </p>
          <p>
            Mon parcours professionnel antérieur m'a doté de compétences en
            gestion et en leadership, que je compte mettre à profit dans le
            domaine informatique. Au-delà de l'apprentissage des technologies,
            j'accorde une grande importance à la qualité de mon code. Je
            considère que la clarté et la lisibilité du code sont essentielles,
            et je m'efforce toujours de produire un travail soigné et bien
            structuré.
          </p>
          <p>
            Après l'obtention de mon diplôme, mon objectif principal est de
            continuer à me perfectionner, explorer de nouvelles technologies et
            rester à la pointe des dernières tendances du développement web. Je
            suis convaincu que l'apprentissage continu est la clé pour exceller
            dans ce domaine en constante évolution.
          </p>
          <p>
            Je suis ouvert aux opportunités de collaboration et de partage de
            connaissances, et je suis impatient de contribuer activement au
            monde passionnant du développement web. Mon parcours diversifié,
            alliant expérience en commerce et formation en développement web, me
            permet d'apporter une perspective unique et des compétences
            complémentaires à tout projet.
          </p>
        </section>
        <h3 id="skills">2-Skills</h3>
        <section className="iconesAll">
          <div className="iconesAllItem">
          <h4>- Languages & Databases -</h4>
          <div className="listIcones">
            {Icones.languages.map((item, index) => (
              <div className="listIconesDetouring" key={index}>
                <img src={item.title} alt="icone logo" className="icone" />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          </div>
          <div>
          <h4>- Frameworks & Technologies -</h4>
          <div className="listIcones">
            {Icones.frameworks.map((item, index) => (
              <div className="listIconesDetouring" key={index}>
                <img src={item.title} alt="icone logo" className="icone" />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          </div>
          <div>
          <h4>- Tools & Platforms -</h4>
          <div className="listIcones">
            {Icones.tools.map((item, index) => (
              <div className="listIconesDetouring" key={index}>
                <img src={item.title} alt="icone logo" className="icone" />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Presentation;
