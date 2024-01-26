import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imgMontagne from "../assets/images/Sation.webp";

const collapses = [
  {
    title: "Soft skills",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa.Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const Presentation = () => {
  return (
    <>
      <main>
        <Banner imageUrl={imgMontagne} alt="image de montagne" />
        <section className="cv_text">
          <p>
          Bonjour,

Je m'appelle Jean-Marie DESCHAMPS et je suis originaire de Besançon. Fort d'une licence en commerce obtenue avec succès (Bac+3), j'ai consacré plusieurs années de ma vie professionnelle à des responsabilités dans le secteur de la grande distribution.

Cependant, l'année dernière, après avoir pris le temps de faire un bilan de compétences, j'ai réalisé à quel point le monde du développement informatique représente une véritable source d'épanouissement pour moi. Animé par le désir de changement et la volonté de donner un nouvel élan à ma carrière, j'ai entrepris une reconversion professionnelle.

Cette transition m'a permis de mettre en lumière ma passion de longue date pour l'informatique, présente depuis mon plus jeune âge. Au cours de cette année de reconversion, j'ai concentré mes efforts sur l'apprentissage des langages informatiques de base, développant ainsi les compétences nécessaires pour évoluer dans le domaine du développement informatique.

Mon parcours professionnel antérieur m'a doté de compétences en gestion et en leadership, que je compte mettre à profit dans le domaine informatique. Je suis déterminé à continuer d'apprendre, à me perfectionner et à exercer un métier qui correspond à ma véritable passion.
          </p>
          {collapses.map((collapse, index) => (
            <Collapse
              key={index}
              title={collapse.title}
              description={collapse.description}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Presentation;
