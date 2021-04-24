import img from '../../assets/images/spa/Rodrigo.jpg'
// import img2 from "../../assets/images/spa/Gabriel.jpg";
// import img3 from "../../assets/images/spa/Monique.jpg";
import { ReactComponent as IconBack } from '../../assets/icons/Back.svg'
import { ReactComponent as IconNext } from '../../assets/icons/Next.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ArrowBack = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <IconBack />
    </button>
  )
}

const ArrowNext = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <IconNext />
    </button>
  )
}

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: <ArrowBack />,
    nextArrow: <ArrowNext />
    // responsive: [
    //   { breakpoint: 768, settings: { slidesToShow: 1 } },
    //   { breakpoint: 1024, settings: { slidesToShow: 1 } },
    //   { breakpoint: 10000, settings: { slidesToShow: 3 } },
    // ],
  }
  return (
    <section className="spa">
      <div className="container">
        <Slider {...settings} className="testimonials__carousel">
          {/* Testimonio 1:start */}
          <div className="testimonio">
            <div className="testimonio__frase font-weight--500">
              <p>Margot és un SPA GASTRONÓMICO, un lugar ideado a la perfección con una propuesta única en Argentina. Producto autóctono y técnicas precisas en un marco de estilo y confort.</p>

              <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
                <span className="font-weight--600">Rodrigo Calderón</span>
                <br></br>
                <div className="separador d-flex bg--olivo"></div>
                Sommelier
              </p>
            </div>

            <img className="testimonio__imagen" src={img} alt="Rodrigo Calderón" />

            <p className="testimonio__autor d-md-none color--olivo">
              <span className="font-weight--600">Rodrigo Calderón</span>
              Sommelier
            </p>
          </div>
          {/* Testimonio 1:end */}
          {/* Testimonio 1:start */}
          <div className="testimonio">
            <div className="testimonio__frase font-weight--500">
              <p>Margot és un SPA GASTRONÓMICO, un lugar ideado a la perfección con una propuesta única en Argentina. Producto autóctono y técnicas precisas en un marco de estilo y confort.</p>

              <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
                <span className="font-weight--600">Rodrigo Calderón</span>
                <br></br>
                <div className="separador d-flex bg--olivo"></div>
                Sommelier
              </p>
            </div>

            <img className="testimonio__imagen" src={img} alt="Rodrigo Calderón" />

            <p className="testimonio__autor d-md-none color--olivo">
              <span className="font-weight--600">Rodrigo Calderón</span>
              Sommelier
            </p>
          </div>
          {/* Testimonio 1:end */}
        </Slider>
      </div>
    </section>
  )
}
export default Testimonials
