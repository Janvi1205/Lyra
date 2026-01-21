import About from "./components/About";
import Hero from "./components/hero"
import Navbar from "./components/Nav"
import Trendingsection from "./components/Trendingsection";
import testimonials from "./data/testimonials";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";

const App=()=>{
  return(
    <div>
      <Navbar/>
       <Hero/>
       <About/>
       <Trendingsection/>
       <Testimonial data={testimonials}/>
       <Footer/>

    </div>

  )
}
export default App;