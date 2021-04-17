// Layout
import Layout from "../layouts/layout-primary";

// Secciones
import Footer from "../components/footer/footer";
import Experience from "../secciones/home/experience";
import Sustentable from "../secciones/home/sustentable";
import Testimonials from "../secciones/home/testimonials";
import Offer from "../secciones/home/offer";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Sustentable />
      <Offer />
      <Experience />
      <Testimonials />
      <Footer />
    </Layout>
  );
};

export default Home;
