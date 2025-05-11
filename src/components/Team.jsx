import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Ourteamlist from './Ourteamlist'
import{ LeftLine, RightLine} from './design/Team'

export const Team = () => {
  return (
    <Section className="overflow-hidden"
    id="our-team">
      <div className="container relative z2 transition delay-150 duration-300 ease-in-out">
        
         <Heading 
          title="Our Team"
         />
        
       <div className="relative">
        <Ourteamlist/>
        <LeftLine/>
        <RightLine/>
       </div>
      </div>
      </Section>
  )
}
