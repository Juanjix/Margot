import Logo from "../../assets/icons/icon-logo.inline.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <img src={Logo} alt="image" width="106px" height="16px"></img>
        <div>
          <h3>EN CADA PLATO UNA EMOCION</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
