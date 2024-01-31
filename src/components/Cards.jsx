import { Link } from "react-router-dom";

const Cards = ({ title, subtitle, imageUrl, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <figure className="cards">
        <figcaption className="cards__text">{title}</figcaption>
        <img src={imageUrl} alt={title} className="cards__card" />
        <figcaption className="cards__text__subtitle">{subtitle}</figcaption>
      </figure>
    </Link>
  );
};

export default Cards;
