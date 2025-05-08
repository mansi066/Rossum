import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import { Team } from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      {/* Main container with vertical scrolling */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-y-auto h-screen custom-scrollbar">
        <Header />
        <Hero />
        <About />
        <Events />
        <Team />
        <ContactUs />
        <Footer />
      </div>

      {/* SVG gradient button */}
      <ButtonGradient />
    </>
  );
};

export default App;