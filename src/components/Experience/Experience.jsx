import React from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'Full Stack Developer Trainee',
    company: 'Ardent Computech Pvt. Ltd.',
    location: 'Kolkata',
    duration: 'Jun 2024 – Jul 2024',
    type: 'Internship',
    color: '#00d4ff',
    achievements: [
      'Developed backend modules using Core Java and OOP principles',
      'Built weather application integrating REST APIs and MySQL database',
      'Improved performance by 20% through code optimization',
      'Designed RESTful APIs using Spring Boot',
      'Worked on API integration and JSON data handling',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JSON'],
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Dumka Engineering College, Jharkhand',
    duration: '2022 – 2026',
    color: '#7c3aed',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Saraswati Vidya Mandir Inter College, Gorakhpur',
    duration: '2022',
    color: '#f59e0b',
  },
  {
    degree: 'Matriculation (10th)',
    institution: 'Sri Vidya Sundar High School, Siwan',
    duration: '2020',
    color: '#10b981',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience">
      <div className="blob blob-exp" />
      <div className="container">
        <div className="exp-header">
          <p className="section-tag">My Journey</p>
          <h2 className="section-title">Experience & <span>Education</span></h2>
        </div>

        <div className="exp-layout">
          {/* Work */}
          <div className="exp-column">
            <h3 className="col-title">
              <span className="col-icon">💼</span> Work Experience
            </h3>

            {experiences.map((exp) => (
              <div className="exp-card" key={exp.role}>
                <div className="exp-card-accent" style={{ background: exp.color }} />
                <div className="exp-card-body">
                  <div className="exp-top">
                    <div>
                      <h4 className="exp-role">{exp.role}</h4>
                      <p className="exp-company">{exp.company}</p>
                      <p className="exp-meta">
                        📍 {exp.location} &nbsp;·&nbsp; 🗓 {exp.duration}
                      </p>
                    </div>
                    <span className="exp-type-badge" style={{ color: exp.color, borderColor: exp.color }}>
                      {exp.type}
                    </span>
                  </div>

                  <ul className="exp-achievements">
                    {exp.achievements.map((a) => (
                      <li key={a}>
                        <span className="ach-dot" style={{ background: exp.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="exp-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="exp-column">
            <h3 className="col-title">
              <span className="col-icon">🎓</span> Education
            </h3>

            <div className="edu-timeline">
              {education.map((edu, i) => (
                <div className="edu-item" key={i}>
                  <div className="edu-dot" style={{ background: edu.color }} />
                  <div className="edu-line" />
                  <div className="edu-content">
                    <span className="edu-duration">{edu.duration}</span>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
