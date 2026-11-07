# Project Images Directory

Place your project screenshots and thumbnail images in this folder (or in project-specific subfolders):

```text
frontend/public/projects/
├── graph-visualizer/
│   ├── 1.png
│   └── 2.png
├── cubicnotes/
│   ├── 1.png
│   └── 2.png
├── tic-tac-toe/
│   ├── 1.png
│   └── 2.png
...
```

### How to use them in `frontend/src/data/projects.js`:

Vite automatically serves any file placed in `public/` from the root URL `/`.
To use an image in `projects.js`:

```javascript
screenshots: [
  {
    id: 1,
    title: "Gameplay Screen",
    description: "Dynamic board with active turn indicators",
    url: "/projects/tic-tac-toe/1.png", // <-- path starting with /projects/
  },
  {
    id: 2,
    title: "Winning State",
    description: "Celebration modal and score counter",
    url: "/projects/tic-tac-toe/2.png",
  }
]
```

The first screenshot (`screenshots[0].url`) is automatically used as the card thumbnail on the **Home** and **Projects** pages!
