// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Footer from "../components/footer/footer";
import Experience from "../secciones/home/experience";
import Sustentable from "../secciones/home/sustentable";
import Testimonials from "../secciones/home/testimonials";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Sustentable />
      <Experience />
      <Testimonials />
      <Footer />
    </Layout>
  );
};

export default Home;
