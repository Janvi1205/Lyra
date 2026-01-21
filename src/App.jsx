import About from "./components/About";
import Hero from "./components/hero"
import Navbar from "./components/Nav"
import Trendingsection from "./components/Trendingsection";
import testimonials from "./data/testimonials";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";
import { useRef } from "react";

const App=()=>{

  const secref=useRef(null);
  const homeref=useRef(null);
  return(
    <div>
      <Navbar secref={secref} homeref={homeref}/>
       <Hero homeref={homeref}/>
       <About secref={secref}/>
       <Trendingsection/>
       <Testimonial data={testimonials}/>
       <Footer/>

    </div>

  )
}
export default App;