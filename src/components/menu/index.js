import { useState } from 'react'

//Logo
import logo from '../../assets/images/menu/Logo.svg'

const Menu = () => {
  const [activo, setActivo] = useState(false)

  const toggleMenu = () => {
    setActivo(!activo)
  }

  return (
    <nav className="menu">
      <div className="menu__links-lenguajes d-none d-md-flex align-items-center">
        <a href="/">Es</a>
        <div className="separador"></div>
        <a href="/en">En</a>
      </div>

      <a className="menu__logo" href="/" title="Logo">
        <img src={logo} alt="Margot" />
      </a>

      <button className={activo ? 'menu__toggler menu__toggler--activo' : 'menu__toggler'} type="button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a href="/" className="menu__button-reserva d-none d-md-flex button button__primary">
        Hacer Reserva
      </a>

      <div className={activo ? 'menu__content menu__content--activo' : 'menu__content'}>
        <div className="footer">
          <div className="container">
            <div className="row justify-content-between text-center text-sm-left">
              <div className="menu__reserva d-sm-flex flex-wrap col-12 col-sm-6">
                <div>
                  <a className="button button__primary" href="/">
                    Hacer reserva
                  </a>
                </div>

                <div className="menu__links-lenguajes d-none d-sm-flex align-items-center align-self-end">
                  <a href="/">Es</a>
                  <div className="separador"></div>
                  <a href="/en">En</a>
                </div>
              </div>
              <div className="direccion col-12 col-sm-6 col-md-5">
                <div>
                  <p>Talcahuano 6960 (S3004JEL) Santa Fe, Provincia de Santa Fe, Argentina</p>
                  <p>+54 9 3425 66-2175</p>
                  <p>contacto@margot.com</p>
                </div>
                <div>
                  <ul className="media button__secondary justify-content-center justify-content-sm-start">
                    <li>
                      <a href="https://www.instagram.com/margot_e.c/?hl=en">INSTAGRAM</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/margotrestostafe/">FACEBOOK</a>
                    </li>
                  </ul>

                  <div className="menu__links-lenguajes d-flex d-sm-none align-items-center justify-content-center">
                    <a href="/">Es</a>
                    <div className="separador"></div>
                    <a href="/en">En</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
