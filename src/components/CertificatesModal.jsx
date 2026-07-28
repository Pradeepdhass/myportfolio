import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { certificatesData } from '../data/certificatesData';

export { certificatesData };

const CertificatesModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeImageCert, setActiveImageCert] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredCertificates = certificatesData.filter((cert) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(query)))
    );
  });

  const modalJSX = (
    <>
      {/* Certificates Modal Backdrop */}
      <div className="cert-modal-backdrop" onClick={onClose} style={{ zIndex: 99999 }}>
        <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
          
          {/* Modal Header */}
          <div className="cert-modal-header d-flex justify-content-between align-items-center">
            <div>
              <h3 className="mb-1 d-flex align-items-center gap-2" style={{ color: "var(--text-main)" }}>
                <i className="fas fa-certificate text-warning"></i> All Certificates &amp; Achievements
              </h3>
              <p className="small mb-0" style={{ color: "var(--text-muted)" }}>
                {certificatesData.length} Verified Credentials &amp; Technical Certifications.
              </p>
            </div>

            <button
              className="cert-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              title="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Controls Bar: Clean Search Bar */}
          <div className="cert-modal-controls py-3">
            <div className="cert-search-box">
              <i className="fas fa-search cert-search-icon"></i>
              <input
                type="text"
                className="form-control cert-search-input"
                placeholder="Search certificate by title, issuer, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="cert-search-clear"
                  onClick={() => setSearchQuery('')}
                >
                  <i className="fas fa-times-circle"></i>
                </button>
              )}
            </div>
          </div>

          {/* Modal Body: Achievement Cards Grid */}
          <div className="cert-modal-body">
            {filteredCertificates.length === 0 ? (
              <div className="text-center py-5">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 style={{ color: "var(--text-main)" }}>No matching certificates found</h5>
                <p className="small" style={{ color: "var(--text-muted)" }}>Try searching another keyword.</p>
              </div>
            ) : (
              <div className="row g-4">
                {filteredCertificates.map((cert) => (
                  <div key={cert.id} className="col-md-6">
                    <div className="achievement-card h-100 d-flex flex-column">
                      
                      {/* Top Header */}
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <div className="achievement-icon">
                            <i className={cert.icon}></i>
                          </div>
                          <h5 style={{ color: "var(--text-main)" }}>
                            {cert.title}
                          </h5>
                          <p className="small mb-1" style={{ color: "var(--text-muted)" }}>{cert.issuer} • {cert.date}</p>
                        </div>
                        <span
                          className="badge"
                          style={{
                            background: cert.badgeColor || 'var(--color-pink)',
                            color: "white",
                          }}
                        >
                          {cert.badge}
                        </span>
                      </div>

                      {/* Card Action Button: View Certificate */}
                      {cert.image && (
                        <div className="mt-auto pt-3">
                          <button
                            className="collapse-btn w-100 justify-content-center"
                            type="button"
                            onClick={() => setActiveImageCert(cert)}
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
            )}
          </div>

        </div>
      </div>

      {/* Lightbox for Certificate Photo */}
      {activeImageCert && (
        <div
          className="cert-lightbox-backdrop"
          onClick={() => setActiveImageCert(null)}
          style={{ zIndex: 100000 }}
        >
          <div
            className="cert-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-lightbox-header d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="mb-0" style={{ color: "var(--text-main)" }}>{activeImageCert.title}</h5>
                <span className="extra-small" style={{ color: "var(--text-muted)" }}>{activeImageCert.issuer}</span>
              </div>
              <button
                className="cert-lightbox-close"
                onClick={() => setActiveImageCert(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="cert-lightbox-body text-center py-2">
              <img
                src={activeImageCert.image}
                alt={activeImageCert.title}
                className="img-fluid cert-lightbox-img rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(modalJSX, document.body);
};

export default CertificatesModal;
