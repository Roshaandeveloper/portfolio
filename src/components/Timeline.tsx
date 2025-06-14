import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const items = [
  {
    title: "Full Stack Engineer",
    subtitle: "Crescent Webs",
    date: "Oct 2024 - present",
    desc: "I build and maintain full-stack web applications using React and Flask. I focus on clean UI/UX, responsive design, and efficient backend APIs with seamless integration and deployment."
  },
  {
    title: "MERN Stack Developer",
    subtitle: "Frag Games (Remote)",
    date: "Dec 2023 - Oct 2024",
    desc: "Built and maintained scalable web applications using React, Node.js, and MongoDB. Worked on REST APIs and integrated modern frontend technologies."
  },
  {
    title: "Frontend Development Intern",
    subtitle: "PITB, Lahore",
    date: "Feb 2023 - Jul 2023",
    desc: "Worked on responsive UI components and real-world admin dashboards using React and TypeScript. Improved user experience and performance."
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          Career History
        </motion.h1>

        <VerticalTimeline>
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={item.date}
                iconStyle={{ background: '#5000ca', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
                position={i % 2 === 0 ? 'left' : 'right'} // alternate left-right
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                <p>{item.desc}</p>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
