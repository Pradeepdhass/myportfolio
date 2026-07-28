import React from 'react';

const About = () => {
  return (
    <section className="section-card" id="about" aria-labelledby="about-heading">
      <h2 className="section-title" id="about-heading">About Me</h2>

      <div className="row align-items-center">
        <div className="col-lg-4 text-center mb-3 mb-lg-0">
          <div className="profile-card">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Myphoto.png`}
              alt="Pradeepdhass R — Full Stack Developer and UI/UX Enthusiast"
              width="226"
              height="274"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          </div>
        </div>

        <div className="col-lg-8">
          <p style={{ color: "var(--text-main)", lineHeight: 1.8 }}>
            Hi, I'm{" "}
            <strong style={{ color: "var(--color-cyan)" }}>Pradeepdhass R</strong>
            {" "}— a{" "}
            <strong style={{ color: "var(--color-pink)" }}>Full Stack Developer</strong>
            {" "}&amp;{" "}
            <strong style={{ color: "var(--color-cyan)" }}>UI/UX Enthusiast</strong>
            {" "}specializing in the{" "}
            <strong style={{ color: "var(--color-pink)" }}>MERN Stack</strong>.
            {" "}Pursuing M.Sc. Software Systems at Kongu Engineering College,
            I craft accessible, pixel-perfect digital experiences.
          </p>

          <div className="row mt-3 g-3">
            <div className="col-sm-6">
              <h3 style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                🎨 UI/UX &amp; Frontend
              </h3>
              <ul style={{ margin: "0 0 0 18px", color: "var(--text-main)", lineHeight: 1.8, fontSize: "0.9rem" }}>
                <li>React.js SPAs with smooth animations &amp; theming</li>
                <li>Accessible, responsive designs with Figma &amp; CSS</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h3 style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                ⚙️ MERN Stack &amp; Backend
              </h3>
              <ul style={{ margin: "0 0 0 18px", color: "var(--text-main)", lineHeight: 1.8, fontSize: "0.9rem" }}>
                <li>REST APIs with Node.js, Express &amp; MongoDB</li>
                <li>JWT auth, secure architecture &amp; cloud deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
