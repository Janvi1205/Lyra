import { useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const Testimonials = ({ data }) => {

    const [index, setIndex] = useState(0); // starting point
    const ITEMS_TO_SHOW = 3;
    

    // change testimonials every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => {
                // if next 3 go out of range, reset to 0
                if (prevIndex + ITEMS_TO_SHOW >= data.length) {
                    return 0;
                }
                // otherwise move to next 3
                return prevIndex + ITEMS_TO_SHOW;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [data]);


   

    // pick only 3 testimonials to show
    const visibleTestimonials = data.slice(
        index,
        index + ITEMS_TO_SHOW
    );
    return (
        <div className="bg-[#7f0d247e] h-[340px]  gap-20 p-20 flex ">
            {visibleTestimonials.map((item) => (
                <div className="glass-card h-55 rounded-3xl w-100 p-9">
                    <h2 className="text-white">{item.name}</h2>
                    <h3 className="text-white mt-1">{item.role}</h3>
                    <p className="text-white mt-3">{item.review}</p>

                </div>
            ))}



        </div>

    )
}
export default Testimonials;