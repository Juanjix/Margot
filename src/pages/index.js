// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import Experience from "../secciones/home/experience";
import Sustentable from "../secciones/home/sustentable";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Sustentable />
      <Footer />
    </Layout>
  );
};

export default Home;
