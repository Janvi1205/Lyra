import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ShadeModal from "./SelectedModal"
import { FaFilter } from "react-icons/fa";
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'






const Shades = ({ addtocart, cart, removeFromCart }) => {
    const gridRef = useRef(null);

    const [selectedShade, setSelectedShade] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [])
    const fetchProducts = async () => {
        try {
            const res = await fetch("https://697f3bf3d1548030ab657af2.mockapi.io/lipstick");
            const data = await res.json();
            setProducts(data);
        }
        catch (err) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    const filteredData = products.filter((item) => {
        if (selectedFilter === "all") {
            return true;
        }

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
            ScrollTrigger.refresh();

            const allcards = gsap.utils.toArray(".lips-card");
            const rowsize = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 3 : 2;

            for (let i = 0; i < allcards.length; i += rowsize) {
                const row = allcards.slice(i, i + rowsize);

                const centerIndex = Math.floor(row.length / 2);
                const center = row[centerIndex];

                const neighbors = [];
                const edges = [];

                if (centerIndex > 0) {
                    neighbors.push(row[centerIndex - 1]);
                }

                if (centerIndex < row.length - 1) {
                    neighbors.push(row[centerIndex + 1]);
                }

                if (row.length >= 3) {
                    if (row[0] && row[0] !== center && !neighbors.includes(row[0])) edges.push(row[0]);
                    if (row[row.length - 1] && row[row.length - 1] !== center && !neighbors.includes(row[row.length - 1])) edges.push(row[row.length - 1]);
                }


                const t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: center,
                        start: "top 100%",
                        end: window.innerWidth === 1024 ? "top 2%" : "top 30%",
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
    }, [products]);





    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center px-4">
                <p className="text-white text-base sm:text-lg lg:text-xl text-center">
                    <Waveform
                        size="35"
                        stroke="3.5"
                        speed="1"
                        color="white"
                    />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center gap-4">
                <p className="text-white text-base sm:text-lg lg:text-xl">
                    Failed to load products
                </p>

                <button
                    className="border px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg text-white
                   cursor-pointer hover:bg-amber-100 hover:text-black transition"
                    onClick={fetchProducts}
                >
                    Retry
                </button>
            </div>
        );
    }


    return (
        <div className="relative px-4 sm:px-6 lg:px-8" >

            <div className="flex justify-end relative mt-8 sm:mt-12 lg:mt-16 mr-4 sm:mr-10 lg:mr-25">
                <div className="ml-0 sm:ml-20 fixed lg:ml-40 z-50  items-center flex">

                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-white/10 text-white p-2 sm:p-3 rounded-full  border border-white/20 hover:bg-white/20 relative z-50"
                    >
                        <FaFilter />

                    </button>


                    {isDropdownOpen && (
                        <div className="absolute mt-60 lg:mt-0  md:mt-0  flex flex-col sm:flex-row right-0 sm:right-12 w-40 sm:w-auto bg-zinc-900 border border-white/20 rounded-2xl overflow-hidden z-50">
                            <button
                                onClick={() => {
                                    setSelectedFilter("all");
                                    setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 sm:px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                All
                            </button>


                            <button
                                onClick={() => {
                                    setSelectedFilter("matte");
                                    setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 sm:px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Matte
                            </button>


                            <button
                                onClick={() => {
                                    setSelectedFilter("velvet");
                                    setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 sm:px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Velvet
                            </button>


                            <button
                                onClick={() => {
                                    setSelectedFilter("satin");
                                    setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 sm:px-6 py-3 text-left text-white hover:bg-white/10"
                            >
                                Satin
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-[50%] sm:mt-[12%] lg:mt-[12%] px-4">
                <h1 className="text-white text-animate text-3xl sm:text-4xl lg:text-6xl justify-center flex mt-10 font-serif text-center">WHERE COLOR</h1>
                <h1 className="text-white text-animate text-3xl sm:text-4xl lg:text-6xl justify-center flex  font-serif text-center">BECOMES CONFIDENCE</h1>
                <p className="text-gray-300 text-animate text-sm sm:text-base lg:text-lg justify-center flex mt-5 text-center px-4">Explore our full spectrum of shades designed to enhance your natural beauty</p>
                <p className="text-gray-300 text-animate text-sm sm:text-base lg:text-lg justify-center flex text-center px-4">from subtle whispers of color to bold declarations of self-expression</p>
            </div>

            <div className="flex justify-center mt-40 sm:mt-20 lg:mt-72">
                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 space-y-6 sm:space-y-8 lg:space-y-12 ">
                    {filteredData.map((elem) => (
                        <div key={elem.id} className="lips-card cursor-pointer" onClick={() => handleclick(elem)}>
                            <div className="h-60 sm:h-72 lg:h-90 w-full sm:w-52 lg:w-60 rounded-2xl flex flex-col overflow-hidden group relative">

                                <img loading="lazy" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40" src={elem.image} alt="" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold text-center px-4">{elem.colorname}</h3>
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