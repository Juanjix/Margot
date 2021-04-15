// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Footer from "../components/footer/footer";
import Experience from "../secciones/home/experience";
import Sustentable from "../secciones/home/sustentable";
import Spa from "../secciones/home/spa";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Experience />
      <Sustentable />
      <Footer />
      <Spa />
    </Layout>
  );
};

export default Home;
