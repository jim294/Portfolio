import Icones from "../assets/Json/icones.json";
import myGiftPresentation from "../assets/images/présentation.gif";
import besac from "../assets/images/Besancon_boucle_Doubs.webp";
import diplome from "../assets/images/diplome.webp";
import manWork from "../assets/images/manwork.webp";
import openClassrooms from "../assets/images/openclassroomslogo.webp";
import intelligenceImage from "../assets/images/intelligence.webp";

const Presentation = () => {
  return (
    <>
      <main>
        <img
          className="giftPresentation"
          src={myGiftPresentation}
          alt="Travail GIF"
        />
        <h3>1-Présentation</h3>
        <section className="cv_text ">
          <div className="photoPresentation">
            <div>
              <p>Je suis originaire de Besançon.</p>
            </div>
            <div>
              <img src={besac} alt="besancon" />
            </div>
          </div>
          <div className="photoPresentationReverse">
            <div>
              <p>
                Aprés avoir obtenu avec succès une licence en commerce (Bac+3),
                j'ai consacré plusieurs années à des responsabilités dans le
                secteur de la grande distribution . Cependant, après avoir
                effectué un bilan de compétences il y a quelques années, j'ai
                réalisé que le monde du développement informatique représentait
                une véritable source d'épanouissement pour moi.
              </p>
            </div>
            <div>
              <img src={diplome} alt="diplome" />
            </div>
          </div>
          <div className="photoPresentation">
            <div>
              <p>
                Fort de cette prise de conscience, j'ai entrepris une
                reconversion professionnelle, mettant en lumière ma passion de
                longue date pour l'informatique, présente depuis mon plus jeune
                âge. Au cours de cette année de reconversion, j'ai concentré mes
                efforts sur l'apprentissage des langages informatiques de base,
                développant ainsi les compétences nécessaires pour évoluer dans
                le domaine du développement informatique.
              </p>
            </div>
            <div>
              <img src={manWork} alt="man at work" />
            </div>
          </div>
          <div className="photoPresentationReverse">
            <div>
              <p>
                Passionné par le monde du développement web, je m'efforce
                constamment de me perfectionner, avec un intérêt particulier
                pour React, une bibliothèque JavaScript que je trouve
                particulièrement puissante et captivante. A ce titre, je viens
                de valider ma formation d'integrateur Web chez OpenClassrooms.
              </p>
            </div>
            <div>
              <img src={openClassrooms} alt="openClassrooms" />
            </div>
          </div>
          <div className="photoPresentation">
            <div>
              <p>
                Mon parcours professionnel antérieur m'a doté de compétences en
                gestion et en leadership, que je compte mettre à profit dans le
                domaine informatique. Au-delà de l'apprentissage des
                technologies, j'accorde une grande importance à la qualité de
                mon code. Je considère que la clarté et la lisibilité du code
                sont essentielles, et je m'efforce toujours de produire un
                travail soigné et bien structuré.
              </p>
            </div>
            <div>
              <img src={intelligenceImage} alt="cerveau" />
            </div>
          </div>
          <p>
            Après l'obtention de mon diplôme, mon objectif principal est de
            continuer à me perfectionner, explorer de nouvelles technologies et
            rester à la pointe des dernières tendances du développement web.
            <br /> Je suis convaincu que l'apprentissage continu est la clé pour
            exceller dans ce domaine en constante évolution.
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
        <section className="iconesAll">
          <h3>2-Skills</h3>
          <h4>- Languages & Databases -</h4>
          <div className="listIcones">
            {Icones.languages.map((item, index) => (
              <div className="listIconesDetouring" key={index}>
                <img src={item.title} alt="icone logo" className="icone" />
                <p>{item.description}</p>
              </div>
            ))}
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
