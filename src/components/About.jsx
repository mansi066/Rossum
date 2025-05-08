import React from 'react';
import Section from './Section';
import { curve } from '../assets';

const About = () => {
  return (
    <Section className="bg-black-500 text-white py-16 px-8 flex justify-center"  id="about">
      <div className="relative p-6 rounded-xl shadow-lg border border-purple-800 bg-">
        <div className="p-6 rounded-lg">
          <h1 className="h1 mb-6 text-center">
            <span className="inline-block relative"> 
              About Us {" "}
              {/* <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve" /> */}
            </span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sapiente laudantium, sunt dolorem exercitationem officiis magnam consectetur culpa eveniet hic nobis, eius autem voluptatem voluptas similique molestias laboriosam repellendus optio.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis delectus optio hic, distinctio sapiente eveniet facilis reiciendis sint quasi officiis doloremque consequatur modi temporibus, ipsa quam at totam natus!
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mt-4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ratione tempore explicabo, laboriosam quae expedita possimus eum ut similique nulla ipsum pariatur quas magni veritatis architecto sequi facilis libero molestiae!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et cum nulla assumenda dolor atque vel quis voluptatum dolorem. Omnis ab quam maiores eius possimus, excepturi deserunt corrupti quia molestiae.          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;