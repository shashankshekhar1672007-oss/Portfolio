import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shashankshekhar1672007-oss',                icon: 'fa-brands fa-github'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-shekhar-singh-nitp/',      icon: 'fa-brands fa-linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/shashank_16707/',                      icon: 'fa-solid fa-code'      },
  { label: 'Email',    href: 'mailto:shashank.shekhar.1672007@gmail.com',                    icon: 'fa-solid fa-envelope'  },
]

const skills = [
  { label: 'C++',        category: 'Language', icon: 'fa-solid fa-terminal'  },
  { label: 'Python',     category: 'Language', icon: 'fa-brands fa-python'   },
  { label: 'JavaScript', category: 'Language', icon: 'fa-brands fa-js'       },
  { label: 'Java',       category: 'Language', icon: 'fa-brands fa-java'     },
  { label: 'C',          category: 'Language', icon: 'fa-solid fa-c'         },
  { label: 'React.js',   category: 'Web',      icon: 'fa-brands fa-react'    },
  { label: 'DSA',        category: 'Core',     icon: 'fa-solid fa-sitemap'   },
  { label: 'SQL',        category: 'Database', icon: 'fa-solid fa-database'  },
  { label: 'Git',        category: 'Tools',    icon: 'fa-brands fa-git-alt'  },
  { label: 'HTML / CSS', category: 'Web',      icon: 'fa-brands fa-html5'    },
]

const initialCpRatings = [
  {
    platform: 'LeetCode',
    rating: '1900+',
    badge: 'Knight',
    icon: 'fa-solid fa-trophy',
    href: 'https://leetcode.com/u/shashank_16707/',
    accent: '#ffa116',
    subtext: 'Top 4.25% · Rating 1916',
  },
  {
    platform: 'CodeChef',
    rating: '1400+',
    badge: 'Div 3',
    icon: 'fa-solid fa-fire-flame-curved',
    href: 'https://www.codechef.com/users/baby_singh_07',
    accent: '#6b3fa0',
    subtext: '2★ · Rating 1493',
  },
  {
    platform: 'Codeforces',
    rating: '1300+',
    badge: 'Pupil',
    icon: 'fa-solid fa-chess-knight',
    href: 'https://codeforces.com/profile/baby_singh_07',
    accent: '#1a90d9',
    subtext: 'Max Rating 1335',
  },
]

const education = [
  {
    institution: 'NIT Patna',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2025–2029',
    grade: 'SGPA 8.95',
    icon: 'fa-solid fa-building-columns',
    current: true,
  },
  {
    institution: 'KV Gomti Nagar, Lucknow',
    degree: 'Class XII — CBSE (PCM)',
    period: '2025',
    grade: '95%',
    icon: 'fa-solid fa-school',
  },
  {
    institution: 'KV Gomti Nagar, Lucknow',
    degree: 'Class X — CBSE',
    period: '2023',
    grade: '96.6%',
    icon: 'fa-solid fa-school-flag',
  },
]

const achievements = [
  { text: 'SGPA 8.95 at National Institute of Technology Patna', icon: 'fa-solid fa-graduation-cap' },
  { text: 'IOQM Qualifier 2024 (Indian Olympiad Qualifier in Mathematics)', icon: 'fa-solid fa-medal' },
  { text: 'CBSE Meritorious Certificate — Class XII (95%)', icon: 'fa-solid fa-star' },
]

const featuredProjects = [
  {
    name: 'Medilink',
    desc: 'Healthcare platform for medical consultations and patient record management.',
    tags: ['React 18', 'Vite', 'CSS Modules'],
    icon: 'fa-solid fa-heart-pulse',
    link: '/projects/medilink',
  },
  {
    name: 'Amazon Clone',
    desc: 'Full homepage replica focusing on complex layout, box model, and positioning.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    icon: 'fa-brands fa-amazon',
    link: '/projects/amazon-clone',
  },
  {
    name: 'Tic-Tac-Toe',
    desc: 'Browser game engine with dynamic game loop, win detection, and draw-state logic.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    icon: 'fa-solid fa-gamepad',
    link: '/projects/tic-tac-toe',
  },
  {
    name: 'Theme Park System',
    desc: 'Python & MySQL CRUD application managing ticket sales and visitor entries.',
    tags: ['Python', 'MySQL'],
    icon: 'fa-solid fa-ticket',
    link: '/projects/theme-park-system',
  },
]

export default function About() {
  const [ratings, setRatings] = useState(initialCpRatings)

  useEffect(() => {
    let isMounted = true

    // Fetch Codeforces live rating & floor to 100
    fetch('https://codeforces.com/api/user.info?handles=baby_singh_07')
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return
        if (data.status === 'OK' && data.result?.[0]?.rating) {
          const rawRating = data.result[0].rating
          const maxRating = data.result[0].maxRating || rawRating
          const rank = data.result[0].rank || 'Pupil'
          const cfRating = Math.floor(rawRating / 100) * 100
          setRatings(prev => prev.map(item =>
            item.platform === 'Codeforces'
              ? {
                  ...item,
                  rating: `${cfRating}+`,
                  badge: rank.charAt(0).toUpperCase() + rank.slice(1),
                  subtext: `Max Rating ${maxRating}`,
                }
              : item
          ))
        }
      })
      .catch(() => {})

    // Fetch LeetCode live rating & floor to 100
    fetch('https://alfa-leetcode-api.onrender.com/userContestRankingInfo/shashank_16707')
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return
        const lcRatingRaw = data?.userContestRanking?.rating
        const badgeName = data?.userContestRanking?.badge?.name || 'Knight'
        const topPercent = data?.userContestRanking?.topPercentage
        if (lcRatingRaw) {
          const lcRating = Math.floor(lcRatingRaw / 100) * 100
          setRatings(prev => prev.map(item =>
            item.platform === 'LeetCode'
              ? {
                  ...item,
                  rating: `${lcRating}+`,
                  badge: badgeName,
                  subtext: topPercent ? `Top ${topPercent}% · Rating ${Math.round(lcRatingRaw)}` : `Rating ${Math.round(lcRatingRaw)}`,
                }
              : item
          ))
        }
      })
      .catch(() => {})

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="about-page">
      <div className="about-page__container">
        <div className="panel about-page__card">

          {/* ═══════════════════════════════════════════════════════════
             SECTION 1: HERO (Bio + Portrait + Actions)
             ═══════════════════════════════════════════════════════════ */}
          <section className="about-hero">
            <div className="about-hero__content">
              <div className="about-hero__badge">
                <i className="fa-solid fa-user"></i>
                <span>About Me</span>
              </div>

              <h1 className="about-hero__name">Shashank Shekhar Singh</h1>
              <p className="about-hero__tagline">
                B.Tech CSE &nbsp;·&nbsp; NIT Patna &nbsp;·&nbsp; 2025–2029
              </p>

              <p className="about-hero__bio">
                I'm a first-year Computer Science student at the National Institute of Technology Patna with a deep
                enthusiasm for competitive programming, full-stack web applications, and algorithmic problem-solving.
                I engineer clean frontends in React, build backend architectures with Express &amp; MongoDB, and solve
                complex algorithmic challenges in C++.
              </p>

              <div className="about-hero__actions">
                <a
                  className="btn-primary about-hero__resume-btn"
                  href="/Shashank_Resume.pdf"
                  download
                >
                  <i className="fa-solid fa-file-arrow-down"></i>
                  <span>Download Resume</span>
                </a>
                <Link to="/contact" className="btn-secondary about-hero__contact-btn">
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Get in Touch</span>
                </Link>
                <div className="about-hero__socials">
                  {socialLinks.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      className="icon-circle-btn about-hero__social-icon"
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      aria-label={label}
                    >
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Avatar with Ambient Glow */}
            <div className="about-hero__avatar-wrap">
              <div className="about-hero__avatar-halo">
                <img
                  src="/MyImage.png"
                  alt="Shashank Shekhar Singh"
                  className="about-hero__avatar-img"
                  fetchPriority="high"
                />
              </div>
              <div className="about-hero__avatar-tag">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>NIT Patna · CSE '29</span>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
             SECTION 2: COMPETITIVE PROGRAMMING SPOTLIGHT
             ═══════════════════════════════════════════════════════════ */}
          <section className="about-cp">
            <div className="about-section-header">
              <i className="fa-solid fa-ranking-star"></i>
              <h2>Competitive Programming</h2>
            </div>

            <div className="about-cp__grid">
              {ratings.map(({ platform, rating, badge, subtext, icon, href, accent }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-cp__card"
                  style={{ '--cp-accent': accent }}
                >
                  <div className="about-cp__card-top">
                    <div className="about-cp__icon-wrap">
                      <i className={icon}></i>
                    </div>
                    <span className="about-cp__badge">{badge}</span>
                  </div>

                  <div className="about-cp__card-body">
                    <span className="about-cp__rating">{rating}</span>
                    <span className="about-cp__platform">{platform}</span>
                    <span className="about-cp__subtext">{subtext}</span>
                  </div>

                  <div className="about-cp__arrow">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════
             SECTION 3: TWO-COLUMN DETAILS (Education & Technical Toolkit)
             ═══════════════════════════════════════════════════════════ */}
          <div className="about-columns">

            {/* LEFT: Education & Achievements */}
            <div className="about-column">
              <div className="about-section-header">
                <i className="fa-solid fa-graduation-cap"></i>
                <h2>Education &amp; Milestones</h2>
              </div>

              <div className="about-timeline">
                {education.map(({ institution, degree, period, grade, icon, current }) => (
                  <div key={institution + period} className={`about-timeline__item ${current ? 'about-timeline__item--current' : ''}`}>
                    <div className="about-timeline__icon">
                      <i className={icon}></i>
                    </div>
                    <div className="about-timeline__content">
                      <div className="about-timeline__top">
                        <span className="about-timeline__inst">{institution}</span>
                        <span className="about-timeline__period">{period}</span>
                      </div>
                      <span className="about-timeline__degree">{degree}</span>
                      <div className="about-timeline__badge-row">
                        <span className="chip-badge about-timeline__grade">{grade}</span>
                        {current && <span className="chip-badge about-timeline__current-tag">Current</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="about-achievements-block">
                <span className="about-sublabel">Honors &amp; Recognitions</span>
                <div className="about-achievements-list">
                  {achievements.map(({ text, icon }) => (
                    <div key={text} className="about-achievement-card">
                      <i className={icon}></i>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Tech Stack & Selected Projects */}
            <div className="about-column">
              <div className="about-section-header">
                <i className="fa-solid fa-layer-group"></i>
                <h2>Technical Toolkit</h2>
              </div>

              <div className="about-skills-wrap">
                {skills.map(({ label, category, icon }) => (
                  <div key={label} className="about-skill-chip">
                    <i className={icon}></i>
                    <span className="about-skill-chip__name">{label}</span>
                    <span className="about-skill-chip__category">{category}</span>
                  </div>
                ))}
              </div>

              {/* Featured Projects Highlight */}
              <div className="about-featured-projects">
                <div className="about-featured-projects__header">
                  <span className="about-sublabel">Selected Works</span>
                  <Link to="/projects" className="about-view-all-link">
                    <span>View all projects</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>

                <div className="about-projects-list">
                  {featuredProjects.map(({ name, desc, tags, icon, link }) => (
                    <Link key={name} to={link} className="about-project-card">
                      <div className="about-project-card__icon">
                        <i className={icon}></i>
                      </div>
                      <div className="about-project-card__info">
                        <div className="about-project-card__top">
                          <span className="about-project-card__title">{name}</span>
                          <i className="fa-solid fa-arrow-right about-project-card__arrow"></i>
                        </div>
                        <p className="about-project-card__desc">{desc}</p>
                        <div className="about-project-card__tags">
                          {tags.map(t => (
                            <span key={t} className="chip-badge">{t}</span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}
