// Libraries
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// Images
import Rodrigo from '../../assets/images/testimonials/rodrigo-calderon.png'
import Rodrigo2X from '../../assets/images/testimonials/rodrigo-calderon@2x.png'
import Gabriel from '../../assets/images/testimonials/gabriel-vinderola.png'
import Gabriel2X from '../../assets/images/testimonials/gabriel-vinderola@2x.png'
import MissMonique from '../../assets/images/testimonials/miss-monique.png'
import MissMonique2X from '../../assets/images/testimonials/miss-monique@2x.png'

// Icons
import { ReactComponent as IconBack } from '../../assets/icons/Back.svg'
import { ReactComponent as IconNext } from '../../assets/icons/Next.svg'

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
  }
  return (
    <section className="spa">
      <div className="container">
        <Slider {...settings} className="testimonials__carousel">
          {/* Testimonio 1:start */}
          <div className="testimonio d-flex">
            <div className="testimonio__frase font-weight--500">
              <p>Margot és un SPA GASTRONÓMICO, un lugar ideado a la perfección con una propuesta única en Argentina. Producto autóctono y técnicas precisas en un marco de estilo y confort.</p>

              <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
                <span className="font-weight--600">Rodrigo Calderón</span>
                <br></br>
                <div className="separador d-flex bg--olivo"></div>
                Sommelier
              </p>
            </div>

            <img className="testimonio__imagen" src={Rodrigo} srcSet={Rodrigo2X + ' 2x'} alt="Rodrigo Calderón" />

            <p className="testimonio__autor d-md-none color--olivo">
              <span className="font-weight--600">Rodrigo Calderón</span>
              Sommelier
            </p>
          </div>
          {/* Testimonio 1:end */}
          {/* Testimonio 2:start */}
          <div className="testimonio d-flex">
            <div className="testimonio__frase font-weight--500">
              <p>La fermentación coloca a los alimentos en un lugar único entre lo crudo y lo cocido. Margot produce e incorpora alimentos fermentados a su carta, dejando a sus platos en ese lugar único que solo los microorganismos saben hacer. Curiosidad e innovación con conocimiento.</p>

              <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
                <span className="font-weight--600">Dr. Gabriel Vinderola</span>
                <br></br>
                <div className="separador d-flex bg--olivo"></div>
                Investigador Principal CONICET
              </p>
            </div>

            <img className="testimonio__imagen" src={Gabriel} srcSet={Gabriel2X + ' 2x'} alt="Gabriel Vinderola" />

            <p className="testimonio__autor d-md-none color--olivo">
              <span className="font-weight--600">Dr. Gabriel Vinderola</span>
              Investigador Principal CONICET
            </p>
          </div>
          {/* Testimonio 2:end */}
          {/* Testimonio 3:start */}
          <div className="testimonio d-flex">
            <div className="testimonio__frase font-weight--500">
              <p>One of the coolest places in Santa Fe. Thank you for delicious, unique menu and hospitality 💚 Much love friends 😍</p>

              <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
                <span className="font-weight--600">Miss Monique</span>
                <br></br>
                <div className="separador d-flex bg--olivo"></div>
                DJ
              </p>
            </div>

            <img className="testimonio__imagen" src={MissMonique} srcSet={MissMonique2X + ' 2x'} alt="Miss Monique" />

            <p className="testimonio__autor d-md-none color--olivo">
              <span className="font-weight--600">Miss Monique</span>
              DJ
            </p>
          </div>
          {/* Testimonio 3:end */}
        </Slider>
      </div>
    </section>
  )
}
export default Testimonials
