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
    </nav>
  )
}

export default Menu
