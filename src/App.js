import {useState, useEffect} from "react";
import Preloader from "./components/Preloader.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Presentation from "./pages/Presentation";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <Header />
      <main> 
      <Routes>
        <Route path="jim294.github.io/portfolio/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      </main> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
