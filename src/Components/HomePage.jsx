import React from "react";
import Header from "./Header";
import Section from "./Section";
import Sections from "./Sections";
import Feature from "./Feature";
import Contact from "./Contact";
import aboutimage from '../images/about.png'
import aboutimage1 from '../images/about1.png'

function HomePage() {
  return (
    <div>
      <Header />
      <Section image={aboutimage} comment="Our Mission" sectiontitle="Our Mission & Vision"  />
      <Feature />
      <Sections image={aboutimage1} />
      <Contact />
    </div>
  );
}

export default HomePage;
