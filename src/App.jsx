import React, { useState, useEffect, lazy, Suspense } from 'react';
import Preloader from './components/Preloader';
import FloatingIcons from './components/FloatingIcons';
import Sidebar from './components/Sidebar';
import About from './components/About';

// Lazy-load below-the-fold components to improve LCP and TTI
const Skills = lazy(() => import('./components/Skills'));
const Achievements = lazy(() => import('./components/Achievements'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const InteractiveFX = lazy(() => import('./components/InteractiveFX'));

import { ThemeProvider } from './context/ThemeContext';
import "./styles/global.css";

// Minimal skeleton for section cards while loading
const SectionSkeleton = () => (
  <div className="section-card" style={{ minHeight: 200, opacity: 0.4 }} aria-hidden="true" />
);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  // Progress bar scroll handler
  useEffect(() => {
    const updateProgressBar = () => {
      const progressBar = document.getElementById('progress-bar');
      if (!progressBar) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
      
      progressBar.style.width = `${scrollPercentage}%`;
    };

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    window.addEventListener('resize', updateProgressBar, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      {/* Custom cursor — lazy loaded, non-critical */}
      <Suspense fallback={null}>
        <InteractiveFX />
      </Suspense>

      {/* PRELOADER */}
      <Preloader />

      {/* FLOATING ICONS */}
      <div id="progress-bar" role="progressbar" aria-label="Page scroll progress" aria-valuemin={0} aria-valuemax={100}></div>
      <FloatingIcons />

      <button
        className="btn btn-dark mobile-toggle rounded-circle shadow-lg"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar"
        style={{ zIndex: 1000 }}
      >
        <i className="fas fa-bars" aria-hidden="true"></i>
      </button>

      <main>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="main-content">
          {/* Above-the-fold — loaded eagerly */}
          <About />

          {/* Below-the-fold — lazy loaded */}
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
