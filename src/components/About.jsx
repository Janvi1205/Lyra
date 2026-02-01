import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const vidref = useRef(null);
    const aboutref = useRef(null);

    useLayoutEffect(() => {

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
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
                        scrub: 2
                    },
                }
            );

            gsap.fromTo(
                aboutref.current,
                { x: 40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: aboutref.current,
                        start: "top 80%",
                        scrub: 2
                    },
                }
            );
        });


        mm.add("(max-width: 767px)", () => {
            gsap.fromTo(
                vidref.current,
                { opacity: 0, x: -200 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: aboutref.current,
                        start: "top 100%", 
                      
                    },
                }
            );

            gsap.fromTo(
                aboutref.current,
                { x: -150, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: aboutref.current,
                        start: "top 80%", 
                        toggleActions: "play none none none" 

                    },
                }
            );
        });

        return () => mm.revert();
    }, []);

    return (
        <div id="about" className="flex flex-col relative lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                <video
                    ref={vidref}
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[560px] lg:h-[520px] xl:w-140 xl:h-130 rounded-lg shadow-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/lyraaboutvid.mp4"
                />
            </div>


            <div ref={aboutref} className="w-full lg:max-w-xl xl:max-w-3xl px-4 sm:px-6 md:px-8 lg:px-0">
                <h2
                    style={{ fontFamily: "Amaranth" }}
                    className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mb-6 text-center lg:text-left"
                >
                    About Us
                </h2>

                <div className="space-y-4 md:space-y-6 text-white">
                    <p className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify lg:text-left">
                        Born from a love for bold confidence and effortless elegance, Lyra creates lipsticks that celebrate every mood, every moment, and every you. We believe the perfect lipstick doesn't just complete a look—it empowers you to own it.
                    </p>

                    <p className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify lg:text-left">
                        Our formulas are thoughtfully crafted with rich pigments, long-lasting comfort, and a smooth, luxurious finish. From everyday nudes to statement reds, each Lyra shade is designed to complement all skin tones and styles.
                    </p>

                    <p className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg font-semibold">
                        We are committed to:
                    </p>

                    <ul className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg space-y-2 ml-6 md:ml-10 list-disc">
                        <li>High-quality, skin-friendly ingredients</li>
                        <li>Cruelty-free and ethically made products</li>
                        <li>Shades that inspire confidence and individuality</li>
                    </ul>

                    <p className="leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify lg:text-left">
                        Whether you're stepping into a meeting, a party, or simply embracing your everyday glow, Lyra is here to color your confidence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;