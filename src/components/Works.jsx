import React from "react";
import projectImg from "../assets/p1.png";
const Works = () => {
  return (
    <section id="projects" className="container projects">
      <h2 className="title">My Recent Works</h2>

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Saas</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

        
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;
