import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon">
        <a href="https://www.linkedin.com/in/sumit-singh-pailiya/" target="_blank" className="items">
          <FaLinkedin className="icons" />
        </a>
        <a href="https://github.com/sumitpailiya" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="maito:sumitpailiya20@gmail.com" target="_blank" className="items">
          <SiGmail className="icons" />
          
        </a>
      </div>
    </div>
  );
};

export default Contact;
