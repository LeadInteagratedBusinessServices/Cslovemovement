import React from "react";
import imgs from "./about1.png";

function Sections(props) {
  return (
    <div className="container-block container-flexbox">
     

      <div className="item-col-2s">
        <img className="flex-img" src={props.image} alt="Using Google Maps" />
      </div>

      <div className="item-col-2 bg-dark item-col-padding">
        <h3>We Help People</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          obcaecati similique neque? Laborum dolore fugiat, nobis nam inventore
          iusto modi!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
          molestiae repellendus minus magni, blanditiis quisquam doloremque
          alias sed aliquid illum?
        </p>
        
        <a className='flexbtn'>Contact Us</a>
      </div>
    </div>
  );
}

export default Sections;
