import React from "react";
import experience from "./Data/experience.json";
function Experience() {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Experience</h1>
        {experience.map((data) => 
            <>
              <div key={data.id} className="ex-items text-center my-5">
                <div className="lefts">
                  <img src={`./assest/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {""} {data.endDate} {""}{" "}
                      <span style={{ color: "yellow" }}>{data.location} </span>
                    </span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]} </h5>
                  <h6 style={{ color: "yellow" }}>{data.experiences[1]} </h6>
                </div>
              </div>
            </>
        )}
      </div>
    </>
  );
}

export default Experience;
