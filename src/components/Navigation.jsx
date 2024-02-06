import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/portfolio">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/presentation">Présentation</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/realisations">Réalisations</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
