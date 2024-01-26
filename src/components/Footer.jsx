import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <Logo/>
      </Link>
        <p>&#169; 2020 Jm. All rights reserved</p>
    </footer>
  );
};

export default Footer;
