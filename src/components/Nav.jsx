import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'
import gsap from "gsap"
import { useLayoutEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

const Nav = () => {

  const navInnerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();


  useLayoutEffect(() => {
    gsap.fromTo(navInnerRef.current,
      { y: -120, opacity: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.1,
        ease: "power4.out",
        delay: 0.2,
      }
    )


  }, [])

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  //onClick={() => homeref.current.scrollIntoView({ behavior: "smooth" })}

  return (

    <div className="sticky top-2 z-50 w-full flex justify-center">


      <div
        ref={navInnerRef}
        className="glass-navbar w-[88%] h-16 rounded-xl flex justify-between items-center"
      >
        <div className="flex gap-7 ml-20">
          <button onClick={() => scrollToSection('hero')} className="text-white cursor-pointer">Home</button>
          <Link to="/shades" onClick={() => window.scrollTo(0, 0)}>
            <button className="text-white cursor-pointer">Shades</button>

          </Link>

          <button onClick={() => scrollToSection('about')} className="text-white cursor-pointer">About</button>
        </div>

        <img className="h-20 mr-45" src="/Lyra.png" alt="logo" />

        <Link to="/mycart" onClick={() => window.scrollTo(0, 0)}>
          <button>
            <HugeiconsIcon
              className="mr-10 cursor-pointer"
              icon={ShoppingBasketFavorite01Icon}
              size={26}
              color="white"
            />

          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
