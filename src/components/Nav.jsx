import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'
import gsap from "gsap"
import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Nav = ({cart}) => {
  const cartItems = Object.values(cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  

  return (

    <div className="sticky top-2 z-50 w-full flex flex-col items-center px-2 sm:px-0">
      <div
        ref={navInnerRef}
        className="glass-navbar  w-full sm:w-[95%] md:w-[90%] lg:w-[88%] h-14 sm:h-16 rounded-xl flex justify-between items-center px-4 sm:px-6 md:px-8"
      >
       
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className = "sm:hidden text-white cursor-pointer">
          {isMenuOpen ? <IoClose size={24} /> : <HiMenuAlt3 size={24} />}
        </button>


        <div className="hidden sm:flex gap-5 md:gap-7">
          <button onClick={() => scrollToSection('hero')} className="text-white cursor-pointer text-base">Home</button>
          <Link to="/shades" onClick={() => window.scrollTo(0, 0)}>
            <button className="text-white cursor-pointer text-base">Shades</button>
          </Link>
          <button onClick={() => scrollToSection('about')} className="text-white cursor-pointer text-base">About</button>
        </div>

     
        <Link to="/">
            <img className="h-12 sm:h-16 md:h-20  left-1/2 transform -translate-x-1/2" src="/Lyra.png" alt="logo" />
        </Link>
       
        <Link to="/mycart" onClick={() => window.scrollTo(0, 0)}>
          <button className='relative'>
            <HugeiconsIcon
              className="cursor-pointer"
              icon={ShoppingBasketFavorite01Icon}
              size={24}
              color="white"
            />
            {cartItems.length>0?(
              <p className='absolute -top-2 left-3 text-xs text-white px-1.5 py-0.5 min-w-[20px] text-center  bg-[#d31414c4] rounded-full'>{cartItems.length}</p>
            ):null}
          </button>
        </Link>
      </div>

    
      {isMenuOpen && (
        <div className="sm:hidden glass-navbar w-full mt-2 rounded-xl py-4 px-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection('hero')} className="text-white cursor-pointer text-left py-2 border-b border-white/10">Home</button>
          <Link to="/shades" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
            <button className="text-white cursor-pointer text-left py-2 border-b border-white/10 w-full">Shades</button>
          </Link>
          <button onClick={() => scrollToSection('about')} className="text-white cursor-pointer text-left py-2">About</button>
        </div>
      )}
    </div>
  )
}

export default Nav
