import About from "./components/About";
import Hero from "./components/hero"
import Navbar from "./components/Nav"
import Trendingsection from "./components/Trendingsection";
import testimonials from "./data/testimonials";
import Testimonial from "./components/Testimonials";

const App=()=>{
  return(
    <div>
      <Navbar/>
       <Hero/>
       <About/>
       <Trendingsection/>
       <Testimonial data={testimonials}/>

    </div>

  )
}
export default App;