import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-socials">
        <a
          href={"https://github.com/budankov"}
          rel="noopener noreferrer"
          target="_blank"
          className="footer-link"
        >
          <img
            src={"/website/Github.svg"}
            alt={"Github"}
            className="footer-icon"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/budankov"}
          rel="noopener noreferrer"
          target="_blank"
          className="footer-link"
        >
          <img
            src={"/website/LinkedIn.svg"}
            alt={"LinkedIn"}
            className="footer-icon"
          />
        </a>
      </div>
      <p className="footer-text">Created with ❤️ using React</p>
    </div>
  );
};

export default Footer;
