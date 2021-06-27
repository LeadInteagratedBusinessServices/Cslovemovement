import React from "react";
import HeaderTwo from "./HeaderTwo";
import Contact from "./Contact";
import AboutSection from './AboutSection';
import Timeline from './Timeline';
import Aboutimage from '../images/aboutsection.png';
import Statement from './Statement';
import Card from './Card';

function Aboutpages() {
  return (
    <div>
      <HeaderTwo />
      <Timeline/>
      <AboutSection sectiontitle="About Us" comment='About' image={Aboutimage} />
      <Statement/>
      <Card/>
      <Contact />

    </div>
  );
}

export default Aboutpages;
