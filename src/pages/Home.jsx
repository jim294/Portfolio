import Banner from "../components/Banner";
import maPhoto from "../assets/images/moi.png";
import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";

const Home = () => {
  const firstName = "Bienvenue sur ma page";
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <>
      <main>
        <section>
          <NomPrenomAnimation firstName={firstName} speed={100} delay={1200} />
        </section>
        <section>
        <Banner className="maPhoto" imageUrl={maPhoto} alt="image de montagne" captionText="Jean-Marie DESCHAMPS" />
          <p>
            Je suis actuellement en cours de formation en tant qu'intégrateur
            web chez OpenClassroom, et je suis sur le point de terminer mon
            parcours pour obtenir mon diplôme le 15 février prochain. Passionné
            par le monde du développement web, je m'efforce constamment de me
            perfectionner afin d'atteindre l'excellence dans mon domaine.
            <br />
            <br />
            Mon intérêt particulier se porte sur React, une bibliothèque
            JavaScript que je trouve particulièrement puissante et captivante.
            J'ai développé une véritable affinité avec cette technologie et je
            suis enthousiaste à l'idée de continuer à approfondir mes
            compétences dans ce domaine.
            <br />
            <br />
            Au-delà de l'apprentissage des technologies, j'accorde une grande
            importance à la qualité de mon code. Je considère que la clarté et
            la lisibilité du code sont essentielles, et je m'efforce toujours de
            produire un travail soigné et bien structuré.
            <br />
            <br />
            Après l'obtention de mon diplôme, mon objectif principal est de
            continuer à me perfectionner, explorer de nouvelles technologies et
            rester à la pointe des dernières tendances du développement web. Je
            suis convaincu que l'apprentissage continu est la clé pour exceller
            dans ce domaine en constante évolution.
            <br />
            <br />
            Je suis ouvert aux opportunités de collaboration et de partage de
            connaissances, et je suis impatient de contribuer activement au
            monde passionnant du développement web
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
