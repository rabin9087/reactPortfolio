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
          <h3>Graduate</h3>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong> 5+ projects</strong>
          <h3>Completed</h3>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i className="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <span>1 Year</span>
          <h3>experience</h3>
        </div>
      </div>
    </section>
  );
};

export default Info;
