import React, { useRef } from 'react';
import { curve, heroBackground ,collage} from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.85rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Decoding the Future, One Byte at a Time with
            {` `}
            <span className="inline-block relative">
              Rossum {" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Where curiosity meets code, and collaboration fuels growth.
            Join Rossum, your gateway to endless possibilities.
          </p>
          <Button href="../" white>Learn More</Button>
        </div>

        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[250/100] lg:aspect-[688/490]">
            <img
            src={collage}
            className="w-full mx-auto block scale-[2] translate-y-[1%] md:scale-[1] md:translate-y-[2%] lg:-translate-y-[5%]"
            width={688}
            height={490}
            alt="coding-hub"
            />
              <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
            </div>
          </div>
          <Gradient />
        </div>

        {/* Background Circles - Positioned Correctly */}
        <div className="absolute -top-[10%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[10%]">
  <div className="opacity-110"> 
    <img
      src={heroBackground}
      className="w-full"
      width={1440}
      height={1800}
      alt="hero"
    />
  </div>
</div>
        <BackgroundCircles />

      </div>
      <BottomLine />

    </Section>
  );
};

export default Hero;