import React, { useState, useEffect } from 'react'

// Libraries
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// Components
import Nav from '../../components/menu/'

// Images
import img from '../../assets/images/hero/Img.jpg'
import img2 from '../../assets/images/hero/img2.jpg'
import img3 from '../../assets/images/hero/img3.jpg'

const Hero = () => {
  // ANIMACIÓN
  // Si este estado es true, en Desktop mostramos todas las imagenes.
  // Si es false, no las mostramos.
  const [showAllImages, setShowAllImages] = useState(false)

  const handleScroll = () => {
    const image = document.getElementById('heroImg')
    const imageSize = 352
    const windowWidth = window.innerWidth
    const scrollPosition = window.scrollY

    let delta = (windowWidth - scrollPosition) / imageSize
    console.log(delta)

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

  // Agregamos el oyente del scroll
  useEffect(() => {
    const windowWidth = window.innerWidth

    if (windowWidth >= 1024) {
      document.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()

      return () => document.removeEventListener('scroll', handleScroll)
    }

    return null
  }, [handleScroll])

  const carouselConfig = {
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__scrolling-area">
          <div className="area">
            <Nav />
            <h1 className="text-center font-weight--300">
              En cada plato, <br />
              <span className="font-weight--700">una nueva emoción</span>
            </h1>
            {/* Mobile Carousel:start */}
            <Slider className="hero__carousel d-md-none" {...carouselConfig}>
              <img src={img} alt="Margot" />
              <img src={img2} alt="Margot" />
              <img src={img3} alt="Margot" />
            </Slider>
            {/* Mobile carousel:end */}

            {/* Desktop images with animation:start */}
            <div className="hero__images d-none d-md-flex">
              <img className={showAllImages ? 'img visible' : 'img'} src={img2} alt="Margot" />
              <img id="heroImg" src={img} alt="Margot" />
              <img className={showAllImages ? 'img visible' : 'img'} src={img3} alt="Margot" />
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
