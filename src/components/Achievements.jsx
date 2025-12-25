import React from 'react';

const Achievements = () => {
  return (
    <section className="section-card" id="achievements" data-aos="fade-up">
      <h2 className="section-title">Achievements</h2>
      <div className="row g-4">
        <div className="col-md-6" data-reveal="">
          <div className="achievement-card">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h5 style={{ color: "var(--text-main)" }}>
                  Smart India Hackathon (SIH-25) Participate
                </h5>
                <p className="small mb-1">KEC Hackathon 2025</p>
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
            >
              View Details{" "}
              <i className="fas fa-chevron-down ms-1"></i>
            </button>
            <div className="collapse mt-2" id="achv1">
              <p className="small text-orange mb-0">
                Led the frontend team to build a responsive prototype.
                Awarded 'Best UX Implementation' for
                accessibility features.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6" data-reveal="">
          <div className="achievement-card">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <div className="achievement-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
                <h5 style={{ color: "var(--text-main)" }}>
                  Hackwave 3.0.1
                </h5>
                <p className="small mb-1">Department Hackathon • 2025</p>
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
              data-bs-target="#achv3"
            >
              View Details{" "}
              <i className="fas fa-chevron-down ms-1"></i>
            </button>
            <div className="collapse mt-2" id="achv3">
              <p className="small text-orange mb-0">
                Participated in major frontend projects by enhancing UI
                consistency, improving user experience, and assisting in
                feature testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
