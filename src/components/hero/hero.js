import img from "../../assets/images/hero/Img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h2 className="hero__title">
          En cada plato,<br></br>una nueva emoción
        </h2>
        <img src={img} alt="plato"></img>
        <p className="hero__paragraph">
          EN MARGOT BUSCAMOS QUE CADA EXPERIENCIA SEA ÚNICA
        </p>
        <p>
          Amamos lo que hacemos e invertimos todo nuestro tiempo y energía en
          una constante y perpetua búsqueda de la perfección. Por eso diseñamos
          un espacio de exploración gastronómica donde ofrecemos cocina
          auténtica e innovadora basada en productos locales de calidad.
        </p>
      </div>
    </div>
  );
};

export default Hero;
