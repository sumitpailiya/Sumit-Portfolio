import React from "react";
import experience from "./Data/experience.json";
function Experience() {
  return (
    <>
       <div className="container ex" id="experience">
        <h1 className="my-5">Experience</h1>
        {experience.map((data) => (
          <div key={data.id} className="row ex-items text-center my-5">
            <div className="col-12 col-md-3">
              <div className="lefts mx-auto">
                <img src={`./assest/${data.imageSrc}`} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="right">
                <h2>{data.role}</h2>
                <h4>
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} {""} {data.endDate} {""}{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </span>
                </h4>
                <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                <h6 style={{ color: "yellow" }}>{data.experiences[1]}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
