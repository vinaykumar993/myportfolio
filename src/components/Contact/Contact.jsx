import React, { useState } from 'react'
import './Contact.css'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'kumarvinay36034@gmail.com',
    href: 'mailto:kumarvinay36034@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 9508221042',
    href: 'tel:+919508221042',
    color: '#7c3aed',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Siwan, Bihar, India',
    href: '#',
    color: '#f59e0b',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="section-wrapper contact">
      <div className="blob blob-contact" />
      <div className="container">
        <div className="contact-header">
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">
            Let's <span>Work Together</span>
          </h2>
          <p className="contact-subtitle">
            I'm open to internships, full-time roles, and exciting freelance
            projects. Let's build something great together!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left info */}
          <div className="contact-info">
            <h3 className="info-heading">Reach Me At</h3>
            <div className="info-cards">
              {contactInfo.map((c) => (
                <a href={c.href} className="info-card" key={c.label}>
                  <div
                    className="info-icon"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="info-label">{c.label}</p>
                    <p className="info-value" style={{ color: c.color }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-badge">
              <span className="avail-dot" />
              <div>
                <p className="avail-title">Available for Opportunities</p>
                <p className="avail-sub">Open to full-time & internship roles</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap">
            {status === 'sent' ? (
              <div className="success-state">
                <span className="success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
