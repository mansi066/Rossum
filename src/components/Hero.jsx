import React, { useRef, useState, useEffect } from 'react';
import { curve, heroBackground, collage } from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../constants/index';

const Hero = () => {
  const parallaxRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval); // Cleanup interval when component unmounts
  }, []);

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="home">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.85rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Decoding the Future, One Byte at a Time with{' '}
            <span className="inline-block relative">
              Rossum{' '}
              <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve" />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Where curiosity meets code, and collaboration fuels growth. Join Rossum, your gateway to endless possibilities.
          </p>
          <Button href="../" white>Join Us</Button>
        </div>

       

  <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
  <div className="relative bg-n-8 rounded-[1rem]">
    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
    <div className="rounded-b-[0.9rem] overflow-hidden flex justify-center items-center">
      <div className="max-w-[1400px] w-full m-auto py-16 px-4 relative">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover rounded-2xl duration-500 aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/2]"
        ></div>
   

                {/* Left Arrow */}
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactLeft onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)} size={30} />
                </div>

                {/* Right Arrow */}
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className="flex top-4 justify-center py-2">
                  {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className="text-2xl cursor-pointer">
                      <RxDotFilled />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Gradient />
        </div>

        {/* Background Circles */}
        <div className="absolute -top-[10%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[10%]">
          <div className="opacity-110">
            <img src={heroBackground} className="w-full" width={1440} height={1800} alt="hero" />
          </div>
        </div>
        <BackgroundCircles />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;