import React from "react";

function Navbar(){
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light text-light my-4">
      <div className="container">
        <a className="navbar-brand  text-light" href="#">Portfolio</a>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto  ">
            <li className="nav-item">
              <a className="nav-link  text-light" href="#home">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#experience">Experience</a>
            </li>
            <li className="nav-item  text-light">
              <a className="nav-link text-light" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-light" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </>
  );
};

export default Navbar;
