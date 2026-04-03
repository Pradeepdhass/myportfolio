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
          "oCIdhC32OPo41L5B8"
        ),
        // user auto reply
        emailjs.send(
          "service_f5ual9s",
          "template_pxpicfl",
          form,
          "oCIdhC32OPo41L5B8"
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
    <section className="section-card" id="contact">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="section-title">Get In Touch</h2>

      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="mb-4">
            I am currently open to internship opportunities and freelance
            projects. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div className="d-flex align-items-center mb-3">
            <div className="icon-box rounded-circle">
              <i className="fas fa-envelope"></i>
            </div>
            <span className="text-muted ms-3">
              pradeepdhassr@gmail.com
            </span>
          </div>

          <div className="d-flex align-items-center">
            <div className="icon-box rounded-circle">
              <i className="fas fa-map-pin"></i>
            </div>
            <span className="text-muted ms-3">Erode, India</span>
          </div>
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-gradient w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
              <i className="fas fa-paper-plane ms-2"></i>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;