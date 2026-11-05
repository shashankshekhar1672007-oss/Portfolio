import ProjectCard from '../../components/ProjectCard/ProjectCard'
import GitHubTracker from '../../components/GitHubTracker/GitHubTracker'
import projects from '../../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="panel projects-page__panel">
        <div className="projects-page__header">
          <h1 className="projects-page__title">Featured Projects</h1>
          <p className="projects-page__subtitle">
            Curated case studies and interactive web applications.
          </p>
        </div>

        <div className="projects-page__grid">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              link={p.link}
              thumbnail={p.screenshots?.[0]?.url}
            />
          ))}
        </div>
      </section>

      {/* Real-Time GitHub Auto-Sync Repository Tracker */}
      <GitHubTracker />
    </main>
  )
}
