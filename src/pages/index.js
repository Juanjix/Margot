// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Hero from "../secciones/home/hero";
import Footer from "../secciones/home/footer";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      {/* <Hero /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
