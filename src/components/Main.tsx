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
  Hello, I’m a Full Stack Web Developer with experience in building scalable apps using React, Flask, and TypeScript. I work across the full SDLC from frontend/backend to CI/CD and DevOps using tools like Docker and GitHub Actions. I also build GenAI-enabled solutions using OpenAI, LangChain, and Hugging Face.
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