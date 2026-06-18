import React from 'react';

const Achievements = () => {
  return (
    <section className="section-card" id="achievements" aria-labelledby="achievements-heading">
      <h2 className="section-title" id="achievements-heading">Achievements</h2>
      <div className="row g-4">
        <div className="col-md-6" data-reveal="">
          <div className="achievement-card">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h5 style={{ color: "var(--text-main)" }}>
                  Smart India Hackathon (SIH 2025)
                </h5>
                <p className="small mb-1">National Level Hackathon • 2025</p>
              </div>
              <span
                className="badge"
                style={{
                  background: "var(--color-orange)",
                  color: "white",
                }}
              >
                Participated
              </span>
            </div>
            <button
              className="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#achv1"
              aria-expanded="false"
              aria-controls="achv1"
              aria-label="View details about Smart India Hackathon 2025"
            >
              View Details{" "}
              <i className="fas fa-chevron-down ms-1" aria-hidden="true"></i>
            </button>
            <div className="collapse mt-2" id="achv1">
              <p className="small text-muted mb-0">
                Participated in the Smart India Hackathon (SIH) 2025, gaining valuable experience in fast-paced problem solving, ideation, and collaborative teamwork.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-reveal="">
          <div className="achievement-card">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className="achievement-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h5 style={{ color: "var(--text-main)" }}>
                  Hackwave 2.0
                </h5>
                <p className="small mb-1">Department Hackathon Series</p>
              </div>
              <span
                className="badge"
                style={{
                  background: "var(--color-pink)",
                  color: "white",
                }}
              >
                Participated
              </span>
            </div>
            <button
              className="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#achv2"
              aria-expanded="false"
              aria-controls="achv2"
              aria-label="View details about Hackwave 2.0"
            >
              View Details{" "}
              <i className="fas fa-chevron-down ms-1" aria-hidden="true"></i>
            </button>
            <div className="collapse mt-2" id="achv2">
              <p className="small text-muted mb-0">
                Participated in the Hackwave 2.0 hackathon by building and pitching the <strong>Mentor Connect</strong> project.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-reveal="">
          <div className="achievement-card">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className="achievement-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h5 style={{ color: "var(--text-main)" }}>
                  Hackwave 3.0.1 & 3.0.2
                </h5>
                <p className="small mb-1">Department Hackathon Series</p>
              </div>
              <span
                className="badge"
                style={{
                  background: "var(--color-cyan)",
                  color: "white",
                }}
              >
                Participated
              </span>
            </div>
            <button
              className="collapse-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#achv3"
              aria-expanded="false"
              aria-controls="achv3"
              aria-label="View details about Hackwave 3.0.1 and 3.0.2"
            >
              View Details{" "}
              <i className="fas fa-chevron-down ms-1" aria-hidden="true"></i>
            </button>
            <div className="collapse mt-2" id="achv3">
              <p className="small text-muted mb-0">
                Participated across multiple editions of the Hackwave hackathon by building advanced workflows and implementing complex logic using <strong>n8n automation</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
