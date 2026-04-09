import { Link } from "react-router-dom";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <p className="projects-title">PROJECTS</p>
      <p className="projects-subtitle">EXPLORE NOW</p>
      <div className="projects-container">
        <div className="projects-card">
          <Link to="/learnpdr" className="projects-link">
            <div className="projects-item">
              <img
                src="/App_LearnPDR.png"
                alt="LearnPDR"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">LearnPDR</p>
                <p className="projects-description">
                  An application that contains all the official theory and tests
                  of traffic rules. There is complete information on all road
                  signs, road markings, and traffic controller signals.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/resumate" className="projects-link">
            <div className="projects-item">
              <img
                src="/App_ResuMate.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">ResuMate</p>
                <p className="projects-description">
                  A mobile app for creating professional resumes directly on
                  your phone. Simply fill in your information, choose a
                  template, and export or share your resume in seconds.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/chatty" className="projects-link">
            <div className="projects-item">
              <img
                src="/App_Chatty.png"
                alt="Chatty"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">Chatty</p>
                <p className="projects-description">
                  A personal AI assistant powered by the ChatGPT API. Ask
                  anything, get instant responses, and use it for everyday
                  tasks, learning, or quick problem-solving.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/smart-e-commerce" className="projects-link">
            <div className="projects-item">
              <img
                src="/App_Smart-E-Commerce.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">Smart-E-Commerce</p>
                <p className="projects-description">
                  A modern e-commerce application for browsing and purchasing
                  tech products. Features product categories, customization
                  options, and a smooth shopping experience.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
