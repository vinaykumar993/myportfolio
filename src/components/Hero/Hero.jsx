import React, { useEffect, useRef } from 'react'
import './Hero.css'

const roles = ['Full Stack Developer', 'Spring Boot Engineer', 'React Developer', 'API Architect']

export default function Hero() {
  const roleRef = useRef(null)
  let currentRole = 0
  let currentChar = 0
  let isDeleting = false
  let timeout

  useEffect(() => {
    const type = () => {
      if (!roleRef.current) return
      const full = roles[currentRole]
      const display = isDeleting ? full.slice(0, currentChar - 1) : full.slice(0, currentChar + 1)
      roleRef.current.textContent = display

      if (!isDeleting) currentChar++
      else currentChar--

      let speed = isDeleting ? 40 : 80

      if (!isDeleting && currentChar === full.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentRole = (currentRole + 1) % roles.length
        speed = 400
      }

      timeout = setTimeout(type, speed)
    }

    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid overlay */}
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            <span className="name-line">Hi, I'm</span>
            <span className="name-main">Vinay Kumar</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I build </span>
            <span className="role-text" ref={roleRef}></span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Aspiring Full Stack Developer skilled in <strong>Java</strong>, <strong>Spring Boot</strong>,{' '}
            <strong>REST APIs</strong>, and <strong>React.js</strong>. Passionate about building scalable,
            performant web applications that solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2024</span>
              <span className="stat-label">Intern @ Ardent</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="file-name">vinay.java</span>
            </div>
            <pre className="code-body">
{`public class VinayKumar {
  String role = "Full Stack Dev";
  String[] skills = {
    "Java", "Spring Boot",
    "React", "MySQL",
    "REST APIs", "Docker"
  };
  
  public String getPassion() {
    return "Building amazing"
         + " web apps ✨";
  }
  
  public boolean isAvailable() {
    return true; // Hire me!
  }
}`}
            </pre>
          </div>

          <div className="floating-chip chip-1">
            <span>☕</span> Java
          </div>
          <div className="floating-chip chip-2">
            <span>⚛️</span> React
          </div>
          <div className="floating-chip chip-3">
            <span>🚀</span> Spring Boot
          </div>
          <div className="floating-chip chip-4">
            <span>🐳</span> Docker
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
