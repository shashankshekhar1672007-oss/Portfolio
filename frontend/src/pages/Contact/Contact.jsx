import { useState } from 'react'
import './Contact.css'

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: 'Shashank Shekhar Singh',
    href: 'https://www.linkedin.com/in/shashank-shekhar-singh-405959377/',
    icon: 'fa-brands fa-linkedin',
    color: '#0a66c2',
  },
  {
    name: 'GitHub',
    handle: 'shashankshekhar1672007-oss',
    href: 'https://github.com/shashankshekhar1672007-oss',
    icon: 'fa-brands fa-github',
    color: '#1a1e2e',
  },
  {
    name: 'LeetCode',
    handle: 'shashank_16707',
    href: 'https://leetcode.com/u/shashank_16707/',
    icon: 'fa-solid fa-code',
    color: '#ffa116',
  },
]

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [copied, setCopied] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleCopyEmail(e) {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText('shashank.shekhar.1672007@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  // Opens default mail client with formatted subject and body
  function handleSubmit(e) {
    e.preventDefault()
    const sender = `${form.firstName} ${form.lastName}`.trim() || 'Someone'
    const mailSubject = encodeURIComponent(
      form.subject?.trim()
        ? `[Portfolio] ${form.subject.trim()}`
        : `[Portfolio] Message from ${sender}`
    )
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      (form.subject?.trim() ? `Subject: ${form.subject.trim()}\n` : '') +
      `\nMessage:\n${form.message}\n`
    )
    window.location.href = `mailto:shashank.shekhar.1672007@gmail.com?subject=${mailSubject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <div className="contact-page__container">
        <div className="panel contact-page__card">

          {/* ══ LEFT: Direct Details & Channels ══ */}
          <div className="contact-page__sidebar">
            <div className="contact-page__badge">
              <i className="fa-regular fa-paper-plane"></i>
              <span>Get in Touch</span>
            </div>

            <div className="contact-page__intro">
              <h1 className="contact-page__title">Let’s connect.</h1>
              <p className="contact-page__desc">
                Have a project in mind, an interesting problem, or just want to chat tech?
                Drop a note here or connect directly across my profiles.
              </p>
            </div>

            {/* Direct Email Card with 1-click Copy */}
            <div className="contact-email-card">
              <a
                href="mailto:shashank.shekhar.1672007@gmail.com"
                className="contact-email-card__main"
                title="Send email via mail client"
              >
                <div className="contact-email-card__icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-email-card__info">
                  <span className="contact-email-card__label">Direct Email</span>
                  <span className="contact-email-card__val">shashank.shekhar.1672007@gmail.com</span>
                </div>
              </a>
              <button
                type="button"
                className={`contact-email-card__copy ${copied ? 'contact-email-card__copy--copied' : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'}></i>
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Academic meta */}
            <div className="contact-page__meta-chips">
              <div className="contact-meta-chip">
                <i className="fa-solid fa-location-dot"></i>
                <span>Patna, Bihar · India</span>
              </div>
              <div className="contact-meta-chip">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>NIT Patna · B.Tech CSE</span>
              </div>
            </div>

            <div className="contact-page__divider" />

            {/* Social channels */}
            <div className="contact-page__socials-section">
              <span className="contact-page__socials-label">Connect Online</span>
              <div className="contact-page__social-grid">
                {socialLinks.map(({ name, handle, href, icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-card"
                  >
                    <div className="contact-social-card__icon" style={{ color }}>
                      <i className={icon}></i>
                    </div>
                    <div className="contact-social-card__content">
                      <span className="contact-social-card__name">{name}</span>
                      <span className="contact-social-card__handle">{handle}</span>
                    </div>
                    <i className="fa-solid fa-arrow-up-right-from-square contact-social-card__arrow"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ══ RIGHT: Clean Contact Form ══ */}
          <div className="contact-page__form-container">
            <div className="contact-page__form-header">
              <h2 className="contact-page__form-title">Send a message</h2>
              <p className="contact-page__form-desc">
                Fill in the details below — it will open your default email client with your message ready to send.
              </p>
            </div>

            <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
              {/* Row 1 — Names */}
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="firstName" className="contact-form__label">
                    First Name <span className="contact-form__star">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="contact-form__input"
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="lastName" className="contact-form__label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="contact-form__input"
                  />
                </div>
              </div>

              {/* Row 2 — Email & Subject */}
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="email" className="contact-form__label">
                    Email Address <span className="contact-form__star">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="contact-form__input"
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="subject" className="contact-form__label">
                    Subject <span className="contact-form__optional">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Project idea, Hello"
                    value={form.subject}
                    onChange={handleChange}
                    className="contact-form__input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="contact-form__field">
                <label htmlFor="message" className="contact-form__label">
                  Message <span className="contact-form__star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind? Tell me about your thoughts, ideas, or questions..."
                  value={form.message}
                  onChange={handleChange}
                  className="contact-form__textarea"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary contact-form__submit"
              >
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}
