import React from "react";

function Timeline() {
  return (
    <div className="containers">
        <div className='comment-center'>
        <div className="thumb-texts">
          <h3>History</h3>
        </div>
        </div>
       
      <h3 className="project-name">
          Our History</h3>
      <div id="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <img className="svg" src="../images/1.svg" alt="" />
          </div>
          <div className="timeline-content">
            <h2>LOREM IPSUM DOLOR</h2>
            <p className='overallp'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              facilis quo maiores magnam modi ab libero praesentium blanditiis.
            </p>
           
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <img className="svg" src="../images/1.svg" alt="" />
          </div>
          <div className="timeline-content right">
            <h2>LOREM IPSUM DOLOR</h2>
            <p className='overallp'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              facilis quo. Maiores magnam modi ab libero praesentium blanditiis
              consequatur aspernatur accusantium maxime molestiae sunt ipsa.
            </p>
            
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icons">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
