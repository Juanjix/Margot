import resto from "../../assets/images/experience/Img.jpg";
import popUp from "../../assets/images/experience/Img2.jpg";
import event from "../../assets/images/experience/Img3.jpg";
import consult from "../../assets/images/experience/Img4.jpg";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <div className="exp-title">
          <h4>CADA OCASIÓN, UNA NUEVA EXPERIENCIA</h4>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="row">
              <div className="col-12 col-sm-6">
                {/* Diferentes experiencias */}
                <div className="exp">
                  <img src={resto} alt="Menu"></img>
                  <p className="titulo-exp">restaurante</p>
                  <p>
                    Día a día diseñamos menús degustación diferentes en base a
                    nuestra cosecha y materia prima óptima disponible.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="exp">
                  <img src={popUp} alt="pop-up"></img>
                  <p className="titulo-exp">POP UP</p>
                  <p>
                    Invitamos a los principales referentes gastronómicos de la
                    Argentina para que apliquen su creatividad sobre nuestros
                    productos locales.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="exp">
                  <img src={event} alt="eventos"></img>
                  <p className="titulo-exp">EVENTOS PRIVADOS Y CORPORATIVOS</p>
                  <p>
                    El espacio se encuentra disponible para todo tipo de evento
                    customizado especialmente conforme los deseos del cliente.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="exp">
                  <img src={consult} alt="consultoria"></img>
                  <p className="titulo-exp">CONSULTORIA PROFESIONAL</p>
                  <p>
                    Ofrecemos asesoramiento personalizado para emprendimientos
                    gastronómicos o afines al rubro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
