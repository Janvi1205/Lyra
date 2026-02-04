import { FaTruck } from "react-icons/fa";
import { GrSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Mycart = ({ cart, addtocart, removeFromCart }) => {

    const cartItems = Object.values(cart);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const formattedDate = deliveryDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });

    const Subtotalvalue=cartItems.reduce((sum,val)=>sum+(val.price*val.quantity),0);

    const handlingfee=99;

    return (
        <div className="mycart-bg px-4 sm:px-8 lg:px-22 py-20 -mt-15 min-h-screen">
            <div>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl mt-10 font-serif">Your Cart</h1>
            </div>
            {cartItems.length==0?(
                <div className="items-center mt-[50%] lg:mt-[15%] flex justify-center flex-col">
                    <h1 className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl text-center px-4">Oops! nothing in the cart</h1>
                    <Link to="/shades" onClick={() => window.scrollTo(0, 0)}>
                         <button className="shopping-btn checkout-btn:hover mt-6">Start Shopping</button>
                    </Link>
                </div>
            ):
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-30">
                
                <div className="flex flex-col gap-3 mt-14 w-full lg:flex-1">
                    {cartItems.map((item) => (
                        <div className="cart-item cart-item:hover rounded-2xl p-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <div className="flex-shrink-0 mx-auto sm:mx-0">
                                <img className="h-40 sm:h-37 w-32 sm:w-auto rounded-2xl object-cover" src={item.image} alt="" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h1 className="text-white text-xl sm:text-2xl font-medium">{item.colorname}</h1>
                                <p className="text-gray-400 text-sm sm:text-md mt-2">Finish: {item.category}</p>
                                <p className="text-green-500 text-sm mt-3 font-medium">In stock</p>
                                <div className="flex items-center justify-center sm:justify-start mt-4 sm:mt-6 gap-2 text-sm text-gray-400">
                                    <div><FaTruck /></div>
                                    <p>Delivery by {formattedDate}</p>
                                </div>
                            </div>
                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-0 sm:w-30">
                                <p className="text-white text-lg sm:text-xl">₹{item.price * item.quantity}</p>
                                <div className="qty-btn flex justify-between items-center gap-3 sm:gap-4 sm:mt-9">
                                    <button onClick={() => removeFromCart(item)} className="text-md cursor-pointer"><GrSubtract /></button>
                                    <p className="text-white min-w-[20px] text-center">{item.quantity}</p>
                                    <button onClick={() => addtocart(item)} className="text-lg cursor-pointer"><IoAdd /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="p-6 order-summary w-full lg:w-90 mt-8 lg:mt-14 h-auto lg:h-100 mx-auto lg:mx-0 max-w-md lg:max-w-none">
                    <h1 className="text-white font-serif text-xl sm:text-2xl">Order Summary</h1>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm">Subtotal</p>
                        <p className="text-[#b5b5b5] text-sm">₹{Subtotalvalue}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm">Shipping</p>
                        <p className="text-[#b5b5b5] text-sm">Free</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm">Handling</p>
                        <p className="text-[#b5b5b5] text-sm">₹{handlingfee}</p>
                    </div>
                    <hr className="text-gray-700 mt-5" />
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-white text-lg sm:text-xl">Total</p>
                        <p className="text-white text-base sm:text-lg">₹{Subtotalvalue+handlingfee}</p>
                    </div>
                    <div className="mt-5">
                        <button className="checkout-btn checkout-btn:hover flex items-center justify-center w-full">
                             <FaLock />
                           <p className="ml-2">Checkout Securely</p>
                        </button>
                    </div>
                    <div>
                        <Link to="/shades">
                           <button className="continue-btn continue-btn:hover mt-3 w-full">Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            </div>
            }
        </div>
        
    )
}
export default Mycart;