import img from "../../assets/images/spa/Rodrigo.jpg";
import img2 from "../../assets/images/spa/Gabriel.jpg";
import img3 from "../../assets/images/spa/Monique.jpg";
import icon_back from "../../assets/icons/Icons/Arrow/Back.svg";
import icon_next from "../../assets/icons/Icons/Arrow/Next.svg";

const Testimonials = () => {
  return (
    <section className="spa">
      <div className="container">
        {/* Testimonio 1:start */}
        <div className="testimonio">
          <div className="testimonio__frase font-weight--500">
            <p>
              Margot és un SPA GASTRONÓMICO, un lugar ideado a la perfección con
              una propuesta única en Argentina. Producto autóctono y técnicas
              precisas en un marco de estilo y confort.
            </p>

            <p className="testimonio__autor d-none d-md-flex align-items-center color--olivo">
              <span className="font-weight--600">Rodrigo Calderón</span>
              <div className="separador d-flex bg--olivo"></div>
              Sommelier
            </p>
          </div>

          <img
            className="testimonio__imagen"
            src={img}
            alt="Rodrigo Calderón"
          />

          <p className="testimonio__autor d-md-none color--olivo">
            <span className="font-weight--600">Rodrigo Calderón</span>
            Sommelier
          </p>
        </div>
        {/* Testimonio 1:end */}
      </div>
    </section>
  );
};

export default Testimonials;
