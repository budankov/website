import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projects } from "../data/projects";
import "../styles/AppPage.css";

function AppPage() {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <Layout>
        <div className="project-detail-error">
          <h1>Project not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className={`project-detail ${
          projectId !== "learnpdr" ? "development" : ""
        }`}
      >
        {projectId !== "learnpdr" && (
          <h1 className="title-development">
            <img src="/Me.png" alt="Image development" />
            Project in development<span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </h1>
        )}

        <div className="detail-header">
          <img
            src={project.image}
            alt={project.name}
            className="detail-image"
          />
          <div className="detail-info">
            <h1>{project.name}</h1>
            <p className="detail-description">{project.fullDescription}</p>
            <div className="detail-links">
              {project.appstore && (
                <a
                  href={project.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <img
                    src="/appstore.svg"
                    alt="App Store"
                    className="detail-ico"
                  />
                </a>
              )}
              {project.googleplay && (
                <a
                  href={project.googleplay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <img
                    src="/googleplay.svg"
                    alt="Google Play"
                    className="detail-ico"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="detail-section">
          <h2>🚀 Key Features</h2>
          <ul className="features-list">
            {project.highlights.map((feature) => (
              <li key={feature}>
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="detail-section">
          <h2>🔥 Why this app</h2>
          <div className="why-section">
            {project.why.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="detail-footer">
          <Link to={`/${projectId}/privacy`} className="privacy-link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default AppPage;
