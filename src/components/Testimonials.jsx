import { useEffect, useState } from "react";

const Testimonials = ({ data }) => {
    const [index, setIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    
    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(2); 
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2); 
            } else {
                setItemsToShow(3); 
            }
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

   
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex + itemsToShow >= data.length) {
                    return 0;
                }
                return prevIndex + itemsToShow;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [data, itemsToShow]);

    const visibleTestimonials = data.slice(index, index + itemsToShow);

    return (
        <div className="bg-[#7f0d247e] min-h-[570px] py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-center text-white mb-8 sm:mb-12 lg:mb-16">
                What They Say
            </div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-20">
                {visibleTestimonials.map((item, idx) => (
                    <div 
                        key={idx}
                        className="glass-card rounded-3xl p-6 sm:p-7 lg:p-9 min-h-[200px] sm:min-h-[250px] flex flex-col"
                    >
                        <h2 className="text-white text-lg sm:text-xl font-semibold">
                            {item.name}
                        </h2>
                        <h3 className="text-white text-sm sm:text-base mt-1 opacity-80">
                            {item.role}
                        </h3>
                        <p className="text-white text-sm sm:text-base mt-3 flex-grow">
                            {item.review}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;