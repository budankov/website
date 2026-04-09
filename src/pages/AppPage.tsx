import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projects } from "../data/projects";
import "../styles/ProjectDetail.css";

function AppPage() {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <Layout>
        <div className="project-detail-error">
          <h1>Проект не знайдено</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="project-detail">
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button primary"
                >
                  Переглянути
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Технології</h2>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Можливості</h2>
          <ul className="features-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-footer">
          <Link to={`/${projectId}/privacy`} className="privacy-link">
            Політика приватності
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default AppPage;
