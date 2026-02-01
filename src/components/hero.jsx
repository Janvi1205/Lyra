import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const imageref = useRef(null);

  useLayoutEffect(() => {
    const v = gsap.timeline();
    v.from("#hero-p p", {
      x: -1000,
      stagger: 0.1,
      duration: 1.3,
      ease: "power4.out",
    });

    v.fromTo(
      imageref.current,
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div className="hero-bg min-h-screen overflow-x-hidden flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-0 gap-8 md:gap-4">
      
    
      <div id="hero-p" className="font-serif flex-shrink-0 w-full md:w-auto text-center md:text-left xl:-mt-20">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl text-[#dededed6] md:ml-8 lg:ml-16 xl:ml-24">
          Elegance Meets
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl text-[#dededed6] md:ml-16 lg:ml-24 xl:ml-73 mt-1 sm:mt-2 md:mt-3">
          Confidence in
        </p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl text-[#dededed6] md:ml-24 lg:ml-40 xl:ml-110 mt-1 sm:mt-2 md:mt-3">
          Every Shade
        </p>
      </div>

     
      <div className="relative flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
        <div className="hero-light" />
        <img
          ref={imageref}
          className="h-80 sm:h-56 md:h-72 lg:h-130 xl:h-96 xl:mr-20 2xl:h-[750px] relative z-10 object-contain"
          src="/Lipstick.png"
          alt="Lyra Lipstick"
        />
      </div>
    </div>
  );
};

export default Hero;