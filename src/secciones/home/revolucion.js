import img from "../../assets/images/revolucion/Img.jpg";
import img2 from "../../assets/images/revolucion/Img2.jpg";

const Revolucion = () => {
  return (
    <div className="revolucion">
      <div className="revolucion__image">
        <img src={img} alt="Agustin Baragiola"></img>
      </div>
      <div className="container">
        <div className="revolucion__title">
          <h2>
            “Revolución es cultivar tu propio alimento, amarlo y transformarlo
            en un despertador de conciencia”
          </h2>
          <div className="revolucion__owner">
            <p>
              AGUSTÍN BARAGIOLA<br></br>CHEF & OWNER
            </p>
          </div>
        </div>
      </div>
      <div className="revolucion__image2">
        <img src={img2} alt="Agustin Baragiola" />
      </div>
    </div>
  );
};

export default Revolucion;
