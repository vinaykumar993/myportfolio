import React from 'react'
import './Footer.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '✉️', label: 'Email', href: 'mailto:kumarvinay36034@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-bracket">&lt;</span>VK<span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Building scalable web apps with Java, Spring Boot & React.
            </p>
            <div className="footer-socials">
              {socialLinks.map((s) => (
                <a href={s.href} key={s.label} className="social-link" aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <p className="footer-nav-title">Navigation</p>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-nav-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <p className="footer-nav-title">Contact</p>
            <a href="mailto:kumarvinay36034@gmail.com" className="footer-contact-link">
              kumarvinay36034@gmail.com
            </a>
            <a href="tel:+919508221042" className="footer-contact-link">
              +91 9508221042
            </a>
            <p className="footer-location">📍 Siwan, Bihar, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <span>Vinay Kumar</span>. Built with React + Vite.
          </p>
          <p className="footer-made">
            Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
