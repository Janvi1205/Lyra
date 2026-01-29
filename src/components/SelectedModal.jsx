import { IoClose } from "react-icons/io5";
import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'
import { GrSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";



const SelectedModal = ({ isOpen, onClose, shade, addtocart, cart, removeFromCart }) => {

    const modalRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            gsap.fromTo(modalRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out"

                }
            )

            gsap.fromTo(imageRef.current,
                {

                    opacity: 0,
                    scale: 0.4
                },
                {

                    opacity: 1,
                    duration: 0.6,
                    scale: 1,
                    ease: "back.out(1.4)"
                }
            )
            gsap.fromTo(contentRef.current.children,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2
                }
            );
            

        }
    }, [isOpen]);


    if (!isOpen) return null;


    const cartItem = cart[shade.product_id];


    return (
        <div ref={modalRef} className="fixed inset-0 bg-black/90 grid grid-cols-2 items-center  z-50">
            <div className="ml-[30%]">
                <img ref={imageRef} className="h-110 rounded-2xl justify-center flex" src={shade.image} alt="" />
                <IoClose onClick={() => onClose()} className="text-white text-4xl absolute -mt-130 ml-260 cursor-pointer" />

            </div>
            <div ref={contentRef} className="mt-">
                <div><h1 className="text-5xl font-serif  text-white  ml-10">{shade.colorname}</h1></div>
                <div> <p className="text-red-600 text-[25px] font-bold ml-10 mt-1 ">₹{shade.price}</p></div>
                <div>  <p className="w-100 px-3 h-50 ml-8 mt-5 text-gray-300">{shade.description}</p></div>
                <div className="flex ml-11 gap-3 text-white">
                    <p className="text-[20px] " >Finish :</p>
                    <button className="border-red-700  rounded-xl border-2 px-3 mt-1">{shade.category}</button>
                </div>
                <div className="mt-13 ml-10">
                    {cartItem && cart[shade.product_id].quantity > 0 ? (
                        <div   className="bg-white text-black py-2 w-90 justify-center  gap-25  rounded-xl flex cursor-pointer">
                            <button onClick={() => removeFromCart(shade)} className="cursor-pointer "><GrSubtract /></button>
                            <p className="text-2xl w-5">{cartItem.quantity}</p>
                            <button onClick={() => addtocart(shade)} className="text-xl cursor-pointer "><IoAdd /></button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => addtocart(shade)} className="bg-white text-black py-3 px-32 rounded-xl flex cursor-pointer ">Add to cart
                                <p><HugeiconsIcon
                                    className="ml-2  cursor-pointer"
                                    icon={ShoppingBasketFavorite01Icon}
                                    size={20}
                                    color="black"
                                /></p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SelectedModal; 