import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import Typewriter from "typewriter-effect";

const Home = () => {
  const welcom = "Bienvenue";
  const im = "Je suis";
  const firstName = "Jean-Marie";
  const name = "DESCHAMPS";
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  const getFontSize = () => {
    return isSmallScreen ? "40px" : "80px";
  };

  return (
    <>
      <main>
        <section className="home">
          <div className="titleStructure">
            <div className="home__structure__welcom">
              <div className="smiley-hand" role="img" aria-label="smiley-hand">
                👋
              </div>
              <NomPrenomAnimation
                style={{ color: "black", fontSize: getFontSize() }}
                string={welcom}
                speed={50}
                delay={1200}
              />
              <div className="smiley-hand" role="img" aria-label="smiley-hand">
                👋
              </div>
            </div>
            <div className="home__structure__components">
              <div>
                <NomPrenomAnimation
                  style={{ fontWeight: "bold" }}
                  string={im}
                  speed={50}
                  delay={2000}
                />
                <NomPrenomAnimation
                  style={{ fontWeight: "bold" }}
                  string={firstName}
                  speed={50}
                  delay={2500}
                />
                <NomPrenomAnimation
                  style={{ fontWeight: "bold" }}
                  string={name}
                  speed={50}
                  delay={3000}
                />
                <span>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: ["développeur Web"],
                    }}
                  ></Typewriter>
                </span>
              </div>
              <img src="https://i.postimg.cc/xCzfkTcH/Moi.webp" alt="jm" />
              <div>
                <p>
                  Passionné par l'informatique, je consacre la majeure partie de
                  mon temps à la programmation. Je suis fier de vous présenter mes
                  services, et je vous invite à explorer les projets que j'ai
                  concrétisés, ainsi que ma description.
                </p>
                <div className="homeLiens">
                  <NavLink to="/realisations">
                    <img
                      src="https://i.postimg.cc/rs69bVFM/fleche-gauche.png"
                      alt="fleche gauche"
                    />
                    Voir mes projets
                    <img
                      src="https://i.postimg.cc/d389cbLd/fleche-droite.png"
                      alt="fleche droite"
                    />
                  </NavLink>
                  <NavLink to="/presentation">
                    <img
                      src="https://i.postimg.cc/rs69bVFM/fleche-gauche.png"
                      alt="fleche gauche"
                    />
                    En savoir plus
                    <img
                      src="https://i.postimg.cc/d389cbLd/fleche-droite.png"
                      alt="fleche droite"
                    />
                  </NavLink>
                  <NavLink to="/contact">
                    <img
                      src="https://i.postimg.cc/rs69bVFM/fleche-gauche.png"
                      alt="fleche gauche"
                    />
                    Me contacter
                    <img
                      src="https://i.postimg.cc/d389cbLd/fleche-droite.png"
                      alt="fleche droite"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
