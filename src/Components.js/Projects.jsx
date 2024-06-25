import projects from "./Data/projects.json";
function Project() {
  return (
    <>
      <div className="container projects my-4" id="projects">
        <h1 className="my-5">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((ty) => (
            <div key={ty.id} className="my-5 col-md-3 col-lg-3 col-sm-3  mx-5 big">
              <div
                className="card bg-dark text-light "
                style={{ width: "18rem", border:"1px solid  yellow", boxShadow:"5px 5px 10px 10px rgba(101, 175, 10, 0.5)" }}
              > <div className="img d-flex justify-content-center align-item-center p-3">
                <img
                  src={ty.imageSrc}
                  className="card-img-top "
                  style={{ width: "250px", height: "200px", border:"2px solid Yellow", borderRadius:"10px"}}
                  alt="..."
                />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{ty.title}</h5>
                  <p className="card-text">{ty.description}</p>
                  
                  <a href={ty.demo} className="btn btn-primary mx-3">
                    Demo
                  </a>
                  <a href={ty.source} className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
