import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home',     to: '/',         end: true },
  { label: 'Projects', to: '/projects'            },
  { label: 'About',    to: '/about'               },
  { label: 'Contact',  to: '/contact'             },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="navbar">
      <div className="navbar__container">

        <div className="navbar__brand">
          <NavLink className="logo" to="/">
            <img src="/SynMorphicLogo2.png" alt="SynMorphic Logo" className="logo-icon" />
            <span className="logo-text">
              <span className="logo-main">Syn</span>
              <span className="logo-suffix">Morphic</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop nav */}
        <div className="nav-buttons nav-buttons--desktop">
          {navLinks.map(({ label, to, end }) => (
            <NavLink key={to} to={to} end={end} className="nav-btn">
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar__mobile-menu${isOpen ? ' navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-list">
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="navbar__mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
