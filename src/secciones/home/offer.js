import React from 'react'

// Images
import img from '../../assets/images/offer/Img.jpg'
import img2 from '../../assets/images/offer/Img2.jpg'
import img3 from '../../assets/images/offer/Img3.jpg'
import img4 from '../../assets/images/offer/Img4.jpg'
import img5 from '../../assets/images/offer/Img5.jpg'
import img6 from '../../assets/images/offer/Img6.jpg'

// Icons
import { ReactComponent as IconDrag } from '../../assets/icons/icon-drag.svg'

class Offer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: null,
      isMouseOver: false,
      isMouseDown: false,
      cursorPosition: 0,
      scrollPosition: 0
    }
  }

  ref = React.createRef()

  componentDidMount = () => {
    this.playCarousel()
  }

  componentWillUnmount = () => {
    this.pauseCarousel()
  }

  playCarousel = () => {
    const interval = setInterval(() => {
      this.ref.current.scrollLeft = this.ref.current.scrollLeft + 1
    }, 30)

    if (this.state.interval === null) {
      this.setState({
        interval: interval
      })
    }
  }

  pauseCarousel = () => {
    clearInterval(this.state.interval)
    this.setState({
      interval: null
    })
  }

  handleMouseOver = () => {
    if (!this.state.isMouseOver) {
      this.setState({
        isMouseOver: true
      })
    }

    this.pauseCarousel()
  }

  handleMouseLeave = () => {
    if (this.state.isMouseOver) {
      this.setState({
        isMouseOver: false
      })
    }

    const cursor = document.getElementById('dragCursor')
    cursor.style.opacity = 0

    this.playCarousel()
  }

  handleMouseDown = (event) => {
    const newCursorPosition = event.pageX - this.ref.current.offsetLeft
    const newScrollPosition = this.ref.current.scrollLeft

    this.setState({
      isMouseDown: true,
      cursorPosition: newCursorPosition,
      scrollPosition: newScrollPosition
    })
  }

  handleMouseUp = () => {
    this.setState({
      isMouseDown: false
    })
  }

  handleMouseMove = (event) => {
    if (this.state.isMouseDown) {
      event.preventDefault()
      const x = event.pageX - this.ref.current.offsetLeft
      const walk = x - this.state.cursorPosition
      this.ref.current.scrollLeft = this.state.scrollPosition - walk
    }

    // Cursor movement
    const xCoord = event.pageX
    const yCoord = event.pageY

    // Follows cursor
    const cursor = document.getElementById('dragCursor')
    cursor.style.opacity = 0.5
    cursor.style.top = yCoord - 50 + 'px'
    cursor.style.left = xCoord - 50 + 'px'
  }

  render = () => (
    <div className="offer">
      <div className="container">
        <div className="row offer__info justify-content-md-center">
          <div className="col-12 col-sm-5 col-md-5">
            <h2 className="offer__title">La clave está en los detalles</h2>
          </div>
          <div className="offer__text col-12 col-md-5">
            <p>La región carecía de una oferta gastronómica de nivel internacional. Es por eso que decidimos combinar materia prima regional de calidad con la mejor cocina, cava y coctelería en un espacio arquitectónico único, atendiendo a la trazabilidad y sustentabilidad de nuestros procesos.</p>
            <p className="offer__reserva">
              <a href="https://www.facebook.com/margotrestostafe/">Reservá tu experiencia</a>
            </p>
          </div>
        </div>
      </div>

      <div className="offer__cards" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseOver={this.handleMouseOver} onFocus={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} ref={this.ref} role="button" aria-hidden="true">
        <IconDrag id="dragCursor" />
        <div className="card">
          <img src={img} alt="respeto"></img>
          <p className="card__title">respeto</p>
          <p className="card__text">Cultivamos nuestra propia huerta sustentable, a la vista del comensal.</p>
        </div>
        <div className="card">
          <img src={img2} alt="exclusividad"></img>
          <p className="card__title">Exclusividad</p>
          <p className="card__text">Diseñamos un espacio único en la región, sofisticado, cálido e íntimo.</p>
        </div>
        <div className="card">
          <img src={img3} alt="calidad"></img>
          <p className="card__title">calidad</p>
          <p className="card__text">Contamos con una colección de los mejores vinos de la Argentina para todos los gustos.</p>
        </div>
        <div className="card">
          <img src={img4} alt="confianza"></img>
          <p className="card__title">confianza</p>
          <p className="card__text">Atendemos de manera personal y cercana a nuestros comensales.</p>
        </div>
        <div className="card">
          <img src={img5} alt="vanguardia"></img>
          <p className="card__title">vanguardia</p>
          <p className="card__text">Nuestra cocina tiene tecnología de punta y usamos técnicas novedosas.</p>
        </div>
        <div className="card">
          <img src={img6} alt="autenticidad"></img>
          <p className="card__title">autenticidad</p>
          <p className="card__text">Nuestros proveedores comparten nuestros valores y respetan la calidad ante todo.</p>
        </div>

        <div className="card">
          <img src={img} alt="respeto"></img>
          <p className="card__title">respeto</p>
          <p className="card__text">Cultivamos nuestra propia huerta sustentable, a la vista del comensal.</p>
        </div>
        <div className="card">
          <img src={img2} alt="exclusividad"></img>
          <p className="card__title">Exclusividad</p>
          <p className="card__text">Diseñamos un espacio único en la región, sofisticado, cálido e íntimo.</p>
        </div>
        <div className="card">
          <img src={img3} alt="calidad"></img>
          <p className="card__title">calidad</p>
          <p className="card__text">Contamos con una colección de los mejores vinos de la Argentina para todos los gustos.</p>
        </div>
        <div className="card">
          <img src={img4} alt="confianza"></img>
          <p className="card__title">confianza</p>
          <p className="card__text">Atendemos de manera personal y cercana a nuestros comensales.</p>
        </div>
        <div className="card">
          <img src={img5} alt="vanguardia"></img>
          <p className="card__title">vanguardia</p>
          <p className="card__text">Nuestra cocina tiene tecnología de punta y usamos técnicas novedosas.</p>
        </div>
        <div className="card">
          <img src={img6} alt="autenticidad"></img>
          <p className="card__title">autenticidad</p>
          <p className="card__text">Nuestros proveedores comparten nuestros valores y respetan la calidad ante todo.</p>
        </div>

        <div className="card">
          <img src={img} alt="respeto"></img>
          <p className="card__title">respeto</p>
          <p className="card__text">Cultivamos nuestra propia huerta sustentable, a la vista del comensal.</p>
        </div>
        <div className="card">
          <img src={img2} alt="exclusividad"></img>
          <p className="card__title">Exclusividad</p>
          <p className="card__text">Diseñamos un espacio único en la región, sofisticado, cálido e íntimo.</p>
        </div>
        <div className="card">
          <img src={img3} alt="calidad"></img>
          <p className="card__title">calidad</p>
          <p className="card__text">Contamos con una colección de los mejores vinos de la Argentina para todos los gustos.</p>
        </div>
        <div className="card">
          <img src={img4} alt="confianza"></img>
          <p className="card__title">confianza</p>
          <p className="card__text">Atendemos de manera personal y cercana a nuestros comensales.</p>
        </div>
        <div className="card">
          <img src={img5} alt="vanguardia"></img>
          <p className="card__title">vanguardia</p>
          <p className="card__text">Nuestra cocina tiene tecnología de punta y usamos técnicas novedosas.</p>
        </div>
        <div className="card">
          <img src={img6} alt="autenticidad"></img>
          <p className="card__title">autenticidad</p>
          <p className="card__text">Nuestros proveedores comparten nuestros valores y respetan la calidad ante todo.</p>
        </div>
      </div>
    </div>
  )
}
export default Offer
