import React from "react";
import skills from "./Data/skills.json";
function Skills() {
  console.log(skills);
  return (
    <>
      <div className="container skills " id="skills">
        <h1 className="my-5">Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <div className="item" key={data.id}>
              <img src={`/assest/${data.imageSrc}`} alt="Logo" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
