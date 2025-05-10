import { useState } from "react";
import Section from "./Section";
import React from "react";
import Button from "./Button";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section className="max-w-3xl mx-auto text-lg leading-relaxed p-6" id="about">
      <h1 className="text-4xl font-bold text-center mb-6 cursor-pointer">
        About Rossum
      </h1>

      <p>
        At <strong>Rossum</strong>, we believe coding is more than just a skill—it's a journey, a passion, and a gateway to innovation. 
        Our mission is to bring together coding enthusiasts from all walks of life, creating a dynamic hub where knowledge thrives, 
        ideas spark, and collaboration fuels creativity.
      </p>

      {/* Read More Button */}
      <Button
        className="mt-4 px-4 py-2  t rounded transition" white
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </Button>

      {showMore && (
        <p className="mt-4">
          From interactive webinars that dive deep into programming trends to exciting events that showcase real-world applications, 
          we strive to provide an engaging platform that empowers coders at every level. Whether you're a beginner taking your first steps 
          or an experienced developer pushing the boundaries of technology, Rossum is your space to learn, connect, and grow.
        </p>
      )}
    </Section>
  );
}

export default AboutUs;