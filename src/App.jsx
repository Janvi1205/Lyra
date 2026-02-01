import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Shades from "./components/Shades";

import Footer from "./components/Footer";
import Mycart from "./components/Mycart";
import { useState, useEffect } from "react";


const App = () => {
  // Using a function inside useState means it only runs ONCE when component mounts (lazy initialization)
  const [cart, setcart] = useState(() => {
    const savedCart = localStorage.getItem('lyra-cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

 
  useEffect(() => {
    localStorage.setItem('lyra-cart', JSON.stringify(cart));
  }, [cart]);

  const addtocart = (shade) => {
    if (cart[shade.product_id]) //chcking if the item exist or not?
    {
      setcart({
        ...cart,    // Copy all existing cart items
        [shade.product_id]: {    //This uses the value of shade.product_id as the key name example-->"M-001": { ... }
          ...cart[shade.product_id],//  // Copy all properties of this item
          quantity: cart[shade.product_id].quantity + 1 // then updates the quantity.
        }
      })
    }
    else {
      setcart({
        ...cart,
        [shade.product_id]: { ...shade, quantity: 1 }
      })
    }

  }
  const removeFromCart = (shade) => {
    if (cart[shade.product_id] && cart[shade.product_id].quantity > 0) {

      if (cart[shade.product_id].quantity === 1) 
      {
        const newCart = { ...cart };
        delete newCart[shade.product_id];
        setcart(newCart)
      } 
      else 
      {
        setcart({
          ...cart,
          [shade.product_id]: {
            ...cart[shade.product_id],
            quantity: cart[shade.product_id].quantity - 1
          }
        })

      }

    }


  }
  return (
    <div className="min-h-screen">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shades" element={<Shades  addtocart={addtocart} removeFromCart={removeFromCart} cart={cart} />} />
        <Route path="/mycart" element={<Mycart cart={cart} removeFromCart={removeFromCart} addtocart={addtocart} />} />
      </Routes>

      <Footer />


    </div>
  );
};

export default App;