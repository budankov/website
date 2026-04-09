import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-image-container">
          <img
            src="/Me.png"
            alt="Kostiantyn Budankov"
            className="banner-image"
          />
        </div>

        <div className="banner-name">Kostiantyn Budankov!</div>
        <div className="banner-subtitle-container">
          <p className="banner-subtitle">
            <span className="banner-gradient">
              I build apps & enjoy the process
            </span>
          </p>
          <img
            src="/popcorn.gif"
            alt="Kostiantyn Budankov"
            className="banner-gif"
          />
        </div>

        <p className="banner-description">
          I create mobile applications with a focus on simplicity, usability,
          and clean design. Turning ideas into working products is what drives
          me.
        </p>
        <div className="banner-button-container">
          <button
            onClick={() => window.open("mailto:contact@budankov.dev")}
            className="banner-button"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
