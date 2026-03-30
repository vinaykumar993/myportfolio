import React from 'react'
import './Certifications.css'

const certifications = [
  {
    title: 'Developer & Technology',
    issuer: 'Accenture',
    icon: '🏢',
    color: '#a100ff',
    category: 'Technology',
  },
  {
    title: 'AWS Solution Architecture',
    issuer: 'Amazon Web Services',
    icon: '☁️',
    color: '#ff9900',
    category: 'Cloud',
  },
  {
    title: 'AI & Generative AI',
    issuer: 'YBI Foundation',
    icon: '🤖',
    color: '#00d4ff',
    category: 'Artificial Intelligence',
  },
  {
    title: 'Business Analytics (Beginner)',
    issuer: 'Microsoft',
    icon: '📊',
    color: '#00a4ef',
    category: 'Analytics',
  },
  {
    title: 'Career Edge – Young Professional',
    issuer: 'TCS iON',
    icon: '🎯',
    color: '#10b981',
    category: 'Professional',
  },
  {
    title: 'Programming with Python',
    issuer: 'Internshala',
    icon: '🐍',
    color: '#f59e0b',
    category: 'Programming',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications">
      <div className="blob blob-cert-1" />
      <div className="blob blob-cert-2" />
      <div className="container">
        <div className="cert-header">
          <p className="section-tag">Credentials</p>
          <h2 className="section-title">
            Certifications & <span>Achievements</span>
          </h2>
          <p className="cert-subtitle">
            Industry-recognized certifications validating my skills across
            cloud, AI, and software development.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div
              className="cert-card"
              key={cert.title}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="cert-icon-wrap"
                style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
              >
                <span className="cert-icon">{cert.icon}</span>
              </div>

              <div className="cert-body">
                <span
                  className="cert-category"
                  style={{ color: cert.color }}
                >
                  {cert.category}
                </span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  <span className="issuer-dot" style={{ background: cert.color }} />
                  {cert.issuer}
                </p>
              </div>

              <div
                className="cert-shine"
                style={{ background: `linear-gradient(135deg, ${cert.color}08, transparent)` }}
              />
              <div
                className="cert-border-glow"
                style={{ borderColor: `${cert.color}40` }}
              />
            </div>
          ))}
        </div>

        <div className="cert-count-row">
          <div className="cert-count-card">
            <span className="cert-count-number">6+</span>
            <span className="cert-count-label">Certifications Earned</span>
          </div>
          <div className="cert-count-card">
            <span className="cert-count-number">4</span>
            <span className="cert-count-label">Industry Leaders</span>
          </div>
          <div className="cert-count-card">
            <span className="cert-count-number">3+</span>
            <span className="cert-count-label">Tech Domains</span>
          </div>
        </div>
      </div>
    </section>
  )
}
