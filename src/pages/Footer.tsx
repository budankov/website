import React, { useEffect } from "react";
import { Social_Icons } from "../constant";
import "../styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    (function () {
      const s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = import.meta.env.VITE_TAWK_TO_ID ?? "";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-socials">
        {Social_Icons.map((social) => {
          return (
            <a
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="footer-link"
            >
              <img
                src={social.image}
                alt={social.alt}
                className="footer-icon"
              />
            </a>
          );
        })}
      </div>
      <p className="footer-text">Created with ❤️ using React</p>
    </div>
  );
};

export default Footer;
