import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Promise.all([
        // admin email
        emailjs.send(
          "service_f5ual9s",
          "template_418ga9c",
          form,
          { publicKey: "oCIdhC32OPo41L5B8" }
        ),
        // user auto reply
        emailjs.send(
          "service_f5ual9s",
          "template_pxpicfl",
          form,
          { publicKey: "oCIdhC32OPo41L5B8" }
        )
      ]);

      toast.success("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send ❌");
    }

    setLoading(false);
  };

  return (
    <section className="section-card" id="contact" aria-labelledby="contact-heading">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="section-title" id="contact-heading">Get In Touch</h2>

      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="mb-4">
            I am currently open to internship opportunities and freelance
            projects. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div className="d-flex align-items-center mb-3">
            <div className="icon-box rounded-circle" aria-hidden="true">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <a href="mailto:pradeepdhassr@gmail.com" className="text-muted ms-3" aria-label="Send email to pradeepdhassr@gmail.com">
              pradeepdhassr@gmail.com
            </a>
          </div>

          <div className="d-flex align-items-center">
            <div className="icon-box rounded-circle" aria-hidden="true">
              <i className="fas fa-map-pin" aria-hidden="true"></i>
            </div>
            <span className="text-muted ms-3">Erode, India</span>
          </div>
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

            <div className="mb-3">
              <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-label="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                aria-label="Your email address"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contact-message" className="visually-hidden">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-control"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Message..."
                aria-label="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-gradient w-100"
              disabled={loading}
              aria-label={loading ? 'Sending message, please wait' : 'Send message'}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
              <i className="fas fa-paper-plane ms-2" aria-hidden="true"></i>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;