import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ id, title, description, link, thumbnail, dateFormatted }) {
  return (
    <article className="panel project-card">
      {thumbnail && (
        <Link
          to={`/projects/${id}`}
          className="project-card__thumbnail"
          aria-label={`View ${title} project details`}
        >
          <img src={thumbnail} alt={`${title} preview`} className="project-card__thumbnail-img" />
        </Link>
      )}
      <div className="project-card__details">
        <div className="project-card__header-row">
          <h3 className="project-card__title">
            <Link to={`/projects/${id}`} className="project-card__title-link">
              {title}
            </Link>
          </h3>
          {dateFormatted && (
            <span className="chip-badge project-card__date">{dateFormatted}</span>
          )}
        </div>
        <p className="project-card__body">{description}</p>
      </div>
      <div className="project-card__actions">
        <Link to={`/projects/${id}`} className="btn-primary project-card__btn">
          View Details
        </Link>
        {link && (
          <a
            className="btn-secondary project-card__btn"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
