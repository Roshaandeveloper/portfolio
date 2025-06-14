import React, { useState, useEffect, useRef } from "react";
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import '../assets/styles/Project.scss';

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

function Project() {
  const projects: ProjectItem[] = [
    { id: 1, image: mock07, title: "Datum Insight", description: "A powerful data science platform from Japan designed to visualize, process, and analyze large datasets with intuitive dashboards and machine learning tools." },
    { id: 2, image: mock06, title: "WeManage Estate", description: "A smart mobile app for real estate agents and clients to manage listings, schedule visits, and track deals in real-time." },
    { id: 3, image: mock05, title: "Pandemic Tracker", description: "An interactive COVID-19 dashboard that tracks global and local cases, provides data visualizations, and supports health recommendations" },
    { id: 4, image: mock04, title: "HomeValue AI", description: "An AI-based property price prediction system that uses regression models to estimate real estate values based on location, size, and market trends." },
    { id: 5, image: mock03, title: "EduPrograms CMS", description: "A Java-based CMS to manage academic programs, majors, and course modules for colleges and universities." },
    { id: 6, image: mock02, title: "Credit Matrix Tool", description: "A CSV-powered credit analysis tool that helps users organize, assess, and visualize financial data effectively." },
  ];

  const groups = [
    [projects[0], projects[1], projects[2]],
    [projects[2], projects[3], projects[4]],
    [projects[4], projects[5], projects[0]],
  ];

  const [groupIndex, setGroupIndex] = useState(0);
  const isHovered = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextGroup = () => setGroupIndex((prev) => (prev + 1) % groups.length);
  const prevGroup = () => setGroupIndex((prev) => (prev - 1 + groups.length) % groups.length);

  useEffect(() => {
    const autoSlide = () => {
      if (!isHovered.current) {
        nextGroup();
      }
    };
    timerRef.current = setInterval(autoSlide, 5000);
    return () => clearInterval(timerRef.current!);
  }, []);

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="slider-wrapper">
        <button className="slider-arrow left" onClick={prevGroup}>
          &#10094;
        </button>
        <div className="slider">
          <div className="slider-track">
            {groups[groupIndex].map((project, index) => (
              <div
                key={index}
                className="project"
                onMouseEnter={() => (isHovered.current = true)}
                onMouseLeave={() => (isHovered.current = false)}
              >
                <img src={project.image} className="zoom" alt="thumbnail" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-arrow right" onClick={nextGroup}>
          &#10095;
        </button>
      </div>
<div className="slider-underscores" style={{ textAlign: 'center', marginTop: '20px' }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            onClick={() => setGroupIndex(i)}
            style={{
              fontSize: '2rem',
              color: i === groupIndex ? "#5000ca" : "#aaa",
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
          >
            _
          </span>
        ))}
      </div>    
    </div>
  );
}

export default Project;
