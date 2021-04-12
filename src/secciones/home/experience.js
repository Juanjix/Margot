import resto from "../../assets/images/experience/Img.jpg";
import popUp from "../../assets/images/experience/Img2.jpg";
import event from "../../assets/images/experience/Img3.jpg";
import consult from "../../assets/images/experience/Img4.jpg";

const Experience = () => {
  return (
    <section className="container">
      <div className="exp-title">
        <h4>CADA OCASIÓN, UNA NUEVA EXPERIENCIA</h4>
      </div>
      <div className="experience-container">
        <div className="prueba">
          <img src={resto}></img>
          <p className="">restaurante</p>
          <p>
            Día a día diseñamos menús degustación diferentes en base a nuestra
            cosecha y materia prima óptima disponible.
          </p>
        </div>
        <div className="prueba">
          <img src={popUp}></img>
          <p>pop up</p>
          <p>
            Invitamos a los principales referentes gastronómicos de la Argentina
            para que apliquen su creatividad sobre nuestros productos locales.
          </p>
        </div>
        <div className="prueba">
          <img src={event}></img>
          <p>EVENTOS PRIVADOS Y CORPORATIVOS</p>
          <p>
            El espacio se encuentra disponible para todo tipo de evento
            customizado especialmente conforme los deseos del cliente.
          </p>
        </div>
        <div className="prueba">
          <img src={consult}></img>
          <p>Consultoría profesional</p>
          <p>
            Ofrecemos asesoramiento personalizado para emprendimientos
            gastronómicos o afines al rubro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
