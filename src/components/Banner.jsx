const Banner = (props) => {
  const { captionText, imageUrl, alt } = props;
  return (
    <section className="banner">
      <img src={imageUrl} alt={alt} />
      <p>{captionText}</p>
    </section>
  );
};

export default Banner;
