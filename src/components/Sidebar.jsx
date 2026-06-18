import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import useTypingEffect from '../hooks/useTypingEffect';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const texts = ["FullStack Web Developer", "UI/UX Enthusiast", "Music Composer"];
  const typingText = useTypingEffect(texts);

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar" aria-label="Main navigation sidebar">
      <ThemeSwitcher />

      <div className="avatar-box">
        {/* explicit width/height prevents CLS */}
        <img
          src="/assets/images/my-avatar.png"
          alt="Pradeepdhass R — Full Stack Developer"
          width="88"
          height="88"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <div className="sidebar-info">
        <h1 className="name">Pradeepdhass.R</h1>

        <div className="role-container" aria-live="polite" aria-label="Current role">
          <span className="typing-text">{typingText}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </div>

        <ul className="contact-list mt-4" aria-label="Contact information">
          <li className="contact-item">
            <div className="icon-box" aria-hidden="true">
              <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            </div>
            <div className="contact-info">
              <p>Email</p>
              <a href="mailto:pradeepdhassr@gmail.com" aria-label="Send email to pradeepdhassr@gmail.com">
                pradeepdhassr@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box" aria-hidden="true">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
            </div>
            <div className="contact-info">
              <p>Phone</p>
              <a href="tel:+919362296938" aria-label="Call +91 9362296938">+91 9362296938</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box" aria-hidden="true">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div className="contact-info">
              <p>Location</p>
              <span>Erode, Tamil Nadu</span>
            </div>
          </li>
        </ul>

        <nav className="social-links mt-3" aria-label="Social media links">
          <a href="https://www.linkedin.com/in/pradeep-dhass/" className="social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit LinkedIn profile (opens in new tab)">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/pradeepdhass" className="social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit GitHub profile (opens in new tab)">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/littleboy_pradeep/" className="social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit Instagram profile (opens in new tab)">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </nav>

        <div className="mt-3 text-center">
          <a
            href="/assets/images/My-Resume.pdf"
            download="Pradeepdhass-R-Resume.pdf"
            className="btn btn-outline-light btn-sm w-100 rounded-pill"
            aria-label="Download Pradeepdhass R resume as PDF"
            style={{
              borderColor: "var(--glass-border)",
              color: "var(--text-main)",
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
