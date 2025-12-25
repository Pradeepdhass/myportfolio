import React, { useEffect } from 'react';

const About = () => {
  return (
    <section className="section-card" id="about" data-aos="fade-up">
      <h2 className="section-title">About Me</h2>

      <div className="row align-items-center">
        <div className="col-lg-4 text-center mb-3 mb-lg-0">
          <div className="profile-card">
            <img src="/assets/images/Myphoto.jpg" alt="Profile" />
          </div>
        </div>

        <div className="col-lg-8 order-1 order-lg-1">
          <p style={{ color: "var(--text-main)" }}>
            Hi, I’m{" "}
            <strong style={{ color: "var(--color-cyan)" }}>
              Pradeepdhass R
            </strong>{" "}
            — a passionate{" "}
            <strong style={{ color: "var(--color-cyan)" }}>
              UI/UX Designer
            </strong>{" "}
            and{" "}
            <strong style={{ color: "var(--color-pink)" }}>
              Front-End Developer
            </strong>{" "}
            who loves crafting clean, meaningful, and user-friendly
            digital experiences.
          </p>

          <p style={{ color: "var(--text-main)" }}>
            I’m currently pursuing{" "}
            <strong style={{ color: "var(--color-pink)" }}>
              M.Sc. Software Systems
            </strong>{" "}
            at Kongu Engineering College. I enjoy exploring modern
            product design, motion UI, component-driven development, and
            pixel-perfect interfaces with accessibility in mind.
          </p>

          <p style={{ color: "var(--text-main)" }}>
            My work blends{" "}
            <strong style={{ color: "var(--color-cyan)" }}>
              design thinking
            </strong>{" "}
            with{" "}
            <strong style={{ color: "var(--color-pink)" }}>
              frontend engineering
            </strong>
            , helping ideas evolve into polished, interactive, and
            scalable experiences.
          </p>

          <div style={{ marginTop: "18px" }}>
            <h3
              style={{
                fontSize: "1rem",
                marginBottom: "8px",
                color: "var(--text-muted)",
              }}
            >
              What I Design
            </h3>
            <ul
              style={{
                margin: "0 0 12px 18px",
                color: "var(--text-main)",
                lineHeight: 1.6,
              }}
            >
              <li>Clean and modern UI layouts for web & mobile</li>
              <li>Wireframes, user flows, and interactive prototypes</li>
              <li>
                Design systems, component libraries, and style guides
              </li>
              <li>
                Minimal, aesthetic, and user-focused digital products
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "18px" }}>
            <h3
              style={{
                fontSize: "1rem",
                marginBottom: "8px",
                color: "var(--text-muted)",
              }}
            >
              What I Build
            </h3>
            <ul
              style={{
                margin: "0 0 12px 18px",
                color: "var(--text-main)",
                lineHeight: 1.6,
              }}
            >
              <li>
                Responsive frontend interfaces with clean animations
              </li>
              <li>Reusable components using modern UI frameworks</li>
              <li>
                Interactive dashboards, forms, and dynamic websites
              </li>
              <li>
                Fast, consistent, accessibility-focused user experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
