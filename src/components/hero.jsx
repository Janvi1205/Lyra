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
    <div  className="hero-bg h-screen overflow-x-hidden flex">

      <div id="hero-p" className="mt-15">
        <p className="text-7xl  text-[#dededed6] ml-40 mt-20 font-julius">Elegance Meets</p>
        <p className="text-7xl text-[#dededed6] ml-70 mt-3">Confidence in</p>
        <p className="text-7xl text-[#dededed6] ml-100 mt-3">Every Shade</p>
      </div>

      <div className="ml-20 -mt-10">
        <div className="hero-light" />
        <img
          ref={imageref}
          className="h-160 relative z-10"
          src="/Lipstick.png"
          alt=""
        />
      </div>

    </div>
  );
};

export default Hero;
