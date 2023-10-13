import React from "react";
import weatherForecast from "../assets/weatherForecast.png";
import movieCollection from "../assets/movieDb.png";
import prankCalculator from "../assets/prankCalulator.png";
import notTodoList from "../assets/notToDOList.png";
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
            <a
              className="GitChromIcon"
              href="https://weather-forecast-pearl.vercel.app/"
              target="blank"
            >
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
            <a
              className="GitChromIcon"
              href="https://movie-finder-api.vercel.app/"
              target="blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={prankCalculator} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Prank Calculator</h3>
            <p>October 2023</p>
            <a
              className="GitChromIcon"
              href="https://github.com/rabin9087/prankCalculator"
              target="blank"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>
            &nbsp;
            <a
              className="GitChromIcon"
              href="https://prank-calculator-95obhprwd-rabins-projects.vercel.app/"
              target="blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="top">
            <img src={notTodoList} alt="project-img" />
          </div>

          <div className="bottom container">
            <h3>Personal portfolio website</h3>
            <p>October 2023</p>
            <a
              className="GitChromIcon"
              href="https://github.com/rabin9087/reactNotTODOList"
              target="blank"
            >
              <i
                className="fa-brands fa-github"
                style={{ color: "#E83A2D" }}
              ></i>
            </a>
            &nbsp;
            <a
              className="GitChromIcon"
              href="https://react-not-todo-list.vercel.app/"
              target="blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
