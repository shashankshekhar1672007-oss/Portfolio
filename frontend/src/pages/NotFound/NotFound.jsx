import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <motion.div
        className="panel not-found__card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__desc">
          The page you are looking for doesn't exist, has been moved, or is under construction.
        </p>
        <Link to="/" className="not-found__btn">
          <i className="fa-solid fa-house"></i>
          Back to Home
        </Link>
      </motion.div>
    </main>
  )
}
