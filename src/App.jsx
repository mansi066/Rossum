import React from 'react';

import ButtonGradient  from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
const App = () =>{
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header/>
        <Hero/>
        <About/>
        <Events/>
      </div>

      <ButtonGradient/>
      
    </>
  );
};
  
export default App;
