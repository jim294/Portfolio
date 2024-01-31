import Banner from "../components/Banner";
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
        <Banner className="maPhoto" imageUrl="https://i.postimg.cc/d0tBt3zn/moi.webp" alt="image de montagne" captionText="Jean-Marie DESCHAMPS" />

        </section>
      </main>
    </>
  );
};

export default Home;
