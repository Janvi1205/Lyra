import Hero from "./hero";
import About from "./About";
import Trendingsection from "./Trendingsection";
import Testimonial from "./Testimonials";
import testimonials from "../data/testimonials";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="trending">
        <Trendingsection />
      </section>

      <section id="testimonials">
        <Testimonial data={testimonials} />
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  );
};

export default HomePage;