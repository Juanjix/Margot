// imagenes
import resto from "../../assets/images/experience/resto.jpg";
import restox2 from "../../assets/images/experience/restox2.jpg";
import popUp from "../../assets/images/experience/pop_up.jpg";
import popUpx2 from "../../assets/images/experience/pop_upx2.jpg";
import event from "../../assets/images/experience/event.jpg";
import eventx2 from "../../assets/images/experience/eventx2.jpg";
import consult from "../../assets/images/experience/consult.jpg";
import consultx2 from "../../assets/images/experience/consultx2.jpg";

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
                  <img src={resto} alt="Menu" srcSet={restox2 + " 2x"}></img>
                  <p className="titulo-exp">restaurante</p>
                  <p>
                    Día a día diseñamos menús degustación diferentes en base a
                    nuestra cosecha y materia prima óptima disponible.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="exp">
                  <img src={popUp} alt="pop-up" srcSet={popUpx2 + " 2x"}></img>
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
                  <img src={event} alt="eventos" srcSet={eventx2 + " 2x"}></img>
                  <p className="titulo-exp">EVENTOS PRIVADOS Y CORPORATIVOS</p>
                  <p>
                    El espacio se encuentra disponible para todo tipo de evento
                    customizado especialmente conforme los deseos del cliente.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="exp">
                  <img
                    src={consult}
                    alt="consultoria"
                    srcSet={consultx2 + " 2x"}
                  ></img>
                  <p className="titulo-exp">consultoría profesional</p>
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
