import { useState, useEffect } from 'react'
import './About.css'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/shashankshekhar1672007-oss',                       icon: 'fa-brands fa-github'   },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-shekhar-singh-405959377/',        icon: 'fa-brands fa-linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/shashank_16707/',                               icon: 'fa-solid fa-code'      },
  { label: 'Email',    href: 'mailto:shashank.shekhar.1672007@gmail.com',                            icon: 'fa-solid fa-envelope'  },
]

const skills = [
  { label: 'C++',        icon: 'fa-solid fa-terminal'  },
  { label: 'Python',     icon: 'fa-brands fa-python'   },
  { label: 'JavaScript', icon: 'fa-brands fa-js'       },
  { label: 'React.js',   icon: 'fa-brands fa-react'    },
  { label: 'DSA',        icon: 'fa-solid fa-sitemap'   },
  { label: 'SQL',        icon: 'fa-solid fa-database'  },
  { label: 'Git',        icon: 'fa-brands fa-git-alt'  },
  { label: 'HTML / CSS', icon: 'fa-brands fa-html5'    },
  { label: 'Java',       icon: 'fa-brands fa-java'     },
  { label: 'C',          icon: 'fa-solid fa-c'         },
]

const initialCpRatings = [
  { platform: 'LeetCode',   rating: '1900+', icon: 'fa-solid fa-trophy',           href: 'https://leetcode.com/u/shashank_16707/',            accentVar: '--cp-lc' },
  { platform: 'CodeChef',   rating: '1400+', icon: 'fa-solid fa-fire-flame-curved', href: 'https://www.codechef.com/users/baby_singh_07',        accentVar: '--cp-cc' },
  { platform: 'Codeforces', rating: '1300+', icon: 'fa-solid fa-chess-knight',      href: 'https://codeforces.com/profile/baby_singh_07',       accentVar: '--cp-cf' },
]

const education = [
  {
    institution: 'NIT Patna',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2025–2029',
    grade: 'SGPA 8.95',
    icon: 'fa-solid fa-building-columns',
  },
  {
    institution: 'KV Gomti Nagar, Lucknow',
    degree: 'Class XII — CBSE',
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

const projects = [
  {
    name: 'Medilink',
    year: '2026',
    desc: 'Healthcare platform for medical consultations and patient record management.',
    tags: ['React 18', 'Vite', 'CSS Modules'],
    icon: 'fa-solid fa-heart-pulse',
  },
  {
    name: 'Amazon Clone',
    year: '2026',
    desc: 'Full homepage replica focusing on complex layout, box model, and positioning.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    icon: 'fa-brands fa-amazon',
  },
  {
    name: 'Tic-Tac-Toe',
    year: '2026',
    desc: 'Browser game with dynamic game loop, win detection, and draw-state logic.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    icon: 'fa-solid fa-gamepad',
  },
  {
    name: 'Theme Park System',
    year: '2024',
    desc: 'Python–MySQL CRUD app managing ticket records and visitor entries.',
    tags: ['Python', 'MySQL'],
    icon: 'fa-solid fa-ticket',
  },
]

const achievements = [
  { text: 'SGPA 8.95 at NIT Patna',          icon: 'fa-solid fa-graduation-cap' },
  { text: 'IOQM Qualifier 2024',              icon: 'fa-solid fa-medal'          },
  { text: 'CBSE Meritorious — Class XII 95%', icon: 'fa-solid fa-star'           },
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
          const cfRating = Math.floor(data.result[0].rating / 100) * 100
          setRatings(prev => prev.map(item =>
            item.platform === 'Codeforces'
              ? { ...item, rating: `${cfRating}+` }
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
        if (lcRatingRaw) {
          const lcRating = Math.floor(lcRatingRaw / 100) * 100
          setRatings(prev => prev.map(item =>
            item.platform === 'LeetCode'
              ? { ...item, rating: `${lcRating}+` }
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
      <div className="about-page__info-box">
        <div className="panel about-page__glass-card">

          {/* ══ LEFT COLUMN — bio · education · projects ══ */}
          <div className="about-page__left-col">
            <div className="panel panel--soft about-page__inner-glass">

              {/* Bio */}
              <div className="about-page__bio-header">
                <h1 className="about-page__name">Shashank Shekhar Singh</h1>
                <p className="about-page__tagline">
                  B.Tech CSE &nbsp;·&nbsp; NIT Patna &nbsp;·&nbsp; 2025–2029
                </p>
              </div>

              <p className="about-page__description">
                I'm a first-year CS student at NIT Patna who loves competitive
                programming, building web apps, and exploring machine learning. I
                write C++ for algorithms, React for frontends, and Python for
                everything in between — always chasing the next hard problem.
              </p>

              {/* Education */}
              <div className="about-page__section-label">
                <i className="fa-solid fa-building-columns"></i> Education
              </div>
              <div className="about-page__edu-list">
                {education.map(({ institution, degree, period, grade, icon }) => (
                  <div key={institution + period} className="about-page__edu-item">
                    <div className="about-page__edu-icon panel panel--soft">
                      <i className={icon}></i>
                    </div>
                    <div className="about-page__edu-body">
                      <span className="about-page__edu-inst">{institution}</span>
                      <span className="about-page__edu-degree">{degree}</span>
                      <div className="about-page__edu-meta">
                        <span className="about-page__edu-period">{period}</span>
                        <span className="chip-badge about-page__edu-grade">{grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div className="about-page__section-label">
                <i className="fa-solid fa-folder-open"></i> Projects
              </div>
              <div className="about-page__projects-grid">
                {projects.map(({ name, year, desc, tags, icon }) => (
                  <div
                    key={name}
                    className="panel panel--soft about-page__project-item"
                  >
                    <div className="about-page__project-header">
                      <i className={icon}></i>
                      <span className="about-page__project-name">{name}</span>
                      <span className="about-page__project-year">{year}</span>
                    </div>
                    <p className="about-page__project-desc">{desc}</p>
                    <div className="about-page__project-tags">
                      {tags.map((t) => (
                        <span key={t} className="chip-badge about-page__project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social + Resume */}
              <div className="about-page__bottom-row">
                <div className="about-page__social-links">
                  {socialLinks.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      className="icon-circle-btn about-page__icn"
                      href={href}
                      target={href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      aria-label={label}
                    >
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
                <a
                  className="btn-secondary about-page__resume-btn"
                  href="/Shashank_Resume.pdf"
                  download
                >
                  <i className="fa-solid fa-file-arrow-down"></i>
                  Resume
                </a>
              </div>

            </div>
          </div>

          {/* ══ RIGHT COLUMN — image · skills · cp · achievements ══ */}
          <div className="about-page__right-col">

            <div className="panel panel--circle about-page__glass-circle">
              <img
                src="/MyImage.png"
                alt="Shashank Shekhar Singh"
                fetchPriority="high"
              />
            </div>

            {/* Skills */}
            <div className="panel panel--soft about-page__sidebar-card">
              <div className="about-page__section-label">
                <i className="fa-solid fa-layer-group"></i> Tech Stack
              </div>
              <div className="about-page__skills">
                {skills.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="chip-badge chip-badge--interactive about-page__skill-chip"
                  >
                    <i className={icon}></i>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CP Ratings */}
            <div className="panel panel--soft about-page__sidebar-card">
              <div className="about-page__section-label">
                <i className="fa-solid fa-ranking-star"></i> Competitive Programming
              </div>
              <div className="about-page__cp-ratings">
                {ratings.map(({ platform, rating, icon, href, accentVar }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel panel--soft about-page__cp-card"
                    style={{ '--cp-accent': `var(${accentVar})` }}
                  >
                    <i className={icon} style={{ color: `var(${accentVar})` }}></i>
                    <span className="about-page__cp-rating">{rating}</span>
                    <span className="about-page__cp-platform">{platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="panel panel--soft about-page__sidebar-card">
              <div className="about-page__section-label">
                <i className="fa-solid fa-award"></i> Achievements
              </div>
              <div className="about-page__achievements">
                {achievements.map(({ text, icon }) => (
                  <div key={text} className="about-page__achievement-item">
                    <i className={icon}></i>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
