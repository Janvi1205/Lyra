import { IoClose } from "react-icons/io5";
import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'


const SelectedModal = ({ isOpen, onClose, shade }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 grid grid-cols-2 items-center  z-50">
            <div className="ml-[30%]">
                <img className="h-110 rounded-2xl justify-center flex" src={shade.image} alt="" />
                <IoClose onClick={() => onClose()} className="text-white text-4xl absolute -mt-130 ml-260 cursor-pointer" />

            </div>
            <div className="text-white">
                <div><h1 className="text-5xl font-serif -mt-6  ml-10">{shade.colorname}</h1></div>
                <div> <p className="text-red-600 text-[25px] font-bold ml-10 mt-1 ">₹{shade.price}</p></div>
                <div>  <p className="w-100 px-3  ml-8 mt-5 text-gray-300">{shade.description}</p></div>
                <div className="flex mt-8 ml-11 gap-3">
                    <p className="text-[20px] " >Finish :</p>
                    <button className="border-red-700 rounded-xl border-2 px-3 mt-1">{shade.category}</button>
                </div>
                <div className="mt-10 ml-10">
                    <button className="bg-white text-black py-3 px-32 rounded-xl flex cursor-pointer ">Add to cart
                        <p>  <HugeiconsIcon
                            className="ml-2  cursor-pointer"
                            icon={ShoppingBasketFavorite01Icon}
                            size={20}
                            color="black"
                        /></p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SelectedModal; 