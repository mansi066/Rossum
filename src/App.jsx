import React from 'react';

import ButtonGradient  from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import { Team } from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
const App = () =>{
  return (
    <>
       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header/>
        <Hero/>
        <About/>
        <Events/>
        <Team/>
        <ContactUs/>
        <Footer/>
      </div>

      <ButtonGradient/>
      
    </>
  );
};
  
export default App;
