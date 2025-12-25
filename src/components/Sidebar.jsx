import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import useTypingEffect from '../hooks/useTypingEffect';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const texts = ["Web Developer", "UI/UX Enthusiast", "Code Creator", "Music Composer"];
  const typingText = useTypingEffect(texts);

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
      <ThemeSwitcher />

      <div className="avatar-box">
        <img src="/assets/images/my-avatar.png" alt="Pradeepdhass" />
      </div>

      <div className="sidebar-info">
        <h1 className="name">Pradeepdhass.R</h1>

        <div className="role-container">
          <span className="typing-text">{typingText}</span>
          <span className="cursor">|</span>
        </div>

        <ul className="contact-list mt-4">
          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="contact-info">
              <p>Email</p>
              <a href="mailto:pradeepdhassr@gmail.com">
                pradeepdhassr@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-info">
              <p>Phone</p>
              <a href="tel:+919362296938">+91 9362296938</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info">
              <p>Location</p>
              <span>Erode, Tamil Nadu</span>
            </div>
          </li>
        </ul>

        <div className="social-links mt-3">
          <a href="https://www.linkedin.com/in/pradeep-dhass/" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/pradeepdhass" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/littleboy_pradeep/" className="social-link" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="mt-3 text-center">
          <a
            href="/assets/images/My Resume.pdf"
            download
            className="btn btn-outline-light btn-sm w-100 rounded-pill"
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
