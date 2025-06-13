import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { motion } from "framer-motion";
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS",
    "Flask", "Python", "SQL", "PostgreSQL", "Postman"
];

const labelsSecond = [
    "Git", "GitHub Actions", "Docker", "AWS", "Azure",
    "Linux", "Snowflake", "Pandas", "Selenium"
];

const labelsThird = [
    "OpenAI", "Groq", "LangChain", "Qdrant", "Hugging Face",
    "LlamaIndex", "Streamlit"
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Expertise
                </motion.h1>

                <div className="skills-grid">
                    {[{
                        icon: faReact,
                        title: "Full Stack Web Development",
                        desc: "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
                        tech: labelsFirst
                    }, {
                        icon: faDocker,
                        title: "DevOps & Automation",
                        desc: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.",
                        tech: labelsSecond
                    }, {
                        icon: faPython,
                        title: "GenAI & LLM",
                        desc: "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.",
                        tech: labelsThird
                    }].map((item, i) => (
                        <motion.div
                            className="skill"
                            key={i}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <FontAwesomeIcon icon={item.icon} size="3x" />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {item.tech.map((label, idx) => (
                                    <Chip key={idx} className='chip' label={label} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
