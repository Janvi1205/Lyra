import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Shades from "./components/Shades";
import lipstickdata from "./data/LipstickData";
import Footer from "./components/Footer";
import { useState } from "react";


const App = () => {
  const[cart,setcart]=useState({});//i used object for cart instead of array coz it will take o(1) to itereate then get the data whereas array would take o(N)

  const addtocart=(shade)=>{
    if(cart[shade.product_id]) //chcking if the item exist or not?
    {
      setcart({
        ...cart,    // Copy all existing cart items
        [shade.product_id]:{    //This uses the value of shade.product_id as the key name example-->"M-001": { ... }
          ...cart[shade.product_id],//  // Copy all properties of this item
          quantity:cart[shade.product_id].quantity+1 // then updates the quantity.
        }
      })
    }
    else{
      setcart({
        ...cart,
      [shade.product_id]:{...shade,quantity:1}
      })
    }
     
  }

 

 
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shades" element={<Shades data={lipstickdata} addtocart={addtocart} updateqty={updateqty} cart={cart}/>} />
      </Routes>

      <Footer/>

     
    </div>
  );
};

export default App;