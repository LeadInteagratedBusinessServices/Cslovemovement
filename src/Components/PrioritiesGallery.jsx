import React from "react";
import img1 from "../images/christmas.jpg";
import img2 from "../images/Educate.jpg";
import img3 from "../images/feeding.jpg";
import img4 from "../images/Green.JPG";
import img5 from "../images/Medical.jpg";
import img6 from "../images/Rehabilitation.jpg";
import img7 from "../images/Transgender.jpg";
import img8 from "../images/Women.jpg";

function PrioritiesGallery() {
  return (
    <>
    <div>
    <h3 className='project-name'>Our Ministry Projects</h3>

    </div>

      <div className="cards-new">
        <div className="card-new">
          <img className="card__image" src={img1} alt="" />
          <div className="card__content">
            <h2>Christmas Love Joy Gift Boxes for Slum/ Rural Children</h2>

            <h4 className="tags">Gift Boxes</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img2} alt="" />
          <div className="card__content">
            <h2>Educate the underprivileged Children</h2>

            <h4 className="tags">Education</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img3} alt="" />
          <div className="card__content">
            <h2>Feeding the Poor during crisis</h2>

            <h4 className="tags">Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>{" "}
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img4} alt="" />
          <div className="card__content">
            <h2>Go Green Intiative-(Clean & Green Environment)</h2>

            <h4 className="tags">Go Green</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>{" "}
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img5} alt="" />
          <div className="card__content">
            <h2>Providing Medical camp in Rural places</h2>

            <h4 className="tags">Medical Camp</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>{" "}
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img6} alt="" />
          <div className="card__content">
            <h2>Rehabilitation guidance for Alcohol and Drug addicts</h2>

            <h4 className="tags">Drug Rehab</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>{" "}
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img7} alt="" />
          <div className="card__content">
            <h2>Voice for the Transgender Group</h2>

            <h4 className="tags">Transgender</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>{" "}
          </div>
        </div>
        <div className="card-new">
          <img className="card__image" src={img8} alt="" />
          <div className="card__content">
            <h2>Women upliftment through Skill Development </h2>

            <h4 className="tags">Women Empowerment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              ducimus id ab tenetur delectus reiciendis fugit autem qui at Alias
              itaque praesentium eum, pariatur consequatur ducimus.
            </p>
          </div>
          <div className="card__info">
            <a className="flexbtn">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrioritiesGallery;
