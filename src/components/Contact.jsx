import React from 'react';

const Contact = () => {
  return (
    <section className="section-card" id="contact" data-aos="fade-up">
      <h2 className="section-title">Get In Touch</h2>
      <div className="row" data-reveal="">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="mb-4">
            I am currently open to internship opportunities and freelance
            projects. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="d-flex align-items-center mb-3">
            <div
              className="icon-box rounded-circle"
              style={{ background: "var(--bg-body)" }}
            >
              <i className="fas fa-envelope"></i>
            </div>
            <span className="text-muted ms-3">
              pradeepdhassr@gmail.com
            </span>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="icon-box rounded-circle"
              style={{ background: "var(--bg-body)" }}
            >
              <i className="fas fa-map-pin"></i>
            </div>
            <span className="text-muted ms-3">Erode, India</span>
          </div>
        </div>
        <div className="col-lg-6">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="6d2e2dab-4507-41f6-b628-9ea84265f940"
            />
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-gradient w-100">
              Send Message{" "}
              <i className="fas fa-paper-plane ms-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
