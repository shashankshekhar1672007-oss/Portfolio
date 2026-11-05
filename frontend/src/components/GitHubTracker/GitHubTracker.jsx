import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './GitHubTracker.css'

const GITHUB_USERNAME = 'shashankshekhar1672007-oss'
const CACHE_KEY = `gh_repos_${GITHUB_USERNAME}`
const CACHE_EXPIRY_MS = 10 * 60 * 1000 // 10 minutes

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  'C++': '#f34b7d',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
  Java: '#b07219',
  C: '#555555',
}

export default function GitHubTracker() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedLang, setSelectedLang] = useState('All')

  useEffect(() => {
    async function fetchRepos() {
      // 1. Check cache first
      try {
        const cached = sessionStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < CACHE_EXPIRY_MS && Array.isArray(data)) {
            setRepos(data)
            setLoading(false)
            return
          }
        }
      } catch (e) {
        // Ignore cache parse error
      }

      // 2. Fetch from GitHub API
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        )

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()

        // Filter and sort by latest push
        const sorted = data
          .filter((repo) => !repo.fork) // Focus on original projects
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))

        setRepos(sorted)

        // Save to cache
        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: sorted, timestamp: Date.now() })
          )
        } catch (e) {
          // Ignore storage quota
        }
      } catch (err) {
        console.warn('Failed to load GitHub repositories:', err)
        setError('Unable to load live GitHub activity right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // Filter languages
  const languages = ['All', ...new Set(repos.map((r) => r.language).filter(Boolean))]
  const filteredRepos =
    selectedLang === 'All' ? repos : repos.filter((r) => r.language === selectedLang)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section className="panel gh-tracker">
      {/* ── Header ── */}
      <div className="gh-tracker__header">
        <div className="gh-tracker__title-group">
          <div className="gh-tracker__badge">
            <span className="gh-tracker__pulse-dot" />
            <span>GitHub Auto-Sync</span>
          </div>
          <h2 className="gh-tracker__title">Live Repository Track Record</h2>
          <p className="gh-tracker__subtitle">
            Synchronized directly with{' '}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-tracker__profile-link"
            >
              @{GITHUB_USERNAME}
            </a>
          </p>
        </div>

        {/* Stats pill */}
        <div className="panel panel--soft gh-tracker__stats">
          <div className="gh-tracker__stat">
            <span className="gh-tracker__stat-val">{repos.length}</span>
            <span className="gh-tracker__stat-label">Repositories</span>
          </div>
          <div className="gh-tracker__stat-divider" />
          <div className="gh-tracker__stat">
            <span className="gh-tracker__stat-val">
              {repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)}
            </span>
            <span className="gh-tracker__stat-label">Stars</span>
          </div>
        </div>
      </div>

      {/* ── Language Filters ── */}
      {languages.length > 2 && (
        <div className="gh-tracker__filters">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`panel panel--soft gh-tracker__filter-btn${selectedLang === lang ? ' gh-tracker__filter-btn--active' : ''}`}
              onClick={() => setSelectedLang(lang)}
            >
              {lang !== 'All' && (
                <span
                  className="gh-tracker__lang-dot"
                  style={{ backgroundColor: LANGUAGE_COLORS[lang] || '#8b949e' }}
                />
              )}
              {lang}
            </button>
          ))}
        </div>
      )}

      {/* ── Loading Skeleton ── */}
      {loading && (
        <div className="gh-tracker__grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="panel panel--soft gh-card gh-card--skeleton">
              <div className="gh-card__shimmer" />
            </div>
          ))}
        </div>
      )}

      {/* ── Error fallback ── */}
      {error && !loading && (
        <div className="panel panel--soft gh-tracker__error">
          <i className="fa-brands fa-github"></i>
          <p>{error}</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-tracker__action-btn"
          >
            View on GitHub
          </a>
        </div>
      )}

      {/* ── Repositories Grid ── */}
      {!loading && !error && (
        <div className="gh-tracker__grid">
          {filteredRepos.map((repo) => (
            <motion.article
              key={repo.id}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="panel panel--soft gh-card"
            >
              <div className="gh-card__header">
                <div className="gh-card__title-row">
                  <i className="fa-solid fa-book-bookmark gh-card__icon"></i>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-card__title"
                  >
                    {repo.name}
                  </a>
                </div>
                <span className="panel panel--soft gh-card__visibility">
                  {repo.visibility || 'Public'}
                </span>
              </div>

              <p className="gh-card__desc">
                {repo.description || 'Open source repository & technical implementation.'}
              </p>

              <div className="gh-card__meta">
                {repo.language && (
                  <div className="gh-card__meta-item">
                    <span
                      className="gh-tracker__lang-dot"
                      style={{
                        backgroundColor: LANGUAGE_COLORS[repo.language] || '#8b949e',
                      }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}

                {repo.stargazers_count > 0 && (
                  <div className="gh-card__meta-item">
                    <i className="fa-regular fa-star"></i>
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}

                {repo.forks_count > 0 && (
                  <div className="gh-card__meta-item">
                    <i className="fa-solid fa-code-fork"></i>
                    <span>{repo.forks_count}</span>
                  </div>
                )}

                <div className="gh-card__meta-item gh-card__meta-date">
                  Updated {formatDate(repo.pushed_at)}
                </div>
              </div>

              <div className="gh-card__actions">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel panel--soft gh-card__action-btn"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>Repository</span>
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-card__action-btn gh-card__action-btn--live"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  )
}
