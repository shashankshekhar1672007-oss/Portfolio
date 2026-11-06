import { NavLink } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { label: 'Home',     to: '/',         end: true },
  { label: 'Projects', to: '/projects'            },
  { label: 'About',    to: '/about'               },
  { label: 'Contact',  to: '/contact'             },
]

const socialLinks = [
  { label: 'GitHub',   handle: 'shashankshekhar1672007-oss', href: 'https://github.com/shashankshekhar1672007-oss',                icon: 'fa-brands fa-github'   },
  { label: 'LinkedIn', handle: 'Shashank Shekhar Singh',     href: 'https://www.linkedin.com/in/shashank-shekhar-singh-nitp/',      icon: 'fa-brands fa-linkedin' },
  { label: 'LeetCode', handle: 'shashank_16707',             href: 'https://leetcode.com/u/shashank_16707/',                      icon: 'fa-solid fa-code'      },
  { label: 'Email',    handle: 'shashank.shekhar.1672007@gmail.com', href: 'mailto:shashank.shekhar.1672007@gmail.com',                    icon: 'fa-solid fa-envelope'  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__content">

          {/* Branding & Status */}
          <div className="footer__section footer__branding">
            <NavLink className="footer__logo" to="/" onClick={scrollToTop}>
              <img src="/BlackLogo.png" alt="SynMorphic Logo" className="footer__logo-icon" />
              <span className="footer__logo-main">Syn</span>
              <span className="footer__logo-suffix">Morphic</span>
            </NavLink>
            <p className="footer__tagline">
              Crafting fluid glassmorphic web applications &amp; solving algorithmic challenges.
            </p>
            <div className="footer__status-badge">
              <span className="footer__status-dot"></span>
              <span>Available for discussions &amp; open source</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer__section">
            <h3 className="footer__section-title">Navigation</h3>
            <nav className="footer__nav-links">
              {navLinks.map(({ label, to, end }) => (
                <NavLink key={to} to={to} end={end} className="footer__link" onClick={scrollToTop}>
                  <i className="fa-solid fa-chevron-right footer__link-arrow"></i>
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Direct Social Channels */}
          <div className="footer__section">
            <h3 className="footer__section-title">Connect Online</h3>
            <div className="footer__social-grid">
              {socialLinks.map(({ label, handle, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="footer__social-card"
                  aria-label={`${label}: ${handle}`}
                  title={`${label}: ${handle}`}
                >
                  <div className="footer__social-icon">
                    <i className={icon}></i>
                  </div>
                  <div className="footer__social-info">
                    <span className="footer__social-label">{label}</span>
                    <span className="footer__social-handle">{handle}</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square footer__social-arrow"></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer__divider" />

        {/* Bottom Bar: Copyright, Credit, and Back to Top */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Shashank Shekhar Singh. Built with React 19 &amp; Vite.
          </p>

          <button
            type="button"
            className="footer__top-btn"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>

      </div>
    </footer>
  )
}
