import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Projects from "./assets/Json/projects.json"; // Importez votre fichier de données de projets

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <BackgroundAnimation />
      <Header />
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/realisations" element={<Realisations />} />
          {Projects.map((project) => (
            <Route
              key={project.id}
              path={`/project/${project.id}`}
              element={<Project project={project} />}
            />
          ))}
          <Route path="/project/:projectId" element={<Project />} /> {/* Route dynamique pour le projet */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
