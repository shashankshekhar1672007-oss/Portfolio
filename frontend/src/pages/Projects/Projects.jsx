import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import GitHubTracker from '../../components/GitHubTracker/GitHubTracker'
import projects from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const [sortOrder, setSortOrder] = useState('newest') // 'newest' | 'oldest'

  const sortedProjects = [...projects].sort((a, b) => {
    const timeA = new Date(a.date).getTime()
    const timeB = new Date(b.date).getTime()
    return sortOrder === 'newest' ? timeB - timeA : timeA - timeB
  })

  return (
    <main className="projects-page">
      <section className="panel projects-page__panel">
        <div className="projects-page__header">
          <div className="projects-page__title-group">
            <h1 className="projects-page__title">Featured Projects</h1>
            <p className="projects-page__subtitle">
              Curated case studies and interactive web applications ({projects.length} projects).
            </p>
          </div>

          <div className="projects-page__sort-controls">
            <span className="projects-page__sort-label">Sort:</span>
            <button
              className={`projects-page__sort-btn${sortOrder === 'newest' ? ' projects-page__sort-btn--active' : ''}`}
              onClick={() => setSortOrder('newest')}
            >
              <i className="fa-solid fa-arrow-down-wide-short"></i>
              Newest
            </button>
            <button
              className={`projects-page__sort-btn${sortOrder === 'oldest' ? ' projects-page__sort-btn--active' : ''}`}
              onClick={() => setSortOrder('oldest')}
            >
              <i className="fa-solid fa-arrow-up-wide-short"></i>
              Oldest
            </button>
          </div>
        </div>

        <div className="projects-page__grid">
          {sortedProjects.map((p) => (
            <ProjectCard
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              link={p.link}
              thumbnail={p.screenshots?.[0]?.url}
              dateFormatted={p.dateFormatted}
            />
          ))}
        </div>
      </section>

      {/* Real-Time GitHub Auto-Sync Repository Tracker */}
      <GitHubTracker />
    </main>
  )
}
