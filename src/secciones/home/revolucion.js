import agustin_baragiola from "../../assets/images/revolucion/agustin_baragiola.jpg";
import agustin_baragiolax2 from "../../assets/images/revolucion/agustin_baragiolax2.jpg";

const Revolucion = () => {
  return (
    <div className="revolucion">
      <div className="container">
        <div className="revolucion__image">
          <img
            src={agustin_baragiola}
            alt="Agustin Baragiola"
            srcSet={agustin_baragiolax2 + " 2x"}
          ></img>
        </div>
        <div className="revolucion__title">
          <h3>
            “Revolución es cultivar tu propio alimento, amarlo y transformarlo
            en un despertador de conciencia”
          </h3>
          <p className="revolucion__owner">
            AGUSTÍN BARAGIOLA<br></br>CHEF & OWNER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revolucion;
