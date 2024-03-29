import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerCitation">
        <p>
          “Le succès, c'est d'aller d'échec en échec sans perdre son
          enthousiasme.”
        </p>
      </div>
      <div className="footerLogo">
        <Link to="/">
          <Logo />
        </Link>
        <h2>
          &#169; 2024 Jm
          <br /> All rights reserved
        </h2>
      </div>
      <div className="footerMedia">
        <a
          href="https://www.linkedin.com/in/jean-marie-deschamps25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icones/LinkedIn.webp"
            alt="logo LinkedIn"
          />
        </a>
        <a
          href="https://twitter.com/jmd1607"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icones/x.webp"
            alt="logo Twitter"
          />
        </a>
        <a
          href="https://github.com/jim294?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icones/github.webp"
            alt="logo GitHub"
          />
        </a>
        <NavLink to="/contact">
          <img
            src="/images/icones/mail.webp"
            alt="logo Mail"
          />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
