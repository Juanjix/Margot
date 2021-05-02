import React, { useState, useEffect } from 'react'

// Components
import Nav from '../../components/menu/'

// Images
import Image1 from '../../assets/images/hero/hero-image-1.png'
import Image12X from '../../assets/images/hero/hero-image-1@2x.png'
// import Image2 from '../../assets/images/hero/hero-image-2.png'
// import Image22X from '../../assets/images/hero/hero-image-2@2x.png'
import Image3 from '../../assets/images/hero/hero-image-3.png'
import Image32X from '../../assets/images/hero/hero-image-3@2x.png'

const Hero = () => {
  // ANIMACIÓN
  // Si este estado es true, en Desktop mostramos todas las imagenes.
  // Si es false, no las mostramos.
  const [showAllImages, setShowAllImages] = useState(false)

  // Agregamos el oyente del scroll
  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById('heroImg')
      const imageSize = 352
      const windowWidth = window.innerWidth
      const windowHeight = window.outerHeight
      const scrollPosition = window.scrollY

      let delta = windowWidth >= 1024 ? (windowWidth - scrollPosition) / imageSize : (windowHeight - scrollPosition) / imageSize

      if (delta > 1 && showAllImages) {
        setShowAllImages(false)
      }

      if (delta <= 1 && !showAllImages) {
        delta = 1 // Redondeo
        setShowAllImages(true)
      }

      if (scrollPosition <= windowWidth && delta >= 1) {
        if (image) {
          image.style.transform = 'scale(' + delta + ')'
        }
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => document.removeEventListener('scroll', handleScroll)
  })

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__scrolling-area">
          <div className="area">
            <Nav />
            <h2 className="text-center font-weight--300">
              En cada plato, <br />
              <span className="font-weight--500">una nueva emoción</span>
            </h2>

            {/* Desktop images with animation:start */}
            <div className="hero__images d-flex justify-content-center">
              <img className={showAllImages ? 'img visible' : 'img'} src={Image1} srcSet={Image12X + ' 2x'} alt="Margot" />
              <div id="heroImg" className="img visible img__animated"></div>
              <img className={showAllImages ? 'img visible' : 'img'} src={Image3} srcSet={Image32X + ' 2x'} alt="Margot" />
            </div>
            {/* Desktop images with animation:end */}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-10">
            <div className="hero__description text-center">
              <p className="font-weight--600">EN MARGOT BUSCAMOS QUE CADA EXPERIENCIA SEA ÚNICA</p>

              <p className="paragraph--large">Amamos lo que hacemos e invertimos todo nuestro tiempo y energía en una constante y perpetua búsqueda de la perfección. Por eso diseñamos un espacio de exploración gastronómica donde ofrecemos cocina auténtica e innovadora basada en productos locales de calidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
