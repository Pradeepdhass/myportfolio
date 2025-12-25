import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import FloatingIcons from './components/FloatingIcons';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import "./styles/global.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS or any global scripts here if needed
    // The original script.js logic for scroll reveal is mostly CSS based now or can be added as a hook
    // For now we rely on CSS and standard React behavior
    
    // Simple intersection observer for reveal animations if not using a library like AOS-React
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
      
      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
      
      // Update progress bar width
      progressBar.style.width = `${scrollPercentage}%`;
    };

    // Initial update
    updateProgressBar();

    // Add scroll event listener
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
      {/* PRELOADER */}
      <Preloader />

      {/* FLOATING ICONS */}
      <div id="progress-bar"></div>
      <FloatingIcons />

      <button
        className="btn btn-dark mobile-toggle rounded-circle shadow-lg"
        onClick={toggleSidebar}
        style={{ zIndex: 1000 }} // Ensure it's above other elements
      >
        <i className="fas fa-bars"></i>
      </button>

      <main>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="main-content">
          <About />
          <Skills />
          <Achievements />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <Chatbot />
          <ScrollToTop />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
