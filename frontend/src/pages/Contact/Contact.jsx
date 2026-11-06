import { useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    title: 'Email',
    label: 'shashank.shekhar.1672007@gmail.com',
    href: 'mailto:shashank.shekhar.1672007@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    title: 'LinkedIn',
    label: 'Shashank Shekhar Singh',
    href: 'https://www.linkedin.com/in/shashank-shekhar-singh-405959377/',
    icon: 'fa-brands fa-linkedin',
  },
  {
    title: 'GitHub',
    label: 'shashankshekhar1672007-oss',
    href: 'https://github.com/shashankshekhar1672007-oss',
    icon: 'fa-brands fa-github',
  },
  {
    title: 'LeetCode',
    label: 'shashank_shekhar_16072007',
    href: 'https://leetcode.com/u/shashank_shekhar_16072007/',
    icon: 'fa-solid fa-code',
  },
]

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  college: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  // Opens default mail client with prefilled body
  function handleSubmit(e) {
    e.preventDefault()
    const sender = `${form.firstName} ${form.lastName}`.trim() || 'Someone'
    const subject = encodeURIComponent(`[Portfolio] Message from ${sender}`)
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      (form.phone   ? `Phone: ${form.phone}\n`             : '') +
      (form.college ? `College/Organization: ${form.college}\n` : '') +
      `\nMessage:\n${form.message}\n`
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
                  <i className="fa-solid fa-graduation-cap"></i>
                  <div>
                    <span className="contact-page__meta-label">Currently at</span>
                    <span className="contact-page__meta-value">NIT Patna — B.Tech CSE</span>
                  </div>
                </div>
              </div>

              <div className="contact-page__divider" />

              <div className="contact-page__links">
                {contactLinks.map(({ title, label, href, icon }) => (
                  <a
                    key={title}
                    className="contact-page__link"
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    <span className="contact-page__icon panel panel--soft">
                      <i className={icon}></i>
                    </span>
                    <div className="contact-page__link-text">
                      <span className="contact-page__link-title">{title}</span>
                      <span className="contact-page__link-val">{label}</span>
                    </div>
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
                      placeholder="Your first name"
                      value={form.firstName} onChange={handleChange}
                      className="contact-page__input"
                    />
                  </div>
                  <div className="contact-page__field">
                    <label className="contact-page__label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName" name="lastName" type="text"
                      placeholder="Your last name"
                      value={form.lastName} onChange={handleChange}
                      className="contact-page__input"
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
                      className="contact-page__input"
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
                      className="contact-page__input"
                    />
                  </div>
                </div>

                {/* Row 3 — College / Organization */}
                <div className="contact-page__field">
                  <label className="contact-page__label" htmlFor="college">
                    College / Organization <span className="contact-page__optional">(optional)</span>
                  </label>
                  <input
                    id="college" name="college" type="text"
                    placeholder="Your university, organization, or company"
                    value={form.college} onChange={handleChange}
                    className="contact-page__input"
                  />
                </div>

                {/* Message */}
                <div className="contact-page__field">
                  <label className="contact-page__label" htmlFor="message">
                    Message <span className="contact-page__required">*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Write your message here..."
                    value={form.message} onChange={handleChange}
                    className="contact-page__textarea"
                  />
                </div>

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
