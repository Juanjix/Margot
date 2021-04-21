// Layout
import Layout from "../layouts/layout-primary";

//components
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";

// Secciones
import Experience from "../secciones/home/experience";
import Sustentable from "../secciones/home/sustentable";
import Testimonials from "../secciones/home/testimonials";
import Offer from "../secciones/home/offer";
//aca voy a importar todas las secciones de mi pagina

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Offer />
      <Sustentable />
      <Experience />
      <Testimonials />
      <Footer />
    </Layout>
  );
};

export default Home;
