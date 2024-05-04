import React from "react";
import {image} from "../data/data.js";


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a Full-Stack web developer and passionate about coding creating applications.</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
