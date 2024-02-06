import { useState } from "react";

export default function Carousel(props) {
  const { images, pagination } = props;
  const [image, setImage] = useState(0);

  const handlePreviousDisplay = () => {
    if (image > 0) {
      setImage(image - 1);
    } else {
      setImage(pagination - 1);
    }
  };

  const handleNextDisplay = () => {
    if (image >= pagination - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel__arrow mediaQueriesRigth"
          onClick={handlePreviousDisplay}
        >
          <img
            src="https://i.postimg.cc/4xm2TfwR/fleche-gauche.webp"
            alt="fleche gauche"
            style={pagination === 1 ? { display: "none" } : null}
          />
        </div>
        <div className="carousel__image-container">
          <img className="carousel__image" src={images[image]} alt="carousel" />
        </div>
        <div className="arrowMediaQueries">
          <div
            className="carousel__arrow mediaQueriesLeft"
            onClick={handlePreviousDisplay}
          >
            <img
              src="https://i.postimg.cc/4xm2TfwR/fleche-gauche.webp"
              alt="fleche gauche"
              style={pagination === 1 ? { display: "none" } : null}
            />
          </div>
          <div className="carousel__arrow" onClick={handleNextDisplay}>
            <img
              src="https://i.postimg.cc/2SSRLNw0/fleche-droite.png"
              alt="fleche droite"
              style={pagination === 1 ? { display: "none" } : null}
            />
          </div>
        </div>
      </div>
      <figcaption
        className="carousel__pagination"
        style={pagination === 1 ? { display: "none" } : null}
      >
        {image + 1}/{pagination}
      </figcaption>
    </div>
  );
}
