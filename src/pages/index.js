// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Hero from "../secciones/home/hero";
import Footer from "../secciones/home/footer";
import Experience from "../secciones/home/experience";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      {/* <Hero /> */}
      {/* <Footer /> */}
      <Experience />
    </Layout>
  );
};

export default Home;
