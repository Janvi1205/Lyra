import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Shades = ({ data }) => {
    const gridRef = useRef(null);

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
                <h1 className="text-white text-4xl justify-center flex mt-10 font-serif">OUR</h1>
                <h2 className="text-white text-4xl justify-center flex mt-4 font-serif">PREMIUM COLLECTION</h2>
            </div>

            <div className="flex justify-center mt-28">
                <div ref={gridRef} className=" grid grid-cols-5 gap-8 space-y-4 ">
                    {data.map((elem) => (
                        <div className="lips-card">
                            <div className="bg-white h-80 w-60">
                                <h1>{elem.brand}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}
export default Shades;