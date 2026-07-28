import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import CertificatesModal from './CertificatesModal';
import { certificatesData } from '../data/certificatesData';

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardImageCert, setActiveCardImageCert] = useState(null);

  // Initial 4 featured certificates displayed on screen, remaining hidden until clicking See More
  const featuredCertificates = certificatesData.slice(0, 4);

  return (
    <section className="section-card" id="achievements" aria-labelledby="achievements-heading">
      <h2 className="section-title" id="achievements-heading">Achievements &amp; Certificates</h2>
      
      <div className="row g-4">
        {featuredCertificates.map((cert) => (
          <div key={cert.id} className="col-md-6" data-reveal="">
            <div className="achievement-card h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="achievement-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <h5 style={{ color: "var(--text-main)" }}>
                    {cert.title}
                  </h5>
                  <p className="small mb-1">{cert.issuer} • {cert.date}</p>
                </div>
                <span
                  className="badge"
                  style={{
                    background: cert.badgeColor,
                    color: "white",
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {cert.image && (
                <div className="mt-auto pt-3">
                  <button
                    className="collapse-btn w-100 justify-content-center"
                    type="button"
                    onClick={() => setActiveCardImageCert(cert)}
                    style={{ borderColor: 'var(--color-cyan)', color: 'var(--color-cyan)' }}
                  >
                    <i className="fas fa-image me-2"></i> View Certificate
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See More Certificates Button */}
      <div className="text-center mt-4">
        <button
          className="collapse-btn px-4 py-2"
          onClick={() => setIsModalOpen(true)}
          style={{
            fontSize: "0.95rem",
            background: "rgba(255, 255, 255, 0.03)",
            borderColor: "var(--color-cyan)",
            color: "var(--color-cyan)",
            borderRadius: "30px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <i className="fas fa-certificate text-warning"></i> See More Certificates ({certificatesData.length} Total)
          <i className="fas fa-arrow-right ms-1"></i>
        </button>
      </div>

      {/* Certificate Modal */}
      <CertificatesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Lightbox for Featured Cards Image Preview */}
      {activeCardImageCert &&
        createPortal(
          <div
            className="cert-lightbox-backdrop"
            onClick={() => setActiveCardImageCert(null)}
            style={{ zIndex: 100000 }}
          >
            <div
              className="cert-lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-lightbox-header d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-0" style={{ color: "var(--text-main)" }}>{activeCardImageCert.title}</h5>
                  <span className="extra-small text-muted">{activeCardImageCert.issuer}</span>
                </div>
                <button
                  className="cert-lightbox-close"
                  onClick={() => setActiveCardImageCert(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="cert-lightbox-body text-center py-2">
                <img
                  src={activeCardImageCert.image}
                  alt={activeCardImageCert.title}
                  className="img-fluid cert-lightbox-img rounded shadow-lg"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Achievements;
