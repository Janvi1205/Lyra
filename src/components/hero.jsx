import { useLayoutEffect } from "react";
import gsap from "gsap";
import {Link} from "react-router-dom"
const Hero = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        "#hero-text",
        { x: -900, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.6,
          ease: "power4.out",
          delay: 0.2
        }
      )
        .fromTo(
          "#hero-image",
          { scale: 0.9, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          "#hero-btn",
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-screen bg-black overflow-hidden">

      <div
        id="hero-image"
        className="absolute inset-0 hero-bg bg-cover bg-center ml-0 md:ml-150"
      />


      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 md:via-black/40 to-transparent" />


      <div className="flex flex-col items-start justify-center h-full">

        <div id="hero-text" className="relative lg:-mt-50 sm:-mt-50 -mt-10  z-10 py-8 px-6 md:py-20 lg:py-30 md:px-12 lg:px-23">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-tight tracking-wide">
            Elegance In
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light tracking-wide">
            Every Shade
          </h1>

          <p className="text-white/70 mt-4 md:mt-6 lg:mt-7 leading-6 md:leading-7 text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md">
            Discover richly pigmented lip colors in satin, velvet, and matte finishes crafted to elevate your everyday beauty. From effortless daytime elegance to bold evening statements, Lyra delivers comfort, color, and confidence in every swipe.
          </p>
        </div>  


        <div className="relative z-10 px-6 md:px-0 md:-mt-16 lg:-mt-23 md:ml-12 lg:ml-22">
          <Link to="/shades" >
            <button
              id="hero-btn"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-[#7b001c] text-white text-sm md:text-base rounded-xl hover:bg-[#a30028] transition cursor-pointer duration-300 shadow-lg"
            >
              Explore Shades
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;