import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Shades from "./components/Shades";
import lipstickdata from "./data/LipstickData";


const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shades" element={<Shades data={lipstickdata}/>} />
      </Routes>

     
    </div>
  );
};

export default App;