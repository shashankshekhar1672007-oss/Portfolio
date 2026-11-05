import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import GlassSeparator from '../../components/GlassSeparator/GlassSeparator'
import { useTypingEffect } from './useTypingEffect'
import projects from '../../data/projects'
import './Home.css'

const TYPING_WORDS = ['building.', 'learning.', 'coding.']

export default function Home() {
  const text = useTypingEffect(TYPING_WORDS)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleViewWorkClick = (e) => {
    e.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__copy">
          <h1 className="home__hero-heading">
            Shaping ideas through continuous learning.
          </h1>
          <p className="home__hero-sub">
            <span className="highlight">Always {text}</span>
            <span className="cursor">|</span>
          </p>
          <a className="home__hero-action" href="#work" onClick={handleViewWorkClick}>
            <i className="fa-solid fa-arrow-down"></i>
            View work
          </a>
        </div>

        <div
          className={`home__scroll-cue${isScrolled ? ' home__scroll-cue--hidden' : ''}`}
          aria-hidden="true"
        >
          Scroll down to learn more
          <span />
        </div>
      </section>

      <div className="panel home__projects-panel" id="work">
        <div className="home__projects-header">
          <h2 className="home__projects-title">My Work</h2>
          <GlassSeparator />
        </div>
        <div className="home__card-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              link={project.link}
              thumbnail={project.screenshots?.[0]?.url}
            />
          ))}
        </div>
      </div>
    </main>
  )
}