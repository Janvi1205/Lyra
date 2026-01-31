import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ShadeModal from "./SelectedModal"
import { FaFilter } from "react-icons/fa";



const Shades = ({ data, addtocart, cart, removeFromCart }) => {
    const gridRef = useRef(null);

    const [selectedShade, setSelectedShade] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredData = data.filter((item) => {
        if (selectedFilter === "all") {
            return true; // show all items
        }
        // Check if item's category matches selected filter
        return item.category?.toLowerCase() === selectedFilter;
    });



    const handleclick = (shade) => {
        setSelectedShade(shade);
        setIsModalOpen(true);

    }
    const closemodal = () => {
        setIsModalOpen(false);
        setSelectedShade(null);

    }
    useEffect(() => {
        const ctx = gsap.context(() => {

            const allcards = gsap.utils.toArray(".lips-card");
            const rowsize = 5;

            for (let i = 0; i < allcards.length; i += rowsize) {
                const row = allcards.slice(i, i + rowsize);// specific row of 5 cards: [0, 1, 2, 3, 4]

                const center = row[2];
                const neighbors = [row[1], row[3]];
                const edges = [row[0], row[4]];


                const t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: center,
                        start: "top 100%",
                        end: "top 2%",
                        scrub: 1,
                    }
                })

                t1.from(center, {
                    y: 150,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                })
                    .from(neighbors, {
                        y: 150,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out"

                    }, "-=0.8")

                    .from(edges, {
                        y: 150,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out"

                    }, "-=0.8")
            }
        }, gridRef);

        var t = gsap.timeline();
        t.fromTo(".text-animate",
            {
                y: 60,
                opacity: 0,
                letterSpacing: "0.5em"
            },
            {
                y: 0,
                opacity: 1,
                letterSpacing: "normal",
                stagger: 0.2,
                duration: 1.2,
                ease: "power3.out"


            }
        )
        return () => ctx.revert();
    }, []);






    return (
        <div className="relative" >

            <div className="flex justify-end relative mt-16 mr-25">
                <div className=" ml-40 absolute items-center flex ">
                   
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                        className="bg-white/10 text-white p-3 rounded-full border border-white/20 hover:bg-white/20"
                    >
                       <FaFilter />

                    </button>

                    {/* Dropdown Menu - Only shows when isDropdownOpen is true */}
                    {isDropdownOpen && (
                        <div className="absolute flex right-12 w-90 bg-zinc-900 border border-white/20 rounded-2xl overflow-hidden">

                            {/* Option 1: All */}
                            <button
                                onClick={() => {
                                    setSelectedFilter("all"); // Set filter to "all"
                                    setIsDropdownOpen(false); // Close dropdown
                                }}
                                className="w-full px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                All
                            </button>

                            {/* Option 2: Matte */}
                            <button
                                onClick={() => {
                                    setSelectedFilter("matte"); // Set filter to "matte"
                                    setIsDropdownOpen(false); // Close dropdown
                                }}
                                className="w-full px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Matte
                            </button>

                            {/* Option 3: Velvet */}
                            <button
                                onClick={() => {
                                    setSelectedFilter("velvet"); // Set filter to "velvet"
                                    setIsDropdownOpen(false); // Close dropdown
                                }}
                                className="w-full px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Velvet
                            </button>

                            {/* Option 4: Satin */}
                            <button
                                onClick={() => {
                                    setSelectedFilter("satin"); // Set filter to "satin"
                                    setIsDropdownOpen(false); // Close dropdown
                                }}
                                className="w-full px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Satin
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-[10%]">
                <h1 className="text-white text-animate text-5xl justify-center flex mt-10 font-serif">WHERE COLOR</h1>
                <h1 className="text-white text-animate text-5xl justify-center flex mt-4 font-serif">BECOMES CONFIDENCE</h1>
                <p className="text-gray-300 text-animate text-lg justify-center flex mt-5 ">Explore our full spectrum of shades designed to enhance your natural beauty</p>
                <p className="text-gray-300 text-animate text-lg justify-center flex "> from subtle whispers of color to bold declarations of self-expression</p>
            </div>




            <div className="flex justify-center mt-28">
                <div ref={gridRef} className=" grid grid-cols-5 gap-8 space-y-12 ">
                    {filteredData.map((elem) => (
                        <div className="lips-card cursor-pointer " onClick={() => handleclick(elem)}>
                            <div className=" h-90 w-60 rounded-2xl flex flex-col overflow-hidden group relative">

                                <img className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={elem.image} alt="" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-2xl font-semibold text-center px-4">{elem.colorname}</h3>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <ShadeModal
                isOpen={isModalOpen}
                onClose={closemodal}
                shade={selectedShade}
                addtocart={addtocart}
                cart={cart}
                removeFromCart={removeFromCart}
            />

        </div>

    )
}
export default Shades;