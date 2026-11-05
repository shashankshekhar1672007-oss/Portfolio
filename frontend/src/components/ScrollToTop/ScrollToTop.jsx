import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import projects from '../../data/projects'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Instant scroll to top on every route transition
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Dynamic document title update
    if (pathname === '/') {
      document.title = 'SynMorphic | Shashank Shekhar Singh'
    } else if (pathname === '/projects') {
      document.title = 'Projects | SynMorphic'
    } else if (pathname.startsWith('/projects/')) {
      const id = parseInt(pathname.split('/')[2])
      const project = projects.find((p) => p.id === id)
      document.title = project ? `${project.title} | SynMorphic` : 'Project Detail | SynMorphic'
    } else if (pathname === '/about') {
      document.title = 'About | SynMorphic'
    } else if (pathname === '/contact') {
      document.title = 'Contact | SynMorphic'
    } else {
      document.title = '404 - Not Found | SynMorphic'
    }
  }, [pathname])

  return null
}
