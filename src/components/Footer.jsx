import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
           
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
              
                
                    <div className="lg:w-1/4">
                        <img className="h-24 sm:h-28 lg:h-30 -ml-8 sm:-ml-4 lg:-ml-10" src="/Lyra.png" alt="Lyra Logo" />
                        <p className="text-gray-300 text-sm sm:text-base font-serif -mt-3 lg:-mt-5">
                            Luxury lipsticks crafted with the finest
                        </p> 
                        <p className="text-gray-300 text-sm sm:text-base font-serif">
                            ingredients for the modern woman.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
                       
                      
                        <div>
                            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">SHOP</h3>
                            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                               <Link to="/shades" onClick={() => window.scrollTo(0, 0)}>
                                <li className="hover:text-white cursor-pointer transition-colors">All Shades</li>
                               </Link>
                                <li className="hover:text-white cursor-pointer mt-2 transition-colors">Best Sellers</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Sets & Gifts</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Accessories</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">COMPANY</h3>
                            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                            </ul>
                        </div>

                        
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">SUPPORT</h3>
                            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 sm:mt-12 pt-6 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                      
                        <p className="text-gray-500 text-xs order-2 sm:order-1">
                            © 2025 LYRA Cosmetics. All rights reserved.
                        </p>

                        <div className="flex gap-4 sm:gap-6 text-gray-500 text-xs order-3 sm:order-2">
                            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        </div>

                        
                        <div className="flex gap-4 order-1 sm:order-3">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 border border-gray-600 rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-black cursor-pointer transition-all">
                                <span className="text-gray-400 text-xs hover:text-black">in</span>
                            </div>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 border border-gray-600 rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-black cursor-pointer transition-all">
                                <span className="text-gray-400 text-xs hover:text-black">𝕏</span>
                            </div>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 border border-gray-600 rounded flex items-center justify-center hover:border-white hover:bg-white hover:text-black cursor-pointer transition-all">
                                <span className="text-gray-400 text-xs hover:text-black">f</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer