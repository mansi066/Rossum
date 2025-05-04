import React from 'react';
import { curve } from '../assets';

const Heading = ({ className, title,subtitle }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 flex flex-col items-center`}>
      {title && <h1 className="h1 text-center">{title}
         <img
                        src={curve}
                        width={200}
                        height={5}
                        alt="Curve"
                      /></h1>}

{subtitle && <h4 className="h4 text-center">{subtitle} </h4>}
    </div>
  );
};

export default Heading;