import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'AI Integrated Job Portal',
    category: 'Full Stack',
    description:
      'An AI-powered job portal that matches candidates with jobs through a smart recommendation engine and optimizes resumes for better job fits using machine learning.',
    tech: ['Spring Boot', 'React.js', 'REST APIs', 'Docker', 'JSON', 'Java'],
    highlights: [
      'AI resume optimization & job matching',
      'Spring Boot authentication system',
      'Docker-based deployment',
      'Real-time data processing',
    ],
    color: '#00d4ff',
    emoji: '🤖',
    featured: true,
  },
  {
    title: 'Advanced Weather Application',
    category: 'Backend',
    description:
      'Real-time weather app with multithreading for performance, SQL-based analytics dashboard and historical weather data analysis.',
    tech: ['Java', 'REST APIs', 'MySQL', 'Multithreading', 'JSON'],
    highlights: [
      'Real-time REST API integration',
      'Multithreaded performance optimization',
      'SQL-based data storage & analytics',
      'Interactive dashboard',
    ],
    color: '#7c3aed',
    emoji: '🌤',
    featured: true,
  },
  {
    title: 'Hostel Management System',
    category: 'Full Stack',
    description:
      'A comprehensive hostel management solution with registration, complaint tracking, role-based access control and an admin dashboard.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    highlights: [
      'Student registration & management',
      'Complaint tracking system',
      'Role-based access control (RBAC)',
      'Admin dashboard & reporting',
    ],
    color: '#f59e0b',
    emoji: '🏠',
    featured: false,
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section-wrapper projects">
      <div className="blob blob-proj" />
      <div className="container">
        <div className="proj-header">
          <p className="section-tag">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="proj-subtitle">
            Real-world applications built with modern technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="project-top">
                <div className="project-emoji" style={{ background: `${project.color}15` }}>
                  {project.emoji}
                </div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <span style={{ color: project.color }}>▸</span> {h}
                  </li>
                ))}
              </ul>

              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="proj-tech-tag" style={{ borderColor: `${project.color}40` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow" style={{ background: project.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
