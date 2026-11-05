import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home',     to: '/',         end: true },
  { label: 'Projects', to: '/projects'            },
  { label: 'About',    to: '/about'               },
  { label: 'Contact',  to: '/contact'             },
]

export default function Navbar() {
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

        <div className="nav-buttons">
          {navLinks.map(({ label, to, end }) => (
            <NavLink key={to} to={to} end={end} className="nav-btn">
              {label}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  )
}