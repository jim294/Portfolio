import Banner from "../components/Banner";
import Icones from "../assets/Json/icones.json";

const Presentation = () => {
  return (
    <>
      <main>
        <Banner
          imageUrl="https://i.postimg.cc/508jhqnr/Sation.webp"
          alt="image de montagne"
        />
        <section className="cv_text">
          <h2>Présentation</h2>
          <div>
            <p>
              Je m'appelle Jean-Marie DESCHAMPS, originaire de Besançon. Après
              avoir obtenu avec succès une licence en commerce (Bac+3), j'ai
              consacré plusieurs années à des responsabilités dans le secteur de
              la grande distribution. Cependant, après avoir effectué un bilan
              de compétences il y a quelques années, j'ai réalisé que le monde du
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
              prochain. Passionné par le monde du développement web, je
              m'efforce constamment de me perfectionner, avec un intérêt
              particulier pour React, une bibliothèque JavaScript que je trouve
              particulièrement puissante et captivante.
            </p>
            <p>
              Mon parcours professionnel antérieur m'a doté de compétences en
              gestion et en leadership, que je compte mettre à profit dans le
              domaine informatique. Au-delà de l'apprentissage des technologies,
              j'accorde une grande importance à la qualité de mon code. Je
              considère que la clarté et la lisibilité du code sont
              essentielles, et je m'efforce toujours de produire un travail
              soigné et bien structuré.
            </p>
            <p>
              Après l'obtention de mon diplôme, mon objectif principal est de
              continuer à me perfectionner, explorer de nouvelles technologies
              et rester à la pointe des dernières tendances du développement
              web. Je suis convaincu que l'apprentissage continu est la clé pour
              exceller dans ce domaine en constante évolution.
            </p>
            <p>
              Je suis ouvert aux opportunités de collaboration et de partage de
              connaissances, et je suis impatient de contribuer activement au
              monde passionnant du développement web. Mon parcours diversifié,
              alliant expérience en commerce et formation en développement web,
              me permet d'apporter une perspective unique et des compétences
              complémentaires à tout projet.
            </p>
          </div>
            </section>
          <div className="listIcones">
            {Icones.map((item, index) => (
              <div key={index}>
                <img src={item.title} alt="icone logo" className="icone" />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
      </main>
    </>
  );
};

export default Presentation;
