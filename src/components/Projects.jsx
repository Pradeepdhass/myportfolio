import React from 'react';

const Projects = () => {
  return (
    <section className="section-card" id="projects" aria-labelledby="projects-heading">
      <h2 className="section-title" id="projects-heading">Featured Projects</h2>
      <div className="row g-4">
        {/* Project 1 — Mentor Connect */}
        <div className="col-md-6">
          <article className="project-card" data-reveal="">
            <div
              className="project-status status-live"
              title="Live Project"
              aria-label="Status: Live"
            ></div>

            <div className="d-flex justify-content-between mb-3">
              <h3 className="project-title">Mentor Connect Platform</h3>
              <a
                href="https://urban-rural-mentor-connect.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Mentor Connect Platform (opens in new tab)"
                style={{ color: "var(--color-cyan)" }}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>

            <p className="small text-muted mb-3">
              A mentor–mentee matchmaking platform with user onboarding,
              skill-based pairing, session scheduling, and progress
              tracking—built for seamless guidance and community growth.
            </p>

            <div className="mb-4" aria-label="Technologies used">
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">React.JS</span>
            </div>

            <div className="d-flex gap-2">
              <a
                href="https://urban-rural-mentor-connect.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="Live demo of Mentor Connect Platform (opens in new tab)"
                style={{ borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/pradeepdhass"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="View Mentor Connect Platform source code on GitHub (opens in new tab)"
                style={{ background: "rgba(255,255,255,0.1)", borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                <i className="fab fa-github" aria-hidden="true"></i> Code
              </a>
            </div>
          </article>
        </div>

        {/* Project 2 — MARKUS 2026 */}
        <div className="col-md-6">
          <article className="project-card" data-reveal="">
            <div
              className="project-status status-live"
              title="Live Project"
              aria-label="Status: Live"
            ></div>
            <div className="d-flex justify-content-between mb-3">
              <h3 className="project-title">MARKUS 2026</h3>
              <a
                href="https://markus26ctpg.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open MARKUS 2026 Website (opens in new tab)"
                style={{ color: "var(--color-cyan)" }}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>
            <p className="small text-muted mb-3">
              Event landing page featuring scroll animations, dark/light
              mode toggle, schedule timeline, and registration forms for CT-PG.
            </p>
            <div className="mb-4" aria-label="Technologies used">
              <span className="tech-pill">HTML5</span>
              <span className="tech-pill">Bootstrap</span>
              <span className="tech-pill">React.js</span>
            </div>
            <div className="d-flex gap-2">
              <a
                href="https://markus26ctpg.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="Live demo of MARKUS 2026 (opens in new tab)"
                style={{ borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/pradeepdhass"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="View MARKUS 2026 source code on GitHub (opens in new tab)"
                style={{ background: "rgba(255,255,255,0.1)", borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                <i className="fab fa-github" aria-hidden="true"></i> Code
              </a>
            </div>
          </article>
        </div>

        {/* Project 3 — Student Marks Management System */}
        <div className="col-md-6">
          <article className="project-card" data-reveal="">
            <div
              className="project-status status-live"
              title="Live Project"
              aria-label="Status: Live"
            ></div>
            <div className="d-flex justify-content-between mb-3">
              <h3 className="project-title">Student Marks Management System</h3>
              <a
                href="https://stdmarksmgnt.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Student Marks Management System (opens in new tab)"
                style={{ color: "var(--color-cyan)" }}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>
            <p className="small text-muted mb-3">
              A comprehensive web application for managing student academic records, marks entry, performance evaluation, and grade reporting.
            </p>
            <div className="mb-4" aria-label="Technologies used">
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">Express</span>
              <span className="tech-pill">Vite</span>
            </div>
            <div className="d-flex gap-2">
              <a
                href="https://stdmarksmgnt.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="Live demo of Student Marks Management System (opens in new tab)"
                style={{ borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Pradeepdhass/stdmarksmgnt"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="View Student Marks Management System source code on GitHub (opens in new tab)"
                style={{ background: "rgba(255,255,255,0.1)", borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                <i className="fab fa-github" aria-hidden="true"></i> Code
              </a>
            </div>
          </article>
        </div>

        {/* Project 4 — Attendance & Payroll */}
        <div className="col-md-6">
          <article className="project-card" data-reveal="">
            <div
              className="project-status status-live"
              title="Live Project"
              aria-label="Status: Live"
            ></div>
            <div className="d-flex justify-content-between mb-3">
              <h3 className="project-title">Departmental Attendance Tracking &amp; Payroll Calculation</h3>
              <a
                href="https://github.com/Pradeepdhass/Attendance-Tracker"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Attendance Tracker GitHub Repository (opens in new tab)"
                style={{ color: "var(--color-cyan)" }}
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>
            <p className="small text-muted mb-3">
              A comprehensive application for tracking departmental attendance and automatically calculating payroll based on logged hours and leaves.
            </p>
            <div className="mb-4" aria-label="Technologies used">
              <span className="tech-pill">Mobile App</span>
              <span className="tech-pill">Database</span>
            </div>
            <div className="d-flex gap-2">
              <a
                href="https://github.com/Pradeepdhass/Attendance-Tracker"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-sm btn-outline-light rounded-pill"
                aria-label="View Attendance & Payroll source code on GitHub (opens in new tab)"
                style={{ background: "rgba(255,255,255,0.1)", borderColor: "var(--text-muted)", color: "var(--text-main)" }}
              >
                <i className="fab fa-github" aria-hidden="true"></i> Code
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
