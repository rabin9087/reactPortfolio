import React from "react";
import weatherForecast from "../assets/weatherForecast.png";
import movieCollection from "../assets/movieDb.png";
import chrome from "../assets/icons8-chrome-48.png";
const Works = () => {
  return (
    <section id="projects" className="container projects">
      <h2 className="title">My Recent Works</h2>

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={weatherForecast} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Weather Forecast</h3>
            <p>October 2023</p>
            <a
              className="GitChromIcon"
              href="https://github.com/rabin9087/weatherForecast"
              target="blank"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>
            &nbsp;
            <a className="GitChromIcon" href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={movieCollection} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Movie Collection</h3>
            <p>October 2023</p>
            <a
              className="GitChromIcon"
              href="https://github.com/rabin9087/Movie_Finder_API"
              target="blank"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>{" "}
            &nbsp;
            <a className="GitChromIcon" href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={weatherForecast} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a className="GitChromIcon" href="">
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>
            &nbsp;
            <a className="GitChromIcon" href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={weatherForecast} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a className="GitChromIcon" href="">
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>
            &nbsp;
            <a className="GitChromIcon" href="">
              {/* <img src={chrome} alt="Chrome" /> */}
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
