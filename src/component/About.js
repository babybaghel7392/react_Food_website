import React from 'react'
import Common from './Common'
import web from "./img-2.png";  
const About = () => {
  return (
    <div>
         <Common
        name="Welcome in  "
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </div>
  )
}

export default About
