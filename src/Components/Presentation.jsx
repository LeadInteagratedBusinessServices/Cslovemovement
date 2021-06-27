import React from "react";
import Present from "../images/presentation.png";

function Presentation() {
  return (
    <div id="presentaion">
      <h1 className="under">OUR VALUES</h1>
      <div className='controlwidth'>
      <p className="pres">
        To facilitate the creation of an ecosystem for children to flourish
        within their adoptive and birth families, by leveraging our experience
        in the areas of family preservation & strengthening.
      </p>
      </div>
     
      <img className="presentaionimage" src={Present} alt="" />
    </div>
  );
}

export default Presentation;
