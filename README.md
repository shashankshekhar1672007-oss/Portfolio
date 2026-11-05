# 🌐 SynMorphic — Personal Developer Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=for-the-badge&logo=framer&logoColor=blue)

<p align="center">
  A modern, glassmorphic developer portfolio designed and built by <strong>Shashank Shekhar Singh</strong>.
  <br />
  Featuring smooth page transitions, deep-dive project case studies, competitive programming profiles, and an extensible Express/MongoDB backend with ImageKit CDN integration.
</p>

[**View Live Demo**](https://shashankshekhar1672007-oss.github.io/Portfolio/) · [**Report Issue**](https://github.com/shashankshekhar1672007-oss/Portfolio/issues)

</div>

---

## ✨ Features

- **🎨 "SynMorphic" Glassmorphism Design System**
  - Custom frosted glass panels (`backdrop-filter: blur`), subtle lighting glows, and layered depth.
  - Beautiful typographic hierarchy powered by the *Funnel Display* typeface.
  - Fully responsive across mobile, tablet, and desktop viewports.

- **⚡ Interactive Home & Hero**
  - Dynamic typewriter effect showcasing core focuses: *Always building. Always learning. Always coding.*
  - Smooth scroll cue guiding visitors to featured works.

- **📁 In-Depth Project Case Studies**
  - Interactive multi-screenshot gallery with dynamic preview switcher.
  - Detailed sections covering architectural challenges, learnings, and key features.
  - Direct live demo and GitHub repository access.

- **🏆 Developer Profile, CP & Education**
  - Live competitive programming rating cards (**LeetCode 1600+**, **CodeChef 1400+**, **Codeforces 1100+**).
  - Academic background at **NIT Patna** (B.Tech CSE '29).
  - Downloadable resume button and interactive skill chips.

- **📬 Contact Portal**
  - Prefilled `mailto:` form generator capturing project scope, urgency, budget, and contact info.
  - Quick-access social links (GitHub, LinkedIn, Email).

- **🛠️ Extensible Full-Stack Backend**
  - Node.js & Express 5 REST API.
  - ImageKit cloud media integration for image optimization and CDN delivery.
  - MongoDB database schemas for dynamic project persistence.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM (v7)
- **Animations:** Framer Motion
- **Styling:** Vanilla CSS with custom glassmorphism design tokens & variables
- **Icons:** FontAwesome 6

### Backend
- **Runtime:** Node.js
- **Framework:** Express 5
- **Database:** MongoDB & Mongoose
- **File Uploads:** Multer (Memory Storage)
- **Image Storage & CDN:** ImageKit Node.js SDK
- **Config & Security:** Dotenv & CORS

---

## 📂 Project Structure

```text
Portfolio/
├── frontend/                     # React + Vite client application
│   ├── public/                   # Static assets, wallpapers, and logos
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar/           # Responsive navigation bar
│   │   │   ├── Footer/           # Footer with social links & branding
│   │   │   ├── ProjectCard/      # Project preview card
│   │   │   └── GlassSeparator/   # Frosted glass visual dividers
│   │   ├── data/                 # Local portfolio data (projects.js)
│   │   ├── pages/
│   │   │   ├── Home/             # Hero & featured work
│   │   │   ├── Projects/         # All projects grid
│   │   │   ├── ProjectDetail/    # Deep-dive project case study page
│   │   │   ├── About/            # Bio, education, CP ratings & achievements
│   │   │   └── Contact/          # Interactive contact form
│   │   ├── styles/globals.css    # Global glassmorphism variables & styles
│   │   ├── App.jsx               # App routing & animated presence
│   │   └── main.jsx              # React DOM entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                      # Node.js + Express API
│   ├── src/
│   │   ├── controllers/          # Project creation and retrieval logic
│   │   ├── db/                   # MongoDB connection lifecycle
│   │   ├── models/               # Mongoose data models
│   │   ├── routes/               # API endpoint definitions
│   │   ├── services/             # ImageKit cloud storage integration
│   │   └── app.js                # Express app middleware setup
│   ├── server.js                 # Server entry point
│   ├── package.json
│   └── .env.example              # Environment variables template
│
├── .gitignore                    # Git ignore file for secrets and dependencies
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local service or MongoDB Atlas cluster)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository
```bash
git clone https://github.com/shashankshekhar1672007-oss/Portfolio.git
cd Portfolio
```

---

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start at **`http://localhost:5173/`**.

---

### 3. Backend Setup
```bash
cd ../backend
npm install
cp .env.example .env
```

Open `backend/.env` and configure your credentials:
```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key_here
```

Start the backend server:
```bash
node server.js
```
The API server will connect to MongoDB and start on **`http://localhost:4000/`**.

---

## 📡 API Reference

| Method | Endpoint | Description | Payload |
|---|---|---|---|
| `GET` | `/api/projects` | Fetch all projects (sorted newest first) | *None* |
| `POST` | `/api/projects` | Create a new project with image upload | `multipart/form-data`: `title`, `description`, `image`, `liveLink`, `githubLink`, `tags` |

---

## 👤 Author

**Shashank Shekhar Singh**
- 🎓 B.Tech CSE (2025–2029) — National Institute of Technology Patna
- 💼 [LinkedIn](https://www.linkedin.com/in/shashank-shekhar-singh-405959377/)
- 🐙 [GitHub](https://github.com/shashankshekhar1672007-oss)
- 🧠 [LeetCode](https://leetcode.com/u/shashank_shekhar_16072007/)
- ✉️ [shashank.shekhar.1672007@gmail.com](mailto:shashank.shekhar.1672007@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it for inspiration or customize it for your own portfolio.
