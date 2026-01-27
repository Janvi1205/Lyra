import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Shades from "./components/Shades";
import lipstickdata from "./data/LipstickData";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shades" element={<Shades data={lipstickdata}/>} />
      </Routes>

      <Footer/>

     
    </div>
  );
};

export default App;