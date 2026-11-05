import { useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    label: 'shashank.shekhar.1672007@gmail.com',
    href: 'mailto:shashank.shekhar.1672007@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    label: 'LinkedIn — Shashank Shekhar Singh',
    href: 'https://www.linkedin.com/in/shashank-shekhar-singh-405959377/',
    icon: 'fa-brands fa-linkedin',
  },
  {
    label: 'GitHub — shashankshekhar1672007-oss',
    href: 'https://github.com/shashankshekhar1672007-oss',
    icon: 'fa-brands fa-github',
  },
  {
    label: 'LeetCode — shashank_shekhar_16072007',
    href: 'https://leetcode.com/u/shashank_shekhar_16072007/',
    icon: 'fa-solid fa-code',
  },
]

const topics = [
  'Frontend Development',
  'Full-Stack Web App',
  'ML / Data Science Project',
  'Competitive Programming',
  'Open Source Collaboration',
  'Internship / Opportunity',
  'Other',
]

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  college: '',
  topic: '',
  budget: '',
  timeline: '',
  message: '',
  newsletter: false,
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  // No backend — opens default mail client with prefilled body
  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portfolio] ${form.topic || 'Message'} from ${form.firstName} ${form.lastName}`)
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      (form.phone    ? `Phone: ${form.phone}\n`          : '') +
      (form.college  ? `College/Company: ${form.college}\n` : '') +
      (form.topic    ? `Topic: ${form.topic}\n`          : '') +
      (form.budget   ? `Budget: ${form.budget}\n`        : '') +
      (form.timeline ? `Timeline: ${form.timeline}\n`    : '') +
      `\nMessage:\n${form.message}\n` +
      `\nNewsletter: ${form.newsletter ? 'Yes' : 'No'}`
    )
    window.location.href = `mailto:shashank.shekhar.1672007@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <div className="contact-page__info-box">
        <div className="panel contact-page__glass-card">

          {/* ── Heading ── */}
          <div className="contact-page__heading-row">
            <h1 className="contact-page__heading">Contact me</h1>
            <p className="contact-page__subheading">
              Have a project, a collaboration, or just want to say hi? Fill the
              form — it'll open your mail client with everything pre-filled.
            </p>
          </div>

          {/* ── Two-column body ── */}
          <div className="contact-page__body">

            {/* LEFT — meta + links */}
            <div className="panel panel--soft contact-page__left">

              <div className="contact-page__meta">
                <div className="contact-page__meta-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <span className="contact-page__meta-label">Based in</span>
                    <span className="contact-page__meta-value">Patna, Bihar · India</span>
                  </div>
                </div>
                <div className="contact-page__meta-item">
                  <i className="fa-solid fa-clock"></i>
                  <div>
                    <span className="contact-page__meta-label">Response time</span>
                    <span className="contact-page__meta-value">Within 24 hours</span>
                  </div>
                </div>
                <div className="contact-page__meta-item">
                  <i className="fa-solid fa-briefcase"></i>
                  <div>
                    <span className="contact-page__meta-label">Open to</span>
                    <span className="contact-page__meta-value">Internships &amp; Collabs</span>
                  </div>
                </div>
                <div className="contact-page__meta-item">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <div>
                    <span className="contact-page__meta-label">Currently at</span>
                    <span className="contact-page__meta-value">NIT Patna — B.Tech CSE</span>
                  </div>
                </div>
              </div>

              <div className="contact-page__divider" />

              <div className="contact-page__links">
                {contactLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    className="contact-page__link"
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    <span className="contact-page__icon panel panel--soft">
                      <i className={icon}></i>
                    </span>
                    <span className="contact-page__link-label">{label}</span>
                    <i className="fa-solid fa-arrow-right contact-page__link-arrow"></i>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="panel panel--soft contact-page__right">
              <form className="contact-page__form" onSubmit={handleSubmit} noValidate>

                {/* Row 1 — First + Last name */}
                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="firstName">
                      First name <span className="contact-page__required">*</span>
                    </label>
                    <input
                      id="firstName" name="firstName" type="text" required
                      placeholder="Shashank"
                      value={form.firstName} onChange={handleChange}
                      className="contact-page__input panel panel--soft"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName" name="lastName" type="text"
                      placeholder="Singh"
                      value={form.lastName} onChange={handleChange}
                      className="contact-page__input panel panel--soft"
                    />
                  </div>
                </div>

                {/* Row 2 — Email + Phone */}
                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="email">
                      Email <span className="contact-page__required">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      className="contact-page__input panel panel--soft"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="phone">
                      Phone <span className="contact-page__optional">(optional)</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone} onChange={handleChange}
                      className="contact-page__input panel panel--soft"
                    />
                  </div>
                </div>

                {/* Row 3 — College/Company + Topic */}
                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="college">
                      College / Company
                    </label>
                    <input
                      id="college" name="college" type="text"
                      placeholder="NIT Patna"
                      value={form.college} onChange={handleChange}
                      className="contact-page__input panel panel--soft"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="topic">
                      Topic
                    </label>
                    <div className="contact-page__select-wrap">
                      <select
                        id="topic" name="topic"
                        value={form.topic} onChange={handleChange}
                        className="contact-page__select panel panel--soft"
                      >
                        <option value="">— Select a topic —</option>
                        {topics.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <i className="fa-solid fa-chevron-down contact-page__select-icon"></i>
                    </div>
                  </div>
                </div>

                {/* Row 4 — Budget + Timeline */}
                <div className="contact-page__field-row">
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="budget">
                      Budget <span className="contact-page__optional">(if applicable)</span>
                    </label>
                    <div className="contact-page__select-wrap">
                      <select
                        id="budget" name="budget"
                        value={form.budget} onChange={handleChange}
                        className="contact-page__select panel panel--soft"
                      >
                        <option value="">— Budget range —</option>
                        <option>Unpaid / Open Source</option>
                        <option>Under ₹5,000</option>
                        <option>₹5,000 – ₹15,000</option>
                        <option>₹15,000 – ₹50,000</option>
                        <option>₹50,000+</option>
                      </select>
                      <i className="fa-solid fa-chevron-down contact-page__select-icon"></i>
                    </div>
                  </div>
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="timeline">
                      Timeline
                    </label>
                    <div className="contact-page__select-wrap">
                      <select
                        id="timeline" name="timeline"
                        value={form.timeline} onChange={handleChange}
                        className="contact-page__select panel panel--soft"
                      >
                        <option value="">— How urgent? —</option>
                        <option>ASAP</option>
                        <option>Within 1 week</option>
                        <option>Within 1 month</option>
                        <option>Flexible</option>
                      </select>
                      <i className="fa-solid fa-chevron-down contact-page__select-icon"></i>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="contact-page__field">
                  <label className="contact-page__label" htmlFor="message">
                    Message <span className="contact-page__required">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={4}
                    placeholder="Tell me about your project, idea, or question..."
                    value={form.message} onChange={handleChange}
                    className="contact-page__textarea panel panel--soft"
                  />
                </div>

                {/* Newsletter */}
                <label className="contact-page__checkbox-row">
                  <input
                    type="checkbox" name="newsletter"
                    checked={form.newsletter} onChange={handleChange}
                    className="contact-page__checkbox"
                  />
                  <span className="contact-page__checkbox-label">
                    Notify me about open-source projects and updates
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary contact-page__submit"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  Send message
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
