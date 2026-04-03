import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">EXPERIENCE</h2>
      <p className="experience-subtitle">EXPLORE NOW</p>
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-job">
            <img
              src="/website/WebHR.svg"
              alt="UX Experience"
              className="experience-logo"
            />
            <p className="experience-job-title">
              <span className="experience-job-company">WebHR /</span> Software
              Engineer
            </p>
          </div>
          <p className="experience-date">May 2022 - Present, United States</p>
        </div>

        <p className="experience-description">
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. WebHR is
          currently used in over 160 countries world wide by thousands of
          organizations to manage HR, As a React.js developer with 2.5 year of
          experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications.
          <br />
          <br />
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div className="experience-skills">
          <div className="experience-skill">React Native</div>
          <div className="experience-skill">React</div>
          <div className="experience-skill">JavaScript</div>
          <div className="experience-skill">Typescript</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
