import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-white">
      {/* Newsletter Subscription */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-2xl font-bold  text-purple-600">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className="text-sm">Stay updated with our latest events and announcements.</p>
        <form action="/subscribe" method="post" className="mt-4 w-full max-w-md">
        <input
  type="email"
  name="email"
  placeholder="Enter your email"
  className="p-2 rounded w-full max-w-[70%] sm:w-[70%] text-white bg-neutral-900"
/>
  <br />
  <Button className="mt-4 w-[30%] text-center justify-center mx-auto flex" href="#login">
    Subscribe
</Button>
</form>
</div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold text-purple-600">About Us</h2>
          <p className="text-sm">
            Join Rossum premier tech hub. Learn, grow, and innovate
            with fellow tech enthusiasts.
          </p>
          <br />
          <div className="mt-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-500 text-lg" />
            <p className="text-sm">
              Jaypee University Anoopshahr,<br />
              Anoopshahr, Bulandshahr, Uttar Pradesh - 203390, India
            </p>
          </div>
          <br />
     
</div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-md font-semibold text-purple-600">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#our-team" className="hover:underline">Our Team</a></li>
            <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-md font-semibold text-purple-600">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/tutorials" className="hover:underline">Event</a></li>
            <li><a href="/guides" className="hover:underline">Project</a></li>
            <li><a href="/tools" className="hover:underline">Resources</a></li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-md font-semibold text-purple-600">COMMUNITY</h3>
          <ul className="space-y-2">
            <li><a href="/join-us" className="hover:underline">Join Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/custom-contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/code-of-conduct" className="hover:underline">Code of Conduct</a></li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-purple-600 text-center">Connect with Us</h3>
<div className="flex justify-center gap-4 mt-4">
  {socials.map((item) => (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center bg-gray rounded-full hover:bg-purple-600 active:bg-gray"
    >
      <img src={item.iconUrl} alt={item.title} width={16} />
    </a>
  ))}
</div>

      <hr className="w-full border-white my-8" />
      <p className="text-center text-sm">
        © {new Date().getFullYear()} Rossum. All rights reserved.
      </p>
    </Section>
  );
};

export default Footer;