import img from "../../assets/images/spa/Rodrigo.jpg";
import img2 from "../../assets/images/spa/Gabriel.jpg";
import img3 from "../../assets/images/spa/Monique.jpg";
import icon_back from "../../assets/icons/Icons/Arrow/Back.svg";
import icon_next from "../../assets/icons/Icons/Arrow/Next.svg";

const Spa = () => {
  return (
    <section className="spa">
      <div className="container">
        <div className="carousel slide">
          {/* PRIMERA CARD */}
          <div className="spa-card">
            {/* CARD INFO */}
            <div className="spa-text">
              <p>
                Margot és un SPA GASTRONÓMICO, un lugar ideado a la perfección
                con una propuesta única en Argentina. Producto autóctono y
                técnicas precisas en un marco de estilo y confort.
              </p>
            </div>
            <div className="spa-info">
              <div className="spa-img">
                <img src={img} alt="Rodrigo Calderón"></img>
              </div>
              <div className="data">
                <p className="name">Rodrigo Calderón</p>
                <p className="job">Sommelier</p>
              </div>
            </div>
            {/* CARD CONTROLS */}
            <div className="controls">
              <img src={icon_back} alt="icon-back"></img>
              <img src={icon_next} alt="icon-next"></img>
            </div>
          </div>
        </div>
        <div className="carousel slide">
          {/* PRIMERA CARD */}
          <div className="spa-card">
            {/* CARD INFO */}
            <div className="spa-text">
              <p>
                La fermentación coloca a los alimentos en un lugar único entre
                lo crudo y lo cocido. Margot produce e incorpora alimentos
                fermentados a su carta, dejando a sus platos en ese lugar único
                que solo los microorganismos saben hacer. Curiosidad e
                innovación con conocimiento.
              </p>
            </div>
            <div className="spa-info">
              <div className="spa-img">
                <img src={img2} alt="Gabriel Vinderola"></img>
              </div>
              <div className="data">
                <p className="name">dr. Gabriel Vinderola</p>
                <p className="job">Investigador Principal CONICET</p>
              </div>
            </div>
            {/* CARD CONTROLS */}
            <div className="controls">
              <img src={icon_back} alt="icon-back"></img>
              <img src={icon_next} alt="icon-next"></img>
            </div>
          </div>
        </div>
        <div className="carousel slide">
          {/* PRIMERA CARD */}
          <div className="spa-card">
            {/* CARD INFO */}
            <div className="spa-text">
              <p>
                One of the coolest places in Santa Fe. Thank you for delicious,
                unique menu and hospitality 💚 Much love friends 😍
              </p>
            </div>
            <div className="spa-info">
              <div className="spa-img">
                <img src={img3} alt="Miss monique"></img>
              </div>
              <div className="data">
                <p className="name">Miss monique</p>
                <p className="job">DJ</p>
              </div>
            </div>
            {/* CARD CONTROLS */}
            <div className="controls">
              <img src={icon_back} alt="icon-back"></img>
              <img src={icon_next} alt="icon-next"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spa;
