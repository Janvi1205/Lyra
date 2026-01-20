import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Trendingsection=()=>{


    useLayoutEffect(()=>{
        const lipstick=gsap.utils.toArray(".lip");

        gsap.set(lipstick,       //made all images hidden
            {
                x:100,
                opacity:0
            }
        )

        gsap.set(lipstick[0],    //display only first img
            {
                opacity:1,
                x:0
            }
        )

    let index=0;
    gsap.timeline({repeat:-1}).to({},{
        duration:4,
        onComplete:()=>{
            const current=lipstick[index];
            const next = lipstick[(index+1)% lipstick.length] 

            gsap.to(current,{
                x:-400,
                opacity:0,
                duration:0.8,
                ease:"power3.inOut",
                scale: 0.65
            })

            gsap.set(next,{
                x:400,
                opacity:0,
                 scale: 0.65

            })

            gsap.to(next,{
                x:0,
                opacity:1,
                duration:0.8,
                ease:"power3.inOut",
                scale: 1

            })
            index=(index+1)%lipstick.length;
        }
    })
    },[]);

    return(
        <div className="bg-[#4C0B188C] h-[610px]">
            <div className="flex justify-center mt-10">
                <h1 className="text-white text-3xl mt-10 ">Trending Now </h1>

                
            </div>
            <div className="relative w-[350px] h-[350px] mx-auto   ">
                <img className="lip absolute inset-0" src="/lipstick1.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick2.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick3.png" alt="" />
            </div>

        </div>

    )
}
export default Trendingsection;