import About from "./components/About";
import Hero from "./components/hero"
import Navbar from "./components/Nav"
import Trendingsection from "./components/Trendingsection";

const App=()=>{
  return(
    <div>
      <Navbar/>
       <Hero/>
       <About/>
       <Trendingsection/>

    </div>

  )
}
export default App;