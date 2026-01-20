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
        const lipstick = gsap.utils.toArray(".lip");

        const section = document.querySelector(".section-bg");

        gsap.set(section, {
            backgroundColor: lipstickData[0].bgColor
        });

        gsap.set(lipstick,       //made all images hidden
            {
                x: 100,
                opacity: 0
            }
        )

        gsap.set(lipstick[0],    //display only first img
            {
                opacity: 1,
                x: 0
            }
        )

        let index = 0;
        gsap.timeline({ repeat: -1 }).to({}, {
            duration: 4, //Every 4 seconds, onComplete runs
            onComplete: () => {
                const current = lipstick[index];
                const next = lipstick[(index + 1) % lipstick.length]

                gsap.to(current, {
                    x: -400,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.inOut",
                    scale: 0.65
                })

                gsap.set(next, {
                    x: 400,
                    opacity: 0,
                    scale: 0.65

                })

                gsap.to(next, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.inOut",
                    scale: 1

                })
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
        })
    }, []);

    return (
        <div className=" h-[600px] section-bg">
            <div className="flex justify-center mt-10">
                <h1 className="text-white text-3xl mt-10 ">Trending Now </h1>


            </div>
            <div className="relative w-[350px] h-[350px] mx-auto   ">
                <img className="lip absolute inset-0" src="/lipstick1.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick2.png" alt="" />
                <img className="lip absolute inset-0" src="/lipstick3.png" alt="" />
            </div>
            <div className="absolute -mt-60 ml-22 flex gap-110">
                <div>
                    <h1 className="text-white text-5xl font-serif title ">  MY COMFY MATTE</h1>
                    <h3 className="text-white/80 subtitle mt-10 text-2xl subtitle">
                        RICH COLOR, LIGHTWEIGHT FEEL
                    </h3>

                    <p className="text-white/70 desc max-w-md mt-3 desc">
                        Instantly provides rich color in a single stroke, featuring an ultra-enveloping texture and a lightweight, comfortable sensation on the lips.
                    </p>
                </div>
                <div>
                    <h3 className="text-white text-2xl font-serif rytdesc">WHY IT STANDS OUT </h3>
                    <ul className="text-white/80 space-y-2  mt-5 text-lg ml-2 list-disc bullets">
                        <li>Impactful one-stroke color payoff</li>
                        <li>Creamier and richer formula</li>
                        <li>Seamlessly glides on the lips</li>
                        <li> Based on a self-evaluation test</li>
                    </ul>
                </div>




            </div>

        </div>

    )
}
export default Trendingsection;