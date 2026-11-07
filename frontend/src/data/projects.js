import { SYNMORPHIC_LOGO_B64 } from './logoBase64'

function makeSvgPreview(title, subtitle, accentColor = '#38bdf8') {
  const safeTitle = String(title)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
  const safeSubtitle = String(subtitle)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#141728"/>
        <stop offset="100%" stop-color="#0b0d18"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
      </linearGradient>
      <filter id="logo-tint" color-interpolation-filters="sRGB">
        <feFlood flood-color="${accentColor}" result="color"/>
        <feComposite in="color" in2="SourceAlpha" operator="in"/>
      </filter>
    </defs>
    <rect width="800" height="500" fill="url(#bg)"/>
    <circle cx="400" cy="190" r="140" fill="url(#glow)"/>
    <rect x="24" y="24" width="752" height="452" rx="20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <circle cx="400" cy="195" r="48" fill="${accentColor}" fill-opacity="0.12" stroke="${accentColor}" stroke-width="2"/>
    <image href="${SYNMORPHIC_LOGO_B64}" filter="url(#logo-tint)" x="372" y="167" width="56" height="56" preserveAspectRatio="xMidYMid meet" />
    <text x="400" y="280" font-family="-apple-system, system-ui, BlinkMacSystemFont, sans-serif" font-size="26" font-weight="700" fill="#f8fafc" text-anchor="middle">${safeTitle}</text>
    <text x="400" y="318" font-family="-apple-system, system-ui, BlinkMacSystemFont, sans-serif" font-size="15" font-weight="500" fill="#94a3b8" text-anchor="middle">${safeSubtitle}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const rawProjects = [
  {
    id: 1,
    slug: "graph-visualizer-cpp",
    title: "Graph Visualizer C++",
    date: "2026-11-05",
    dateFormatted: "Nov 2026",
    year: 2026,
    shortDescription: "A header-only C++ graph algorithm visualizer with terminal parsing and automated Graphviz diagram generation.",
    description: "Built while studying graph data structures and competitive programming algorithms. It parses undirected or directed graph input from standard terminal streams and automatically renders visual diagrams with Graphviz whenever plot() is invoked.",
    fullDescription: "A lightweight, header-only C++20 utility developed to visually debug complex graph traversals like BFS, DFS, Dijkstra, and cycle detection algorithms. Designed with zero runtime overhead, it interfaces cleanly with Graphviz's dot engine to generate instant graph representations.",
    link: null,
    github: "https://github.com/shashankshekhar1672007-oss/graph_viz_cpp",
    technologies: ["C++20", "Graph Algorithms", "Graphviz", "CLI Tools", "Data Structures"],
    duration: "1 week",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Graph Rendering",
        description: "Visual node-edge diagram output generated dynamically via Graphviz dot engine",
        url: makeSvgPreview("Graph Rendering", "Dynamic node and edge visualization with Graphviz", "#ef4444"),
      },
      {
        id: 2,
        title: "Terminal Input Parser",
        description: "CLI stream reader parsing adjacency lists and weighted edges",
        url: makeSvgPreview("CLI Parser", "Reads adjacency lists and edge matrices from standard input", "#f97316"),
      },
    ],
    features: [
      "Header-only integration for seamless inclusion in algorithmic solutions",
      "Dynamic plotting of directed, undirected, and weighted graphs",
      "Automatic execution of Graphviz dot to generate image output",
      "Zero external runtime dependencies beyond standard C++ libraries",
    ],
    challenges: [
      "Formatting clean DOT language syntax programmatically from in-memory representations",
      "Handling edge-case disconnected subgraphs and self-loops gracefully",
    ],
    learnings: [
      "Advanced C++ template metaprogramming and standard library I/O manipulation",
      "Inter-process communication and piping to system visualization binaries",
    ],
    status: "Completed",
  },
  {
    id: 2,
    slug: "cubicnotes",
    title: "CubicNotes",
    date: "2026-07-14",
    dateFormatted: "Jul 2026",
    year: 2026,
    shortDescription: "A fast, minimalist note-taking application designed for productivity, clean organization, and seamless thought capture.",
    description: "CubicNotes is a modern web application designed for organizing notes, tasks, and ideas with speed and simplicity. It features instant search, categorical tagging, and markdown editing capabilities.",
    fullDescription: "CubicNotes was built to provide a clean, distraction-free writing environment. Focused on lightning-fast interaction and intuitive categorization, it allows users to draft, format, and organize their personal and technical thoughts with ease.",
    link: "https://cubicnotes.vercel.app",
    github: "https://github.com/shashankshekhar1672007-oss/cubicnotes",
    technologies: ["React.js", "Vite", "JavaScript ES6", "CSS3", "Vercel Deployment"],
    duration: "2 weeks",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Note Editor",
        description: "Distraction-free note composition and rich formatting",
        url: makeSvgPreview("Note Workspace", "Clean markdown editor and distraction-free writing canvas", "#8b5cf6"),
      },
      {
        id: 2,
        title: "Tagging & Search",
        description: "Instant real-time search across all archived notes and tags",
        url: makeSvgPreview("Categorization Engine", "Fast query search with multi-tag filtering", "#a855f7"),
      },
    ],
    features: [
      "Distraction-free, responsive writing interface",
      "Real-time note filtering and instant search",
      "Tag-based classification system",
      "Local storage persistence and quick recovery",
      "Sleek minimalist UI aesthetic",
    ],
    challenges: [
      "Building a performant search filter across growing text entries",
      "Crafting an uncluttered interface that stays productive on mobile viewports",
    ],
    learnings: [
      "Performance optimization for real-time text input handling in React",
      "Designing clean minimalist design systems",
    ],
    status: "Completed",
  },
  {
    id: 3,
    slug: "medilink",
    title: "MediLink",
    date: "2026-05-22",
    dateFormatted: "May 2026",
    year: 2026,
    shortDescription: "A telemedicine and healthcare platform for patient record management and online medical consultations.",
    description: "MediLink is a telemedicine platform built to connect patients and healthcare professionals seamlessly. It offers appointment scheduling, real-time consultation features, and secure patient medical history management with a clean, accessible user interface.",
    fullDescription: "MediLink was engineered to streamline healthcare access. Patients can find certified doctors, schedule video appointments, and maintain their digital prescription history. The architecture prioritizes data privacy, responsiveness across mobile and desktop devices, and low-latency interaction.",
    link: "https://shashankshekhar1672007-oss.github.io/MediLink/",
    github: "https://github.com/shashankshekhar1672007-oss/MediLink",
    technologies: ["React.js", "Vite", "JavaScript ES6", "CSS Modules", "Responsive Design", "REST APIs"],
    duration: "4 weeks",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Patient Dashboard",
        description: "Overview of upcoming appointments, doctor availability, and medical history",
        url: makeSvgPreview("Patient Dashboard", "Upcoming consultations, records, and appointment bookings", "#06b6d4"),
      },
      {
        id: 2,
        title: "Doctor Directory",
        description: "Search and filter certified healthcare professionals by specialty and rating",
        url: makeSvgPreview("Doctor Directory", "Search, filter, and view availability for specialists", "#3b82f6"),
      },
      {
        id: 3,
        title: "Consultation Portal",
        description: "Secure medical consultation interface with real-time prescription view",
        url: makeSvgPreview("Consultation Portal", "Real-time communication and digital prescriptions", "#64748b"),
      },
    ],
    features: [
      "Intuitive doctor discovery with specialty and availability filtering",
      "Interactive appointment booking and scheduling calendar",
      "Digital prescription management and historical medical records",
      "Fully responsive and mobile-accessible interface",
      "Clean modular CSS architecture with optimized asset delivery",
    ],
    challenges: [
      "Designing an empathetic and accessible UI suitable for diverse demographics",
      "Managing complex appointment and filter states across multiple components",
      "Optimizing load performance for fast emergency access on mobile networks",
    ],
    learnings: [
      "Component-driven development in modern React 18 / Vite architecture",
      "Accessibility best practices (WCAG) for healthcare portals",
      "Effective state management and data structuring for user profiles",
    ],
    status: "Completed",
  },
  {
    id: 4,
    slug: "amazon-clone",
    altSlugs: ["ecommercehomepageclone", "ecommerce-homepage-clone"],
    title: "Amazon Clone",
    date: "2026-01-24",
    dateFormatted: "Jan 2026",
    year: 2026,
    shortDescription: "A pixel-perfect recreation of Amazon's homepage built with pure HTML5 and CSS3 to master layout and design principles.",
    description: "I built this Amazon homepage clone as a capstone project to test my understanding of HTML5 and CSS3. My goal was to replicate a complex, real-world layout without relying on frameworks. This project helped me understand the importance of box model, positioning, and structuring a content-heavy webpage.",
    fullDescription: "This was my first major frontend project where I challenged myself to recreate Amazon's homepage without using any frameworks. The focus was on understanding fundamental web technologies and how professional websites structure their layouts. I spent significant time studying the HTML hierarchy, CSS styling techniques, and responsive design patterns used by real-world applications. The project taught me not just how to build, but how to think about scalable, maintainable front-end architecture.",
    link: "https://shashankshekhar1672007-oss.github.io/EcommerceHomepageClone/",
    github: "https://github.com/shashankshekhar1672007-oss/EcommerceHomepageClone",
    technologies: ["HTML5", "CSS3", "JavaScript ES6", "Flexbox", "CSS Grid", "Responsive Design", "Semantic HTML"],
    duration: "3 weeks",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Header with navigation menu, search bar, and promotional banner showcasing products",
        url: makeSvgPreview("Homepage Hero Section", "Header with navigation menu, search bar, and hero banner", "#ff9900"),
      },
      {
        id: 2,
        title: "Featured Products Section",
        description: "Product grid with multiple category cards and responsive layout",
        url: makeSvgPreview("Product Categories", "Multi-column responsive grid layout with dynamic category cards", "#f59e0b"),
      },
      {
        id: 3,
        title: "Navigation Bar",
        description: "Sticky header with search functionality, account menu, and navigation links",
        url: makeSvgPreview("Navigation System", "Sticky responsive header bar with search and sub-menus", "#38bdf8"),
      },
      {
        id: 4,
        title: "Responsive Mobile View",
        description: "Mobile-optimized layout showing hamburger menu and condensed sections",
        url: makeSvgPreview("Mobile Viewport", "Adapted flexbox/grid layout optimized for mobile screens", "#64748b"),
      },
    ],
    features: [
      "Fully responsive layout adapting to mobile, tablet, and desktop screens",
      "Complex nested layouts using CSS Grid and Flexbox",
      "Semantic HTML5 structure with proper heading hierarchy",
      "Sticky navigation bar that persists while scrolling",
      "Interactive hover effects and smooth transitions",
      "Product grid with dynamic card layouts",
      "Search bar with proper form semantics",
      "Footer with multiple column layout",
    ],
    challenges: [
      "Recreating complex nested layouts with CSS only (no frameworks)",
      "Managing responsive breakpoints effectively across all screen sizes",
      "Maintaining semantic HTML while achieving exact visual design",
      "Handling diverse content types (text, images, forms) in a single layout",
      "Achieving pixel-perfect alignment without using absolute positioning excessively",
    ],
    learnings: [
      "Deep understanding of CSS Box Model and its implications",
      "Advanced CSS Grid techniques including auto-placement and named areas",
      "Flexbox for creating flexible, alignment-friendly layouts",
      "Mobile-first responsive design methodology",
      "HTML semantic markup and accessibility considerations",
      "CSS specificity, cascading, and inheritance",
      "Performance optimization techniques for faster page loads",
    ],
    status: "Completed",
  },
  {
    id: 5,
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    date: "2026-01-23",
    dateFormatted: "Jan 2026",
    year: 2026,
    shortDescription: "A fully functional Tic Tac Toe game with intelligent win detection algorithm, turn management, and game state tracking.",
    description: "I developed this Tic Tac Toe game to practice handling complex logic in JavaScript. The project features a dynamic game loop that tracks player turns, detects winning combinations across rows, columns, and diagonals, and identifies draw conditions automatically.",
    fullDescription: "This was a significant step up in complexity from my previous games. Tic Tac Toe required sophisticated algorithms to detect all possible winning combinations, manage a 2D board state, and prevent invalid moves. I implemented a game engine that handles turn alternation, validates moves, and determines game outcomes accurately. This project taught me how to think algorithmically and debug complex game logic.",
    link: "https://shashankshekhar1672007-oss.github.io/TicTacToe/",
    github: "https://github.com/shashankshekhar1672007-oss/TicTacToe",
    technologies: ["JavaScript ES6", "DOM Manipulation", "Algorithm Design", "CSS3 Animations", "HTML5", "Game Logic"],
    duration: "2 weeks",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Game Board",
        description: "3x3 interactive grid where players place their marks (X or O)",
        url: makeSvgPreview("Interactive Grid", "3x3 dynamic board with active cell tracking and move validation", "#6366f1"),
      },
      {
        id: 2,
        title: "Win Detection",
        description: "Board showing winning combination highlighted with visual feedback",
        url: makeSvgPreview("Win State Algorithm", "Line highlight algorithm evaluating 8 possible win combinations", "#64748b"),
      },
      {
        id: 3,
        title: "Game Over Screen",
        description: "Winner announcement with replay button and game statistics",
        url: makeSvgPreview("Game Over State", "Match statistics and instant reset trigger", "#f43f5e"),
      },
    ],
    features: [
      "Dynamic 3x3 game board with clickable cells",
      "Automatic win detection across all rows, columns, and both diagonals",
      "Draw condition detection when all cells are filled without a winner",
      "Turn tracking system alternating between X and O players",
      "Prevention of overwriting already-played cells",
      "Visual highlighting of winning combination",
      "Game reset functionality to start new games",
      "Turn indicator showing whose turn it is",
      "Completely responsive on all device sizes",
      "Keyboard support for accessibility",
    ],
    challenges: [
      "Implementing an efficient win-detection algorithm checking 8 possible winning combinations",
      "Managing a 2D board state represented as a 1D array",
      "Validating user moves and preventing overwrites elegantly",
      "Handling edge cases like simultaneous clicking or double-clicks",
      "Debugging complex nested loops and conditional logic",
      "Ensuring turn management doesn't get corrupted",
    ],
    learnings: [
      "Algorithm design and optimization techniques",
      "Array manipulation and iteration patterns",
      "Index calculations for 2D board representation",
      "Complex conditional logic and nested loops",
      "Game state management and validation",
      "Debugging strategies for logic-heavy code",
      "User input validation and edge case handling",
      "Code organization for complex JavaScript applications",
    ],
    status: "Completed",
  },
  {
    id: 6,
    slug: "rock-paper-scissors",
    altSlugs: ["theme-park-system"],
    title: "Rock Paper Scissors",
    date: "2026-01-20",
    dateFormatted: "Jan 2026",
    year: 2026,
    shortDescription: "An interactive game featuring DOM manipulation, real-time score tracking, and dynamic computer AI with instant feedback.",
    description: "I built this interactive Rock Paper Scissors game to practice DOM manipulation and fundamental game logic. Using JavaScript, I created functions to handle user input, generate a random computer choice, and compare results to determine the winner dynamically.",
    fullDescription: "This project marked my transition from static HTML/CSS to dynamic JavaScript. I learned how to make web pages interactive by listening to user events, updating the DOM in real-time, and managing game state. The project included score tracking, win/loss streak detection, and visual feedback animations to enhance user experience.",
    link: "https://shashankshekhar1672007-oss.github.io/RockPaperScissors/",
    github: "https://github.com/shashankshekhar1672007-oss/RockPaperScissors",
    technologies: ["JavaScript ES6", "DOM Manipulation", "Event Listeners", "CSS3 Animations", "HTML5"],
    duration: "1 week",
    role: "Solo Developer",
    screenshots: [
      {
        id: 1,
        title: "Game Interface",
        description: "Main gameplay area with choice buttons (Rock, Paper, Scissors) and instant result display",
        url: makeSvgPreview("Game Interface", "Interactive buttons with real-time feedback and state indicators", "#818cf8"),
      },
      {
        id: 2,
        title: "Score Display",
        description: "Real-time score tracker showing player wins, computer wins, and draws",
        url: makeSvgPreview("Score Tracker", "Live score evaluation board comparing player vs computer stats", "#ec4899"),
      },
      {
        id: 3,
        title: "Winner Announcement",
        description: "Dynamic message display showing who won each round with visual animation",
        url: makeSvgPreview("Result Animation", "Round result banner with animated win/loss feedback", "#06b6d4"),
      },
    ],
    features: [
      "Interactive button-based gameplay with instant feedback",
      "Live score tracking showing player vs computer results",
      "Win/Loss/Draw detection with appropriate messaging",
      "Computer AI with truly random choice generation using Math.random()",
      "Dynamic DOM updates without page refresh",
      "Smooth CSS animations for score updates",
      "Round history tracking",
      "Reset game functionality",
      "Responsive design for all screen sizes",
    ],
    challenges: [
      "Implementing proper game logic and state management without frameworks",
      "Creating smooth animations that don't interfere with gameplay",
      "Handling rapid consecutive clicks and preventing game state conflicts",
      "Generating truly random computer choices",
      "Updating multiple DOM elements in sync",
    ],
    learnings: [
      "Event handling and event listeners in vanilla JavaScript",
      "DOM selection and manipulation techniques",
      "JavaScript conditional logic and control flow",
      "Function creation and execution",
      "Random number generation algorithms",
      "State management in JavaScript applications",
      "CSS animations and transitions for interactive feedback",
    ],
    status: "Completed",
  },
]

// Pre-sorted by date: newest first
const projects = [...rawProjects].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default projects
