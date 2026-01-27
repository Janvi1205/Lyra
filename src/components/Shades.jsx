import { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import ShadeModal from "./SelectedModal"


const Shades = ({data}) => {
    const gridRef = useRef(null);
    const [selectedShade, setSelectedShade] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleclick=(shade)=>{
        setSelectedShade(shade);
        setIsModalOpen(true);

    }
    const closemodal=()=>{
        setIsModalOpen(false);
        setSelectedShade(null);
    }
    useEffect(() => {
        const ctx = gsap.context(() => {

            const allcards = gsap.utils.toArray(".lips-card");
            const rowsize = 5;

            for (let i = 0; i < allcards.length; i += rowsize) {
                const row = allcards.slice(i, i + rowsize);//// specific row of 5 cards: [0, 1, 2, 3, 4]

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
        return () => ctx.revert();
    }, []);

    return (
        <div className="">
            <div className="mt-[16%]">
                <h1 className="text-white text-5xl justify-center flex mt-10 font-serif">WHERE COLOR</h1>
                <h2 className="text-white text-5xl justify-center flex mt-4 font-serif">BECOMES CONFIDENCE</h2>
                <p  className="text-gray-300 text-lg justify-center flex mt-5 ">Explore our full spectrum of shades designed to enhance your natural beauty</p>
                <p className="text-gray-300 text-lg justify-center flex "> from subtle whispers of color to bold declarations of self-expression</p>
            </div>

            <div className="flex justify-center mt-28">
                <div ref={gridRef} className=" grid grid-cols-5 gap-8 space-y-12 ">
                    {data.map((elem) => (
                        <div className="lips-card cursor-pointer " onClick={()=>handleclick(elem)}>
                            <div className=" h-90 w-60 rounded-2xl flex flex-col overflow-hidden group relative">
                                
                                <img className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"  src={elem.image} alt="" />
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
            />

        </div>

    )
}
export default Shades;