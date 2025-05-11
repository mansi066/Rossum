import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const contactInfo = [
  { title: "Suman Saha", email: "suman.saha@mail.jaypeeu.ac.in" , phoneNumber:"+91 98057 88220" },
  { title: "Rahul Gupta", email: "rahul.gupta@mail.jaypeeu.ac.in", phoneNumber:"+91 82249 46194" },
  { title: "Kapil Sharma", email: "kapil.sharma@mail.jaypeeu.ac.in",phoneNumber:"+91 87418 95972" },
  { title: "Isha Garg", email: " 8822103029@mail.jaypeeu.ac.in ",phoneNumber:"+91 70786 58044" },
  { title: "Devojeet", email: "8823103010@mail.jaypeeu.ac.in ",phoneNumber:"+91 70606 01699" },
];

const ContactUs = () => {
  return (
    <Section className="overflow-hidden" id="contact-us">
      <div className="container relative z-2">
        <Heading title="Contact Us" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 lg:gap-4 text-white rounded-lg shadow-lg text-center cursor-pointer transition-transform duration-500 ease-out hover:scale-110 hover:shadow-2xl"
            >
              <h3 className="text-lg font-bold">{info.title}</h3>
              <p>{info.email}</p>
              <p>{info.phoneNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;