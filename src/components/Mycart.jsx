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
        <div className="mycart-bg px-22 py-20  min-h-screen">
            <div>
                <h1 className="text-white text-4xl  font-serif">Your Cart</h1>
            </div>
            <div className="flex gap-30">
                
                <div className="flex flex-col gap-3 mt-14">
                    {cartItems.map((item) => (
                        <div className="h-47 w-180 ml-4 cart-item  rounded-2xl  ">
                            <div className="items-center" >
                                <img className="h-37 rounded-2xl" src={item.image} alt="" />

                            </div>
                            <div className=" w-80">
                                <h1 className="text-white text-2xl font-medium">{item.colorname}</h1>
                                <p className="text-gray-400 text-md mt-2">Finish:{item.category}</p>

                                <p className="text-green-500 text-sm mt-3 font-medium">In stock</p>
                                <div className="flex items-center mt-6 gap-2 text-sm text-gray-400">
                                    <div><FaTruck /></div>
                                    <p>Delivery by {formattedDate} </p>
                                </div>

                            </div>
                            <div className="ml-35 mt-1 w-30  " >
                                <p className="text-white text-xl flex justify-center ">₹{item.price * item.quantity}</p>
                                <div className="qty-btn  mt-9 flex justify-between items-center">
                                    <button onClick={() => removeFromCart(item)} className="text-md cursor-pointer"><GrSubtract /></button>
                                    <p className="ml-1">{item.quantity}</p>
                                    <button onClick={() => addtocart(item)} className="text-lg cursor-pointer"><IoAdd /></button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                <div className=" p-6 order-summary w-90 mt-14 h-100 ">
                    <h1 className="text-white font-serif text-2xl">Order Summary</h1>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm ">Subtotal</p>
                        <p className="text-[#b5b5b5] text-sm">{Subtotalvalue}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm ">Shipping</p>
                        <p className="text-[#b5b5b5] text-sm">Free</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-[#b5b5b5] text-sm ">Handling</p>
                        <p className="text-[#b5b5b5] text-sm">{handlingfee}</p>
                    </div>
                    <hr  className="text-gray-700 mt-5" />
                    <div  className="mt-3 flex items-center justify-between">
                        <p className="text-white text-xl ">Total</p>
                        <p className="text-white text-lg">{Subtotalvalue+handlingfee}</p>
                    </div>
                    <div className="mt-5">
                        <button className="checkout-btn flex items-center justify-center">
                             <FaLock />
                           <p className="ml-2"> Checkout Securely</p>
                           

                        </button>
                    </div>
                    <div className="">
                        <Link to="/shades">
                           <button className="continue-btn mt-3">Continue Shopping</button>
                        </Link>
                    </div>
                    
                </div>
            </div>

        </div>

    )
}
export default Mycart;