import React from 'react';
import VolunteerSections from '../images/VolunteerSection.jpg'


function VolunteerSection() {
    return (
        <div className="container-block container-flexbox">
        <div className="item-col-2 bg-dark item-col-padding">
          <div className="thumb-text">
            <span>Volunteers</span>
          </div>
          <h3>Want to be a Volunteer?</h3>
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
  
          <a className="flexbtn">Contact Us</a>
        </div>
  
        <div className="item-col-2s">
          <img className="flex-img" src={VolunteerSections} alt="Using Google Maps" />
        </div>
      </div>
    )
}

export default VolunteerSection;
