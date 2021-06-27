import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      
      <div className="about-text ">
    
        
        <h2>Our Mission & Vision</h2>
      
        <p>
          Our vision is to provide a refuge to the orphaned, abandoned,
          unprivileged children. We work to provide holistic care and a support
          system by guiding, educating, and giving them love and care that they
          deserve.
        </p>
        <p>
          We act as a transition for the children to lead a life with complete
          social dignity and make them capable of helping the society in return.
          We aim at restoring the bright future and create a sustainable
          livelihood for the underprivileged children.
        </p>
        <button className="newbtn">{props.button}</button>
      </div>
    </div>
  );
}

export default About;
