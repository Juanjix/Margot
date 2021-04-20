// Images
import img from '../../assets/images/offer/Img.jpg'
import img2 from '../../assets/images/offer/Img2.jpg'
import img3 from '../../assets/images/offer/Img3.jpg'
import img4 from '../../assets/images/offer/Img4.jpg'
import img5 from '../../assets/images/offer/Img5.jpg'
import img6 from '../../assets/images/offer/Img6.jpg'

const Offer = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="row offer-info">
          <div className="col-12 col-sm-6">
            <h2 className="offer-title">La clave está en los detalles</h2>
          </div>
          <div className="col-12 col-md-5">
            <p>La región carecía de una oferta gastronómica de nivel internacional. Es por eso que decidimos combinar materia prima regional de calidad con la mejor cocina, cava y coctelería en un espacio arquitectónico único, atendiendo a la trazabilidad y sustentabilidad de nuestros procesos.</p>
            <p className="offer-reserva">
              <a href="https://www.facebook.com/margotrestostafe/">Reservá tu experiencia</a>
            </p>
          </div>
        </div>
      </div>

      <div className="offer-cards">
        <div className="card">
          <img src={img} alt="respeto"></img>
          <p className="card-title">respeto</p>
          <p className="card-text">Cultivamos nuestra propia huerta sustentable, a la vista del comensal.</p>
        </div>
        <div className="card">
          <img src={img2} alt="exclusividad"></img>
          <p className="card-title">Exclusividad</p>
          <p className="card-text">Diseñamos un espacio único en la región, sofisticado, cálido e íntimo.</p>
        </div>
        <div className="card">
          <img src={img3} alt="calidad"></img>
          <p className="card-title">calidad</p>
          <p className="card-text">Contamos con una colección de los mejores vinos de la Argentina para todos los gustos.</p>
        </div>
        <div className="card">
          <img src={img4} alt="confianza"></img>
          <p className="card-title">confianza</p>
          <p className="card-text">Atendemos de manera personal y cercana a nuestros comensales.</p>
        </div>
        <div className="card">
          <img src={img5} alt="vanguardia"></img>
          <p className="card-title">vanguardia</p>
          <p className="card-text">Nuestra cocina tiene tecnología de punta y usamos técnicas novedosas.</p>
        </div>
        <div className="card">
          <img src={img6} alt="autenticidad"></img>
          <p className="card-title">autenticidad</p>
          <p className="card-text">Nuestros proveedores comparten nuestros valores y respetan la calidad ante todo.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer
