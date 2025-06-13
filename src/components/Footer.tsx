import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Name or Logo */}
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Roshaan Ali. All rights reserved.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="footer-center">
          <a href="mailto:roshaandeveloper@gmail.com" target="_blank" rel="noreferrer" title="Email">
            <EmailIcon />
          </a>
          <a href="https://github.com/Roshaandeveloper" target="_blank" rel="noreferrer" title="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/roshaan-ali-562506243/" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>

        {/* Right: Optional extra */}
        <div className="footer-right">
          <p>Let's build something great </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
