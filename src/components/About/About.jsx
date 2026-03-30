import React from 'react'
import './About.css'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'B.Tech CSE @ DEC, Jharkhand' },
  { icon: '📍', label: 'Location', value: 'Siwan, Bihar, India' },
  { icon: '💼', label: 'Experience', value: 'Full Stack Dev Trainee' },
  { icon: '📧', label: 'Email', value: 'kumarvinay36034@gmail.com' },
]

export default function About() {
  return (
    <section id="about" className="section-wrapper about">
      <div className="blob blob-about" />
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <span className="avatar-initials">VK</span>
              </div>
              <div className="orbit orbit-1">
                <div className="orbit-dot" />
              </div>
              <div className="orbit orbit-2">
                <div className="orbit-dot" />
              </div>
            </div>
            <div className="about-card">
              <p className="about-card-label">Currently studying</p>
              <p className="about-card-value">B.Tech CSE (2022–2026)</p>
              <p className="about-card-sub">Dumka Engineering College</p>
            </div>
          </div>

          <div className="about-content">
            <p className="section-tag">Who I Am</p>
            <h2 className="section-title">
              Passionate Developer <span>Building the Future</span>
            </h2>
            <p className="about-text">
              I'm a final-year Computer Science student and aspiring Full Stack Developer
              with hands-on experience in building robust web applications. My journey
              began with a curiosity about how software works, and it has grown into a
              passion for creating elegant, efficient, and user-centric solutions.
            </p>
            <p className="about-text">
              During my internship at <strong>Ardent Computech Pvt. Ltd.</strong>, I
              developed backend modules with Core Java, designed RESTful APIs with Spring Boot,
              and improved performance by 20% through code optimization. I love working
              across the stack — from databases to polished UIs.
            </p>

            <div className="highlights-grid">
              {highlights.map((h) => (
                <div className="highlight-item" key={h.label}>
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-value">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="mailto:kumarvinay36034@gmail.com"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a href="tel:+919508221042" className="btn-secondary">
                +91 9508221042
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
