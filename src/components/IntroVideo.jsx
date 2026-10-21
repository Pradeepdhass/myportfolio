import React, { useState, useRef } from 'react';

const IntroVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback prevented:', err);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const videoSrc = `${import.meta.env.BASE_URL}assets/Intro/my_intro.mp4`;
  const posterSrc = `${import.meta.env.BASE_URL}assets/images/Myphoto.png`;

  return (
    <div
      ref={containerRef}
      className={`intro-video-container ${isPlaying ? 'is-playing' : 'is-paused'}`}
      aria-label="Personal Intro Video player"
    >
      {/* Main Video Element */}
      <video
        ref={videoRef}
        className="intro-video-element"
        src={videoSrc}
        poster={posterSrc}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Right Small Play / Pause Icon Button */}
      <button
        type="button"
        className={`intro-corner-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        aria-label={isPlaying ? 'Pause Intro Video' : 'Play Intro Video'}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'} aria-hidden="true"></i>
        {!isPlaying && <span className="corner-pulse-dot"></span>}
      </button>
    </div>
  );
};

export default IntroVideo;
