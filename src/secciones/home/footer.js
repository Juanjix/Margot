import Logo from '../../assets/icons/icon-logo.inline.svg'

const Footer = () => {
  return (
    /*
      JUANSO
      1) En HTML, los footers tienen una etiqueta dedicada <footer></footer>. Usémosla.

      2) También, fijate que estás "envolviendo" al footer dentro del <container></container>,
      y esto va a hacer que tu footer tenga un ancho máximo. Tu <container></container> debería estar dentro de la etiqueta <footer></footer> de esta manera:

      <footer className="footer">
        <div className="container">
          [el contenido de tu footer]
        </div>
      </footer>
    */
    <div className="container">
      <div className="footer">
        <div>
          <img src={Logo} alt="image" width="106px" height="16px"></img>
          <h3 className="titulo">EN CADA PLATO UNA EMOCION</h3>
          <button className="button-primary">HACER RESERVA</button>
        </div>

        <div>
          <div>
            <p>Talcahuano 6960 (S3004JEL) Santa Fe, Provincia de Santa Fe, Argentina</p>
            <p>+54 9 3425 66-2175</p>
            <p>contacto@margot.com</p>
          </div>
          <div>
            <ul className="media">
              <li>
                <a href="https://www.instagram.com/margot_e.c/?hl=en">INSTAGRAM</a>
              </li>
              <li>
                <a href="https://www.facebook.com/margotrestostafe/">FACEBOOK</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="brand">
          <p>© MARGOT 2021</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
