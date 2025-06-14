import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import image from '../assets/images/min.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Roshaandeveloper" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/roshaan-ali-562506243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Roshan Ali</h1>
      <p style={{ fontSize: '24px' }}>
 Hi, I’m a Full Stack Developer with 3 years of experience in building scalable web applications using React, Flask, and TypeScript. I work across the entire software development lifecycle from frontend and backend development to CI/CD and DevOps
</p>


          <div className="mobile_social_icons">
            <a href="https://github.com/Roshaandeveloper" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/roshaan-ali-562506243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;