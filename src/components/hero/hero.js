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
  // Ref crea una referencia que podemos usar para
  // manipular un elemento. Funciona de manera similar a document.getElementById
  const ref = React.createRef()

  const handleScroll = () => {
    const windowWidth = window.innerWidth
    const imageSize = 328
    const scrollPosition = window.scrollY

    const delta = (windowWidth - scrollPosition) / 328

    if (scrollPosition <= windowWidth && delta >= 1) {
      if (ref.current) {
        ref.current.style.transform = 'scale(' + delta + ')'
      }
    }
  }

  // Agregamos el oyente del scroll
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

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

            <div className="hero__imagenes">
              <img ref={ref} src={img} alt="Margot" />
            </div>
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
