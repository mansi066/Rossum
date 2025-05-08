import React from 'react';
import { curve } from '../assets';

const Heading = ({ className, title,subtitle }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 flex flex-col items-center`}>
      {title && <h2 className="h1 text-center">{title}
         <img
                        src={curve}
                        width={300}
                        height={10}
                        alt="Curve"
                      />
                      
                      </h2>
                      }

{subtitle && <h4 className="h4 text-center">{subtitle} </h4>}
    </div>
  );
};

export default Heading;