import React from "react";
import Navbar from "./Components.js/Navbar";
import Home from "./Components.js/Home";
import Experience from "./Components.js/Experience";
import Skills from "./Components.js/Skills";
import Project from "./Components.js/Projects";
import Contact from "./Components.js/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
