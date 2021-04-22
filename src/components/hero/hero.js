import img from "../../assets/images/hero/Img.jpg";
import img2 from "../../assets/images/hero/img2.jpg";
import img3 from "../../assets/images/hero/img3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 10000, settings: { slidesToShow: 3 } },
    ],
  };
  return (
    <div className="hero">
      <div className="container">
        <h2 className="hero__title">
          En cada plato,<br></br>una nueva emoción
        </h2>
        <Slider {...settings}>
          <img src={img} alt="plato"></img>
          <img src={img2} alt="plato"></img>
          <img src={img3} alt="plato"></img>
        </Slider>
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
