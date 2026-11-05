import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import projects from '../../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)

  if (!project) {
    return (
      <main className="project-detail">
        <div className="project-detail__error">
          <h2>Project not found</h2>
          <Link
            to="/projects"
            className="project-detail__action-btn project-detail__action-btn--primary"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail">

      {/* Back */}
      <button
        className="panel panel--soft project-detail__back"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back</span>
      </button>

      {/* Header */}
      <div className="panel project-detail__outer-panel project-detail__outer-panel--wide">
        <div className="panel panel--soft project-detail__header-panel">
          <div className="project-detail__header">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__meta">
              <span className="project-detail__year">{project.dateFormatted || project.year}</span>
              <span className="panel panel--soft project-detail__status">{project.status}</span>
            </p>
            <p className="project-detail__description">{project.description}</p>
          </div>

          <div className="project-detail__actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__action-btn project-detail__action-btn--primary"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel--soft project-detail__action-btn project-detail__action-btn--secondary"
              >
                <i className="fa-brands fa-github"></i>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <div className="panel project-detail__outer-panel project-detail__outer-panel--wide">
          <div className="panel panel--soft project-detail__screenshots-panel">
            <div className="project-detail__screenshots">
              <div className="project-detail__main-screenshot">
                <img
                  src={project.screenshots[selectedScreenshot].url}
                  alt={project.screenshots[selectedScreenshot].title}
                  className="project-detail__image"
                />
              </div>
              <div className="project-detail__thumbnail-list">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.id}
                    className={`project-detail__thumbnail${index === selectedScreenshot ? ' project-detail__thumbnail--active' : ''}`}
                    onClick={() => setSelectedScreenshot(index)}
                    title={screenshot.title}
                  >
                    <img src={screenshot.url} alt={screenshot.title} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tech + Info grid */}
      <div className="project-detail__grid">
        <div className="panel project-detail__outer-panel">
          <div className="panel panel--soft project-detail__section project-detail__section--tech">
            <h2 className="project-detail__section-title">
              <i className="fa-solid fa-code"></i>
              Technologies
            </h2>
            <div className="project-detail__tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="panel panel--soft project-detail__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="panel project-detail__outer-panel">
          <div className="panel panel--soft project-detail__section project-detail__section--info">
            <div className="project-detail__info-item">
              <h3 className="project-detail__info-label">Duration</h3>
              <p className="project-detail__info-value">{project.duration}</p>
            </div>
            <div className="project-detail__info-item">
              <h3 className="project-detail__info-label">Role</h3>
              <p className="project-detail__info-value">{project.role}</p>
            </div>
            <div className="project-detail__info-item">
              <h3 className="project-detail__info-label">Status</h3>
              <p className="project-detail__info-value">{project.status}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      {project.features?.length > 0 && (
        <div className="panel project-detail__outer-panel project-detail__outer-panel--wide">
          <div className="panel panel--soft project-detail__section project-detail__features-section">
            <h2 className="project-detail__section-title">
              <i className="fa-solid fa-star"></i>
              Key Features
            </h2>
            <ul className="project-detail__features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="project-detail__feature-item">
                  <span className="project-detail__feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Challenges */}
      {project.challenges?.length > 0 && (
        <div className="panel project-detail__outer-panel project-detail__outer-panel--wide">
          <div className="panel panel--soft project-detail__section project-detail__challenges-section">
            <h2 className="project-detail__section-title">
              <i className="fa-solid fa-triangle-exclamation"></i>
              Challenges Overcome
            </h2>
            <ul className="project-detail__challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="project-detail__challenge-item">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Learnings */}
      {project.learnings?.length > 0 && (
        <div className="panel project-detail__outer-panel project-detail__outer-panel--wide">
          <div className="panel panel--soft project-detail__section project-detail__learnings-section">
            <h2 className="project-detail__section-title">
              <i className="fa-solid fa-lightbulb"></i>
              Key Learnings
            </h2>
            <ul className="project-detail__learnings-list">
              {project.learnings.map((learning, index) => (
                <li key={index} className="project-detail__learning-item">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="project-detail__footer">
        <Link to="/projects" className="project-detail__nav-link">
          ← Back to All Projects
        </Link>
      </div>

    </main>
  )
}