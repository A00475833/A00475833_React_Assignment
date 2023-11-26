import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <img
          src="profile-picture.jpeg"
          alt="Your Profile Picture"
          className="profile-picture"
        />
        <h1>Siddharth Singh</h1>
        <p>
          Hello! I'm Siddharth Singh. I have earned a Bachelor of Technology
          degree in Computer Science and Engineering from Medi-Caps University,
          Indore. Following the completion of my engineering degree, I joined
          Cognizant Technology Solutions as a Programmer Analyst. During my
          two-year tenure at Cognizant, I had the opportunity to learn and have
          a lot of fun! This is QA!
        </p>
        <p>
          Seeking to expand my knowledge in Computer Science further, I am
          currently enrolled in the MSc CDA Program at Saint Mary's University,
          Halifax. In my leisure time, I am passionate about watching MMA and
          Boxing.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
