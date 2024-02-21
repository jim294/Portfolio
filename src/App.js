import { useState, useEffect } from "react";
import Preloader from "./components/Preloader.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Project from "./pages/Project";
import ProjectPerso from "./pages/ProjectPerso";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Preloader load={load} />
      <BackgroundAnimation />
      <Header />
      <main>
        <Routes>
          <Route path="jim294.github.io/portfolio/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectcours/:id" element={<Project />} />
          <Route path="/projectperso/:id" element={<ProjectPerso />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
