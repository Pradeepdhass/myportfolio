import React from 'react';

const Skills = () => {
  return (
    <section
      className="section-card"
      id="skills"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="section-title">Tech Arsenal</h2>
      <p className="mb-4">
        Tools I use to create digital masterpieces.
      </p>

      <div className="d-flex flex-wrap">
        <span className="skill-tag skill-orange" data-reveal="" data-percent="95%">
          <i className="fab fa-html5"></i> HTML5
        </span>

        <span className="skill-tag skill-orange" data-reveal="" data-percent="90%">
          <i className="fab fa-css3-alt"></i> CSS3
        </span>

        <span className="skill-tag skill-orange" data-reveal="" data-percent="85%">
          <i className="fab fa-bootstrap"></i> Bootstrap
        </span>

        <span className="skill-tag skill-blue" data-reveal="" data-percent="80%">
          <i className="fab fa-js"></i> JavaScript
        </span>

        <span className="skill-tag skill-blue" data-reveal="" data-percent="75%">
          <i className="fab fa-react"></i> React.js
        </span>

        <span className="skill-tag skill-blue" data-reveal="" data-percent="88%">
          <i className="fab fa-figma"></i> Figma
        </span>

        <span className="skill-tag skill-green" data-reveal="" data-percent="70%">
          <i className="fas fa-database"></i> MongoDB
        </span>

        <span className="skill-tag skill-green" data-reveal="" data-percent="85%">
          <i className="fab fa-python"></i> Python
        </span>

        <span className="skill-tag skill-green" data-reveal="" data-percent="78%">
          <i className="fas fa-fire"></i> Firebase
        </span>

        <span className="skill-tag skill-green" data-reveal="" data-percent="82%">
          <i className="fas fa-server"></i> MySQL
        </span>
      </div>
    </section>
  );
};

export default Skills;
