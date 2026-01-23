import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    const vidref = useRef(null);
   
    const aboutref = useRef(null);

    useLayoutEffect(() => {
        gsap.fromTo(
            vidref.current,
            { x: -150, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: aboutref.current,
                    start: "top 80%",
                    scrub:2

                },
            }
        );
        gsap.fromTo(
            aboutref.current,
            {
                x: 40

            },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: aboutref.current,
                    start: "top 80%",
                    scrub:2
                },

            }
        )

       
    }, []);

    return (
        <div id="about" className="flex">
            <div>
                <video ref={vidref} className="h-130 w-140 ml-6  mt-17" autoPlay muted src="/lyraaboutvid.mp4"></video>
            </div>
            <div ref={aboutref} className="mt-11  max-w-3xl">
                <div style={{fontFamily:"Amaranth"}} className="text-white ml-60 text-6xl">About Us</div>
                <p  className="text-white leading-relaxed mt-6 text-lg  ">
                    Born from a love for bold confidence and effortless elegance, Lyra creates lipsticks that celebrate every mood, every moment, and every you. We believe the perfect lipstick doesn’t just complete a look it empowers you to own it.
                </p>
                <p className="text-white leading-relaxed mt-6 text-lg ">
                    Our formulas are thoughtfully crafted with rich pigments, long-lasting comfort, and a smooth, luxurious finish. From everyday nudes to statement reds, each Lyra shade is designed to complement all skin tones and styles.
                </p>
                <p className="text-white leading-relaxed mt-6 text-lg ">We are committed to:</p>
                <p className="text-white leading-relaxed mt-4 ml-10 text-lg">
                    <li>High-quality, skin-friendly ingredients</li>
                    <li>Cruelty-free and ethically made products</li>
                    <li>Shades that inspire confidence and individuality</li>
                </p>
                <p className="text-white leading-relaxed mt-4 text-lg">Whether you’re stepping into a meeting, a party, or simply embracing your everyday glow, Lyra is here to color your confidence.</p>
            </div>
        </div>
    )

}
export default About;