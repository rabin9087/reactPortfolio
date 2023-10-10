import React from "react";
import profilePic from "../assets/profilePic.png";
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">About Me</h2>
      <div className="container flex">
        <div className="about-left">
          <img src={profilePic} alt="Profile pic" />
        </div>
        <div className="about-right">
          <h2>Rabin Shah</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eos in
            sequi fuga rem eius delectus soluta aut neque dolores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            rem voluptatum illo. Eveniet nihil sit voluptatibus veritatis
            accusamus? Praesentium nisi in eaque assumenda ipsa inventore alias
            ad maxime consectetur fugiat!
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
