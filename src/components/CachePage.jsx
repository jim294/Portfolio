import { useEffect } from 'react';

const CachePage = () => {
  useEffect(() => {
    // Vérifie si la page a déjà été mise en cache
    if (localStorage.getItem("cachedPage") === null) {
      // Si la page n'est pas en cache, sauvegarde son contenu dans le localStorage
      localStorage.setItem("cachedPage", document.documentElement.innerHTML);
    } else {
      // Si la page est en cache, restaure son contenu depuis le localStorage
      document.documentElement.innerHTML = localStorage.getItem("cachedPage");
    }
  }, []); // Ce tableau vide en tant que dépendance signifie que cela ne s'exécutera qu'une fois lors du montage initial

  return null; // Comme ce composant n'affiche rien, nous retournons null
};

export default CachePage;
