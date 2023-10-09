import React from "react";

const Info = () => {
  return (
    <section className="flex content banner">
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong>IT</strong>
          <p>Graduate</p>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong> 5+ projects</strong>
          <p>Completed</p>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <span>1 Year</span>
          <p>experience</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
