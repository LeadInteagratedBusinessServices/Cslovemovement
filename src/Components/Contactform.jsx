import React from "react";

function Contactform() {
  return (
    <div className="container3">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="formtitle">Let's get in touch</h3>
          <h3 className="formtitle">Provide a Feedback</h3>
          <p className="overallp">Want to work with us?</p>
          <p className="overallp">Want to be one of the partner?</p>
          <h2>Leave a Message</h2>
          <p className="overallp">Contact Us At:</p>
          <ul className='formul'>
              <li>No:7</li>
              <li>Valasaravakkam</li>
              <li>Chennai</li>
          </ul>
          <div className="info3"></div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
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
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html">
            <h3 className="title3">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="formbtn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
