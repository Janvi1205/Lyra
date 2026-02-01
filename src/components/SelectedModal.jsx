import { IoClose } from "react-icons/io5";
import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'
import { GrSubtract } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "../Styled component/Addtocart"



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
        <div ref={modalRef} className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full items-center">

                <div className="flex justify-center relative">
                    <img ref={imageRef} className="h-64 sm:h-80 md:h-96 lg:h-110 rounded-2xl object-cover" src={shade.image} alt="" />
                    <IoClose
                        onClick={() => onClose()}
                        className="text-white text-3xl sm:text-4xl absolute -top-10 right-0 sm:-top-8 sm:right-0 lg:fixed lg:top-6 lg:right-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                </div>


                <div ref={contentRef} className="px-4 lg:px-8 text-center lg:text-left ">
                    <div><h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">{shade.colorname}</h1></div>
                    <div> <p className="text-red-600 text-xl sm:text-2xl lg:text-[25px] font-bold mt-1">₹{shade.price}</p></div>
                    <div ><p className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mt-4 sm:mt-5 text-sm sm:text-base text-gray-300 mx-auto lg:mx-0">{shade.description}</p></div>
                    <div className="flex justify-center lg:justify-start text-center gap-3 text-white mt-4">
                        <p className="text-lg sm:text-[20px]">Finish :</p>
                        <button className="border-red-700 rounded-xl border-2 px-3 py-1 text-sm sm:text-base">{shade.category}</button>
                    </div>
                    <div className="mt-8 sm:mt-10 lg:mt-13">
                        {cartItem && cart[shade.product_id].quantity > 0 ? (
                            <div className="bg-white text-black py-2 sm:py-3 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 justify-center gap-12 sm:gap-20 rounded-xl flex cursor-pointer">
                                <button onClick={() => removeFromCart(shade)} className="cursor-pointer px-2"><GrSubtract /></button>
                                <p className="text-xl sm:text-2xl w-5 text-center">{cartItem.quantity}</p>
                                <button onClick={() => addtocart(shade)} className="text-xl cursor-pointer px-2"><IoAdd /></button>
                            </div>
                        ) : (
                            <div className="flex  justify-center lg:justify-start">
                                <button onClick={() => addtocart(shade)} className="bg-white text-black py-1 px-12 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 sm:px-20 lg:px-24 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                                    <Button/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SelectedModal;