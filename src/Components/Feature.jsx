import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <div className="featuretext">
        <div className="thumb-texts">
          <h2>What We Do</h2>
        </div>
        <h3> We Are In A Mission To Help The Helpless</h3>
      </div>
      <div className="a-container">
        <FeatureBox  />
       
        
        
      </div>
    </div>
  );
}

export default Feature;
