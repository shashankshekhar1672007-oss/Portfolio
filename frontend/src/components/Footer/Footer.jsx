import { NavLink } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { label: 'Home',     to: '/',         end: true },
  { label: 'Projects', to: '/projects'            },
  { label: 'About',    to: '/about'               },
  { label: 'Contact',  to: '/contact'             },
]

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shashankshekhar1672007-oss',                icon: 'fa-brands fa-github'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-shekhar-singh-405959377/', icon: 'fa-brands fa-linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/shashank_shekhar_16072007/',           icon: 'fa-solid fa-code'      },
  { label: 'Email',    href: 'mailto:shashank.shekhar.1672007@gmail.com',                    icon: 'fa-solid fa-envelope'  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__content">

          {/* Branding */}
          <div className="footer__section footer__branding">
            <NavLink className="footer__logo" to="/">
              <span className="footer__logo-main">Syn</span>
              <span className="footer__logo-suffix">Morphic</span>
            </NavLink>
            <p className="footer__tagline">Shaping ideas through continuous learning.</p>
          </div>

          {/* Navigation */}
          <div className="footer__section">
            <h3 className="footer__section-title">Navigation</h3>
            <nav className="footer__nav-links">
              {navLinks.map(({ label, to, end }) => (
                <NavLink key={to} to={to} end={end} className="footer__link">
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="footer__section">
            <h3 className="footer__section-title">Connect</h3>
            <div className="footer__social-links">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="icon-circle-btn footer__social-link"
                  aria-label={label}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Shashank Shekhar Singh. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with React, Vite &amp; Passion.
          </p>
        </div>

      </div>
    </footer>
  )
}
