import img from "../../assets/images/revolucion/agustin_baragiola.jpg";

const Revolucion = () => {
  return (
    <div className="revolucion">
      <div className="container">
        <div className="revolucion__image">
          <img src={img} alt="Agustin Baragiola"></img>
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
