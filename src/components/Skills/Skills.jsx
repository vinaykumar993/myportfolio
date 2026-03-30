import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: '#00d4ff',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 78 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: '◈',
    color: '#7c3aed',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'HTML/CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙',
    color: '#f59e0b',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: '🗄',
    color: '#10b981',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Docker', level: 65 },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs',
  'Docker', 'Git', 'JavaScript', 'HTML', 'CSS', 'PHP', 'VS Code'
]

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills">
      <div className="blob blob-skills" />
      <div className="container">
        <div className="skills-header">
          <p className="section-tag">What I Know</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="skills-subtitle">
            A curated toolkit built through projects, internships, and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-card-header">
                <span className="skill-icon" style={{ color: cat.color }}>{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div className="skill-bar-item" key={skill.name}>
                    <div className="skill-bar-labels">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges">
          <p className="badges-label">All Technologies</p>
          <div className="badges-wrap">
            {techBadges.map((tech) => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
