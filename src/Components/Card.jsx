import React from "react";
import profile from '../images/1.png'

function Card() {
  return (
    <section>
      <div className="container2">
      <h3 className="project-name">
          Board Of Directors</h3>
        <input type="radio" name="dot" id="one" />
        <input type="radio" name="dot" id="two" />
        <div className="main-card">
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="imges">
                <img src={profile} alt="" />
                </div>
                <div className="details">
                  <div className="cardname">Lorem Ipsum</div>
                  <div className="job">Managing Director</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imges">
                <img src={profile} alt="" />
                </div>
                <div className="details">
                  <div className="cardname">Lorem Ipsum</div>
                  <div className="job">Associate Director</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="imges">
                  <img src={profile} alt="" />
             
                </div>
                <div className="details">
                  <div className="cardname">Lorem Ipsum</div>
                  <div className="job">Program Co-ordinator</div>
                </div>
                <div className="media-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cards"></div>
        </div>
      </div>
    </section>
  );
}

export default Card;
