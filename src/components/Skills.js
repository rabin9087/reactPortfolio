import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="flex container skills">
        <h2 className="title">My Skills</h2>
        <div>

      <div className=""style={{background: "yellow"}}>
        
      <i class="fa-brands fa-html5" style={{background: "yellow"}}></i>
        <span>HTML</span>
      </div>
      <div className="">
      <i class="fa-brands fa-css3-alt"></i>
        <span>CSS</span>
      </div>
      <div className="">
        <i class="fa-brands fa-js"></i>
        <span>Javascript</span>
      </div>
      <div className="">
        <i class="fa-brands fa-react"></i>
        <span>React</span>
      </div>
      </div>
    </section>
  );
};

export default Skills;
