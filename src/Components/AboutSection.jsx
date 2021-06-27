import React from 'react'

function AboutSection(props) {
    return (
        <div className="container-block container-flexbox">
        <div className="item-col-2 bg-dark item-col-padding">
          <div className="thumb-text">
            <span>{props.comment}</span>
          </div>
          <h3>{props.sectiontitle}</h3>
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
          <img className="flex-img" src={props.image} alt="Using Google Maps" />
        </div>
      </div>
    )
}

export default AboutSection;
