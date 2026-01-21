import { HugeiconsIcon } from '@hugeicons/react'
import { ShoppingBasketFavorite01Icon } from '@hugeicons/core-free-icons'
import gsap from "gsap"
import { useLayoutEffect, useRef } from 'react'

const Nav = ({secref,homeref}) => {
  const navInnerRef = useRef(null);
  

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

  return (
    
    <div className="sticky top-2 z-50 w-full flex justify-center">
      
 
      <div
        ref={navInnerRef}
        className="glass-navbar w-[88%] h-16 rounded-xl flex justify-between items-center"
      >
        <div className="flex gap-7 ml-20">
          <button onClick={()=>homeref.current.scrollIntoView({behavior:"smooth"})}  className="text-white cursor-pointer">Home</button>
           <button className="text-white cursor-pointer">Shades</button>
           <button onClick={()=>secref.current.scrollIntoView({behavior:"smooth"})} className="text-white cursor-pointer">About</button>
        </div>

        <img className="h-20 mr-45" src="/Lyra.png" alt="logo" />

        <HugeiconsIcon
          className="mr-10 cursor-pointer"
          icon={ShoppingBasketFavorite01Icon}
          size={26}
          color="white"
        />
      </div>
    </div>
  )
}

export default Nav
