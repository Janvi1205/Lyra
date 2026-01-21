const Footer = () => {
    const currentYear = new Date().getFullYear()
     const doodle = new URL('doodle.png', import.meta.url).href

    return (
        <footer>

           <div className="flex justify-between ">
               <div className="ml-20 mt-10 ">
                <img className="h-30 -ml-10 " src="/Lyra.png" alt="" />
                <p className="text-gray-300 text-md font-serif -mt-5">Luxury lipsticks crafted with the finest</p> 
                <p className="text-gray-300 text-md font-serif"> ingredients for the modern woman.</p>
            </div>

            <div>
                <img className="h-90 w-130 mr-40 -mt-10" src="/doodle.png" alt="" />
            </div>
           </div>
            
           

            <div className="flex justify-center -mt-10">
                <p className="text-gray-400 text-xs sm:text-sm">
                    ©Copyright {currentYear}, FinBot. All rights reserved. All wrong reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer

