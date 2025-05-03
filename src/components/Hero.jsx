import { curve } from '../assets';
import Section from './Section';
import React from 'react'

const Hero = () => {
  return (
  <section
  ClassName="pt-[12rem] -mt-[5.25]"
  crosses
  crossesOfset="lg:translate-y-[5.25rem]"
  customPaddings
  id="hero"

  >
   <div className="container relative">
    <div className="relative z-1 max-w-[62rem] 
    mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
        <h1 className="h1 mb-6">Decoding the Future, One Byte at a Time
            <br/>
        <span className="inline-block relative">     Rossum {" "}
            <img src={curve} 
        className="absolute top-full left-0 w-full xl:-mt-2"
        width={624}
        height={28}
        alt="Curve"
        />
        
        </span>
        </h1>
        <p></p>

    </div>
    </div> 
</section>
  )
}

export default Hero