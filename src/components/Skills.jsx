import React from 'react';

const Skills = () => {
  return (
    <section
      className="section-card"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <h2 className="section-title" id="skills-heading" style={{ marginBottom: '20px' }}>Tech Arsenal</h2>
      <p className="mb-4 text-muted" style={{ marginBottom: '20px' }}>
        Tools I use to create digital masterpieces.
      </p>

      <div className="skills-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px 15px' }}>
        
        {/* Programming Languages */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-code me-2"></i> Programming Languages
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="85%">C</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="80%">C++</span>
            <span className="skill-tag skill-green" data-reveal="" data-percent="85%"><i className="fab fa-python"></i> Python</span>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="80%"><i className="fab fa-java"></i> Java</span>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="90%"><i className="fab fa-js"></i> JavaScript</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="75%">C#</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="70%"><i className="fab fa-php"></i> PHP</span>
          </div>
        </div>
        
        {/* Frontend Section */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-desktop me-2"></i> Frontend
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="95%"><i className="fab fa-html5"></i> HTML5</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="90%"><i className="fab fa-css3-alt"></i> CSS3</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="85%"><i className="fab fa-bootstrap"></i> Bootstrap</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="80%"><i className="fab fa-react"></i> React.js</span>
          </div>
        </div>

        

        {/* Backend Technologies */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-server me-2"></i> Backend Technologies
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-green" data-reveal="" data-percent="85%"><i className="fab fa-node-js"></i> Node.js</span>
            <span className="skill-tag skill-green" data-reveal="" data-percent="80%">Express.js</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-database me-2"></i> Databases
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-green" data-reveal="" data-percent="85%">MongoDB</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="80%">SQL</span>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="75%"><i className="fas fa-fire"></i> Firebase</span>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-cloud me-2"></i> Cloud & DevOps
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="70%"><i className="fab fa-aws"></i> AWS</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="75%">DevOps</span>
          </div>
        </div>

        {/* Generative AI */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-robot me-2"></i> Generative AI
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-green" data-reveal="" data-percent="85%">OpenAI API</span>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="80%">Claude</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="75%">Hugging Face</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-code-branch me-2"></i> Tools
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="90%"><i className="fab fa-git-alt"></i> Git</span>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="90%"><i className="fab fa-github"></i> GitHub</span>
          </div>
        </div>

        {/* Design Tools */}
        <div className="skill-category">
          <h3 className="skill-category-title" style={{ color: 'var(--text-main)' }}>
            <i className="fas fa-paint-brush me-2"></i> Design Tools
          </h3>
          <div className="d-flex flex-wrap" style={{ margin: '-4px' }}>
            <span className="skill-tag skill-blue" data-reveal="" data-percent="88%"><i className="fab fa-figma"></i> Figma</span>
            <span className="skill-tag skill-orange" data-reveal="" data-percent="90%">Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
