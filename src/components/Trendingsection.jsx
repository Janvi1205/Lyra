import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";


const Trendingsection = () => {

    const lipstickData = [
        {
            title: "MY COMFY MATTE",
            subtitle: "RICH COLOR, LIGHTWEIGHT FEEL",
            description:
                "Instantly provides rich color in a single stroke, featuring an ultra-enveloping texture and a lightweight, comfortable sensation on the lips.",
            bullets: [
                "Impactful one-stroke color payoff",
                "Creamier and richer formula",
                "Seamlessly glides on the lips",
                "Based on a self-evaluation test",
            ],
            bgColor: "#4C0B188C"
        },
        {
            title: "VELVET BLOOM",
            subtitle: "SOFT MATTE PERFECTION",
            description:
                "A soft matte lipstick that delivers smooth color with long-lasting comfort.",
            bullets: [
                "Soft focus matte finish",
                "Hydrating comfort wear",
                "Buildable intense pigment",
                "Based on a self-evaluation test",
            ],
            bgColor: "#be7465"
        },
        {
            title: "SILK ROUGE",
            subtitle: "CREAMY SATIN SHINE",
            description:
                "A creamy satin lipstick that glides effortlessly for a radiant finish.",
            bullets: [
                "Silky smooth texture",
                "Rich color payoff",
                "Comfortable wear all day",
                "Based on a self-evaluation test",
            ],
            bgColor: "#b10e1f"
        },
    ];
    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const lipstick = gsap.utils.toArray(".lip");
            const section = document.querySelector(".section-bg");

            gsap.set(section, {
                backgroundColor: lipstickData[0].bgColor
            });

            gsap.set(lipstick, {
                x: 100,
                opacity: 0
            });

            gsap.set(lipstick[0], {
                opacity: 1,
                x: 0
            });

            let index = 0;

            gsap.timeline({ repeat: -1 }).to({}, {
                duration: 4,
                onComplete: () => {

                    const current = lipstick[index];
                    const next = lipstick[(index + 1) % lipstick.length];

                    gsap.to(current, {
                        x: -400,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.inOut",
                        scale: 0.65
                    });

                    gsap.set(next, {
                        x: 400,
                        opacity: 0,
                        scale: 0.65
                    });

                    gsap.to(next, {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.inOut",
                        scale: 1
                    });

                    index = (index + 1) % lipstick.length;

                    const title = document.querySelector(".title");
                    const subtitle = document.querySelector(".subtitle");
                    const desc = document.querySelector(".desc");
                    const bullets = document.querySelectorAll(".bullets li");

                    gsap.to(section, {
                        backgroundColor: lipstickData[index].bgColor,
                        duration: 0.8,
                        ease: "power2.inOut"
                    });

                    gsap.to([title, subtitle, desc, bullets], {
                        opacity: 0,
                        y: 10,
                        duration: 0.4,
                        onComplete: () => {

                            title.innerText = lipstickData[index].title;
                            subtitle.innerText = lipstickData[index].subtitle;
                            desc.innerText = lipstickData[index].description;

                            bullets.forEach((li, i) => {
                                li.innerText = lipstickData[index].bullets[i];
                            });

                            gsap.to([title, subtitle, desc, bullets], {
                                opacity: 1,
                                y: 0,
                                duration: 0.4,
                            });
                        },
                    });
                }
            });

        });

        return () => ctx.revert();   

    }, []);






    return (
        <div className="min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:h-[700px] section-bg py-8 sm:py-10 overflow-hidden">
            <div className="flex justify-center">
                <h1 className="text-white text-3xl lg:text-5xl font-serif sm:text-3xl mt-6 sm:mt-10">Trending Now</h1>
            </div>

            <div className="relative w-[250px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] mx-auto">
                <img className="lip absolute inset-0" src="/lipstick1.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick2.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick3.png" alt="" />
            </div>

            <div className="relative lg:absolute lg:-mt-60 left-0 right-0 px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-6 lg:gap-0 max-w-7xl mx-auto mt-24 ">
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif title">MY COMFY MATTE</h1>
                    <h3 className="text-white/80 subtitle mt-4 sm:mt-6 lg:mt-10 text-lg sm:text-xl lg:text-2xl">
                        RICH COLOR, LIGHTWEIGHT FEEL
                    </h3>

                    <p className="text-white/70 desc max-w-md mt-3 text-sm sm:text-base">
                        Instantly provides rich color in a single stroke, featuring an ultra-enveloping texture and a lightweight, comfortable sensation on the lips.
                    </p>
                </div>

                <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-white text-xl sm:text-2xl font-serif rytdesc">WHY IT STANDS OUT</h3>
                    <ul className="text-white/80 space-y-2 mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg ml-0 lg:ml-2 list-none lg:list-disc bullets">
                        <li>Impactful one-stroke color payoff</li>
                        <li>Creamier and richer formula</li>
                        <li>Seamlessly glides on the lips</li>
                        <li>Based on a self-evaluation test</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Trendingsection;