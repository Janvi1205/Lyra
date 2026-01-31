const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
           
            <div className=" flex justify-between">
          
                <div className="w-1/4 ml-30">
                    <img className="h-30 -ml-10" src="/Lyra.png" alt="" />
                    <p className="text-gray-300 text-md font-serif -mt-5">Luxury lipsticks crafted with the finest</p> 
                    <p className="text-gray-300 text-md font-serif">ingredients for the modern woman.</p>
                </div>

                <div className="flex gap-20 mr-13">
                   
                    <div>
                        <h3 className="text-white font-semibold mb-4">SHOP</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>All Shades</li>
                            <li>Best Sellers</li>
                            <li>Sets & Gifts</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="text-white font-semibold mb-4">COMPANY</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Our Story</li>
                            <li>Sustainability</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Contact Us</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>

         
            <div className=" w-330 ml-20 mt-12 pt-6 border-t border-gray-800 flex justify-between items-center">
               
                <p className="text-gray-500 text-xs">
                    © 2025 LYRA Cosmetics. All rights reserved.
                </p>

                <div className="flex gap-6 text-gray-500 text-xs">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>

             
                <div className="flex gap-4">
                    <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                        <span className="text-gray-400">in</span>
                    </div>
                    <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                        <span className="text-gray-400">𝕏</span>
                    </div>
                    <div className="w-6 h-6 border border-gray-600 rounded flex items-center justify-center">
                        <span className="text-gray-400">f</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer