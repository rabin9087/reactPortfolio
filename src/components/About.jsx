import React from "react";
import profilePic from "../assets/rabinProfile.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">About Me</h2>
      <div className="container flex">
        <div className="about-left">

          <div className="img-fluid">
          <img src={profilePic} alt="Profile pic" />
          </div>
          
        </div>
        <div className="about-right">
          <h2>Rabin Shah</h2>
          <p style={{ textAlign: "justify", marginLeft: "1rem" }}>
            I'm a passionate and results-driven software developer with a focus
            on full-stack web development. I thrive on building intuitive and
            efficient applications that provide exceptional user experiences.
            With a strong foundation in the latest technologies and best
            practices, I'm dedicated to creating robust and scalable solutions.
          </p>
          <p style={{ textAlign: "justify", marginLeft: "1rem" }}>
            <ul>
              <li>
                I bring a strong work ethic, a love for clean code, and a
                dedication to meeting project deadlines.
              </li>
              <li>
                I'm a fast learner, adapting quickly to new technologies and
                frameworks.
              </li>
              <li>
                I'm a team player who thrives in collaborative environments, as
                I believe that great products are born from great teamwork.
              </li>
            </ul>
          </p>
          <p>Kogarh, NSW, Australia</p>

          <div className="tag">Interest</div>
          <div className="flex interest">
            <span>Coding</span>
            <span>Reading</span>
            <span>Cricket</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
