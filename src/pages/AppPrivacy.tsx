import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projects } from "../data/projects";
import "../styles/AppPrivacy.css";

function AppPrivacy() {
  const { projectId } = useParams();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <Layout>
        <div className="privacy-error">
          <h1>Проект не знайдено</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="project-privacy">
        <h1>Privacy Policy - {project.name}</h1>

        <div className="privacy-content">
          {project.privacy.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="privacy-footer">
          <p>Остання оновлення: {new Date().toLocaleDateString("uk-UA")}</p>
        </div>
      </div>
    </Layout>
  );
}

export default AppPrivacy;
