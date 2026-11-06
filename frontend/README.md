# 🌐 SynMorphic Portfolio — Frontend

The modern, responsive glassmorphism web client for **Shashank Shekhar Singh's** developer portfolio.

[![Live on Vercel](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-omega-sepia-38.vercel.app/)

- **🚀 Live Production URL:** [https://portfolio-omega-sepia-38.vercel.app/](https://portfolio-omega-sepia-38.vercel.app/)

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM 7
- **Motion & Transitions:** Framer Motion 12
- **Styling:** CSS variables, frosted glassmorphism system (`backdrop-filter: blur`), responsive fluid typography (`clamp()`)
- **Icons:** FontAwesome 6

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Production build:**
   ```bash
   npm run build
   ```
   Output is compiled into `dist/`.

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment (Vercel)

- **Root Directory:** `frontend`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Rewrites:** Configured in `vercel.json` for client-side routing.
