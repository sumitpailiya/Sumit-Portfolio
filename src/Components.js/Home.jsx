import React from "react";
import Pdf from "../pdf/SumitReactJS.pdf";
import Hero from "./Data/hero.json";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sumit Singh Pailiya",
        "I'm frontend developer (Reactjs)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home " id="home">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 left">
          <h1 ref={typedRef}>I'm a Web Developer</h1>
          <a
            href={Pdf}
            download="Sumit-FE-Reactjs.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="col-lg-6 col-md-12 text-center right">
          <div className="img">
            <img
              src={`/assest/${Hero.imgSrc}`}
              alt="hero"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
