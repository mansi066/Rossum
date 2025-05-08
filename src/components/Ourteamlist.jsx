import React from 'react';
import { team } from '../constants';

const OurTeamList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {team.map((member) => (
        <div 
          key={member.id} 
          className="bg-black p-6 rounded-lg text-center 
                     w-[80%] sm:w-[30%] md:w-[20%] lg:w-[15%] xl:w-[10%]
                     border-2 border-purple-500 shadow-md shadow-purple-500"
        >
          <img 
            src={member.photo} 
            alt={member.name} 
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <h4 className="mt-3 text-lg font-semibold">{member.name}</h4>
          <p className="text-gray-600 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default OurTeamList;