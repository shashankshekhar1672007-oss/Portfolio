import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ id, title, description, link, thumbnail }) {
  return (
    <article className="panel project-card">
      {thumbnail && (
        <div className="project-card__thumbnail">
          <img src={thumbnail} alt={`${title} preview`} className="project-card__thumbnail-img" />
        </div>
      )}
      <div className="project-card__details">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__body">{description}</p>
      </div>
      <div className="project-card__actions">
        <Link to={`/projects/${id}`} className="project-card__btn project-card__btn--primary">
          View Details
        </Link>
        {link && (
          <a
            className="panel project-card__btn project-card__btn--external"
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