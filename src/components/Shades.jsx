import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Shades=()=>{

    return(
        <div className="bg-black">
            <h1>Our Premium Shades</h1>

        </div>

    )
}
export default Shades;