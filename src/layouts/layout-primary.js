// Libraries
// import Helmet from "react-helmet";

// Styles
import "../assets/styles/main.scss";

const Layout = (props) => {
  return (
    <main>
      {/* <Helmet> */}
      <title>Margot</title>
      <meta
        name="description"
        content="Amamos lo que hacemos e invertimos todo nuestro tiempo y energía en una constante y perpetua búsqueda de la perfección. Por eso diseñamos un espacio de exploración gastronómica donde ofrecemos cocina auténtica e innovadora basada en productos locales de calidad."
      />
      {/* </Helmet> */}
      {props.children}
    </main>
  );
};

export default Layout;
