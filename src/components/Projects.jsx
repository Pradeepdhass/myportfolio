import React from 'react';

const Projects = () => {
  return (
    <section className="section-card" id="projects" data-aos="fade-up">
      <h2 className="section-title">Featured Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="project-card" data-reveal="">
            <div
              className="project-status status-live"
              title="Live Project"
            ></div>

            <div className="d-flex justify-content-between mb-3">
              <h4 className="project-title">Mentor Connect Platform</h4>
              <a href="#" style={{ color: "var(--color-cyan)" }}>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <p className="small text-muted mb-3">
              A mentor–mentee matchmaking platform with user onboarding,
              skill-based pairing, session scheduling, and progress
              tracking—built for seamless guidance and community growth.
            </p>

            <div className="mb-4">
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">React.JS</span>
            </div>

            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-sm btn-outline-light rounded-pill"
                style={{
                  borderColor: "var(--text-muted)",
                  color: "var(--text-main)",
                }}
              >
                Live Demo
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline-light rounded-pill"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "var(--text-muted)",
                  color: "var(--text-main)",
                }}
              >
                <i className="fab fa-github"></i> Code
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="project-card" data-reveal="">
            <div
              className="project-status status-beta"
              title="In Beta"
            ></div>
            <div className="d-flex justify-content-between mb-3">
              <h4 className="project-title">MESCIA 2K26</h4>
              <a href="#" style={{ color: "var(--color-cyan)" }}>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <p className="small text-muted mb-3">
              Event landing page featuring scroll animations, dark/light
              mode toggle, and registration forms.
            </p>
            <div className="mb-4">
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">React.js</span>
            </div>
            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-sm btn-outline-light rounded-pill"
                style={{
                  borderColor: "var(--text-muted)",
                  color: "var(--text-main)",
                }}
              >
                Live Demo
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline-light rounded-pill"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "var(--text-muted)",
                  color: "var(--text-main)",
                }}
              >
                <i className="fab fa-github"></i> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
