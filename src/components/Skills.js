import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="flex container skills">
        <h2 className="title">My Skills</h2>
        <div>

      <div className="">
        
      <i class="fa-brands fa-html5" style={{color: "#E75D28"}}></i>
        <span>HTML</span>
      </div>
      <div className="">
      <i class="fa-brands fa-css3-alt" style={{color: "#254CDD"}}></i>
        <span>CSS</span>
      </div>
      <div className="">
        <i class="fa-brands fa-js" style={{color: "#EFD81D"}}></i>
        <span>Javascript</span>
      </div>
      <div className="">
        <i class="fa-brands fa-react" style={{color: "#5ED4F3"}}></i>
        <span>React</span>
      </div>
      </div>
    </section>
  );
};

export default Skills;
