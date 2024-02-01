import { useEffect, useState } from "react";
import NomPrenomAnimation from "../components/NomPrenomAnimation.jsx";
import Typewriter from "typewriter-effect";

const Home = () => {
  const welcom = "Bienvenue";
  const im = "Je suis";
  const firstName = "Jean-Marie";
  const name = "DESCHAMPS";
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <>
      <main>
        <section className="home">
          <div className="home__structure">
            <div className="home__structure__welcom">
              <div className="smiley-hand" role="img" aria-label="smiley-hand">
                👋
              </div>
              <NomPrenomAnimation
                style={{ color: "#FF0000", fontSize: "80px" }}
                firstName={welcom}
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
                  firstName={im}
                  speed={50}
                  delay={2000}
                />
                <NomPrenomAnimation
                  style={{ fontWeight: "bold" }}
                  firstName={firstName}
                  speed={50}
                  delay={2500}
                />
                <NomPrenomAnimation
                  style={{ fontWeight: "bold" }}
                  firstName={name}
                  speed={50}
                  delay={3000}
                />
                <span>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: ["developpeur Web"],
                    }}
                  ></Typewriter>
                </span>
              </div>
              <img src="https://i.postimg.cc/d0tBt3zn/moi.webp" alt="jm" />
              <div>
                <p>
                  Je nourris une passion profonde pour l'informatique et
                  consacre la majeure partie de mon temps au codage. Je suis
                  fier de vous présenter mes services, et en attendant, je vous
                  invite à explorer les projets que j'ai concrétisés, ainsi que
                  mon curriculum vitae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

//https://i.postimg.cc/d0tBt3zn/moi.webp
