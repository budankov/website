import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <p className="projects-subtitle">EXPLORE NOW</p>
      <div className="projects-container">
        <div className="projects-row">
          <a
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects-link"
          >
            <div className="projects-item">
              <img
                src="/FirstProject.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">WebHR</p>
                <p className="projects-description">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://hireside.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects-link"
          >
            <div className="projects-item">
              <img
                src="/SecondProject.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">HireSide</p>
                <p className="projects-description">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="projects-row">
          <a
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects-link"
          >
            <div className="projects-item">
              <img
                src="/ThirdProject.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">Verge Systems</p>
                <p className="projects-description">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </a>
          <a
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="projects-link"
          >
            <div className="projects-item">
              <img
                src="/FourProject.png"
                alt="UX Design Project"
                className="projects-image"
              />
              <div className="projects-info">
                <p className="projects-name">Payoasis</p>
                <p className="projects-description">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
