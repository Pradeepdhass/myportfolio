import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="footer-card"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="footer-inner" data-reveal="">
        <div className="footer-col footer-brand">
          <h3 className="footer-title section-title">R. Pradeepdhass</h3>
          <p className="footer-desc">
            UI/UX Designer &amp; Front-End Developer — I craft usable
            interfaces and polished interactions for web &amp; mobile
            products.
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/pradeep-dhass/"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/pradeepdhass"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/littleboy_pradeep/"
              className="social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4 className="footer-subtitle">Contact</h4>
          <address className="contact-block">
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:pradeepdhassr@gmail.com">
                pradeepdhassr@gmail.com
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919362296938">+91 93622 96938</a>
            </div>
            <div>
              <strong>Location:</strong> Erode, Tamil Nadu
            </div>
          </address>

          <p className="footer-copy">
            © <span>{year}</span> Pradeepdhass.R{" "}
          </p>
        </div>
      </div>
      <p className="footer-copy">
        Transforming ideas into elegant interfaces and seamless user
        journeys — crafted by <strong>Pradeepdhass.R</strong> ©{" "}
        <span>{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
