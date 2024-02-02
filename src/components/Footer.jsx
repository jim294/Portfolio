import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerCitation">
        <p>“Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.”</p>
      </div>
      <div className="footerLogo">
        <Link to="/">
          <Logo />
        </Link>
        <p>&#169; 2020 Jm. All rights reserved</p>
      </div>
      <div className="footerMedia">
      <a href="https://www.linkedin.com/in/jean-marie-deschamps-83a6a4147" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="logo LinkedIn"
          />
        </a>
        <a href="https://twitter.com/jmd1607" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
            alt="logo Twitter"
          />
        </a>
        <NavLink to="/contact">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg"
            alt="logo Mail"
          />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
