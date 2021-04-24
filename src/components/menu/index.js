import react, { useState } from 'react'

import logo from '../../assets/images/menu/Logo.svg'

const Nav = () => {
  const [activo, setActivo] = useState(false)

  function toggleMenu() {
    setActivo(!activo)
  }

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__logo">
          <img src={logo} alt="logo"></img>

          <div className="menu__hamburger" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        <div className={activo ? 'menu__info activo' : 'menu__info'}>
          <button className="button button__primary">hacer reserva</button>
          <p>Talcahuano 6960 (S3004JEL) Santa Fe, Provincia de Santa Fe, Argentina</p>
          <br></br>
          <p>+54 9 3425 66-2175</p>
          <br></br>
          <p>contacto@margot.com</p>
          <ul className="menu__media">
            <li>
              <a href="https://www.instagram.com/margot_e.c/?hl=en">INSTAGRAM</a>
            </li>
            <li>
              <a href="https://www.facebook.com/margotrestostafe/">FACEBOOK</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
