import React from "react";
import profile_pic from "../assets/rabinPhoto.png";
const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left">
          <p>
            {" "}
            Hi I'm <strong>Rabin Shah</strong>
          </p>
          <h3>Software Enginer</h3>
          <p>I love coding and programming</p>
          <button className="download-btn">
            <a href="../assets/Rabin Shah Resume.pdf" download>
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </button>
        </div>

        <div className="right">
          <div className="img-container">
            <img src={profile_pic} alt="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
