import React from 'react';

const Education = () => {
  return (
    <section className="section-card" id="education" data-aos="fade-up">
      <h2 className="section-title">Education</h2>
      <div className="timeline mt-4" data-reveal="">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <span className="timeline-year">
            2023 - 2028 (Present)
          </span>
          <h5 style={{ color: "var(--text-main)" }}>
            M.Sc. Software Systems
          </h5>
          <p>Kongu Engineering College, Perundurai</p>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <span className="timeline-year">2022 - 2023</span>
          <h5 style={{ color: "var(--text-main)" }}>
            Higher Secondary (HSC)
          </h5>
          <p>Kongu National Matric Hr Sec School, Erode</p>
        </div>
        <div className="timeline-item mb-0">
          <div className="timeline-dot"></div>
          <span className="timeline-year">2021 - 2022</span>
          <h5 style={{ color: "var(--text-main)" }}>
            Secondary School (SSLC)
          </h5>
          <p>SVN Matric Hr Sec School, Chithode</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
