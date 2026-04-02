import React from "react";
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
            I do Code & <span className="banner-gradient">Chill</span>
          </p>
          <img
            src="/popcorn.gif"
            alt="Kostiantyn Budankov"
            className="banner-gif"
          />
        </div>

        <p className="banner-description">
          Passionate Software Engineer with a focus on React Native development,
          dedicated to crafting elegant and user-friendly mobile applications.
        </p>
        <div className="banner-button-container">
          <button
            onClick={() => window.open("mailto:budankovkostya@gmail.com")}
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
