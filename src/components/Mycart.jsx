import { FaTruck } from "react-icons/fa";
import { GrSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";

const Mycart = ({ cart, addtocart, removeFromCart }) => {

    const cartItems = Object.values(cart);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const formattedDate = deliveryDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        
    });
    return (
        <div className="mycart-bg px-22 py-20  min-h-screen">
            <div>
                <h1 className="text-white text-4xl  font-serif">Your Cart</h1>
            </div>
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
                                <p>Delivery by {formattedDate } </p>
                            </div>

                        </div>
                        <div className="ml-35 mt-1 w-30  " >
                            <p className="text-white text-xl flex justify-center ">₹{item.price*item.quantity}</p>
                            <div className="qty-btn  mt-9 flex justify-between items-center">
                               <button onClick={addtocart(shade)} className="text-md cursor-pointer"><GrSubtract /></button>
                               <p className="ml-1">{item.quantity}</p>
                               <button className="text-lg cursor-pointer"><IoAdd /></button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>

    )
}
export default Mycart;