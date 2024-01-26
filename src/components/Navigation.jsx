import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
      <NavLink
          to="/portfolio"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/presentation"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Présentation</li>
        </NavLink>
        <NavLink
          to="/realisations"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Réalisations</li>
        </NavLink>
        <NavLink
          to="/Contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
