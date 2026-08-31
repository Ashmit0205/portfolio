<div align="center">

# Ashmit Gupta — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A modern, high-performance personal portfolio engineered with React, Framer Motion, and WebGL shader aesthetics.</b>
  <br />
  Featuring cyber-terminal aesthetics, interactive physics, 3D card decks, and a dual light/dark theme engine.
</p>

</div>

---

## 👨‍💻 About Me

Hi, I'm **Ashmit Gupta** — a Computer Science student and software developer based in Bangalore. 

I focus on engineering practical software systems, spanning **full-stack platforms**, **smart contracts / Web3**, **robotics & embedded systems (ESP32/Arduino)**, and **API-driven automation pipelines**.

- 🔭 **Current Focus**: Decentralized applications (Solidity/Ethers.js), embedded systems, and automated workflows.
- 💡 **Engineering Philosophy**: Pragmatic builder who prioritizes tangible, working architectures over pure theoretical concepts.
- 📍 **Location**: Bangalore, India
- 📬 **Direct Email**: [ashmit0205@gmail.com](mailto:ashmit0205@gmail.com)

---

## 🌟 Key Features

- 🌓 **Dual Theme Engine with Interactive Pull-Cord**:
  - Seamless toggle between a deep cyber dark theme and a clean light theme.
  - Interactive physics-based pull-cord switch with spring dampening and persistent state (`localStorage`).

- 🎯 **Advanced Interactive Primitives**:
  - **Crosshair Target Cursor**: Smooth trailing crosshair cursor with proximity activation.
  - **Magnetic Elements**: Magnetic physics applied to navigation links, action buttons, and social pills.
  - **3D Card Stack & CardSwap**: Interactive 3D perspective card decks for exploring featured project modules and credentials.

- 🌌 **Shader & Particle Atmospheric Visuals**:
  - **Dynamic WebThreads Background**: GPU-accelerated interactive waveform threads.
  - **Aurora Shader Canvas**: Real-time ambient chromatic aurora mesh.
  - **Ambient Constellation Network**: Connecting particle node network driven by scroll velocity.

- 💎 **Glassmorphism & Cyber Aesthetics**:
  - Frosted glass capsule navigation with an adaptive sliding indicator.
  - Spotlight cards that track pointer illumination.
  - ASCII code badges, terminal metadata tags, and animated status beacons.

- 📱 **Fully Responsive & Accessible**:
  - Fluid typography with CSS `clamp()` and responsive CSS grid architectures.
  - Semantic HTML5 structure with optimized asset loading.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Core** | React 19, JavaScript (ES6+), HTML5, Vanilla CSS3 |
| **Tooling & Bundler** | Vite, Rollup, Oxlint |
| **Animation & Physics** | Framer Motion |
| **Icons & Visuals** | Lucide React, Custom SVG Icons, WebGL Shaders, Canvas API |
| **Fonts** | Outfit, JetBrains Mono, Inter |

---

## 🚀 Featured Projects Highlighted

1. **DecentWork — Decentralized Freelancing Platform (2026)**
   - Escrow-based smart contracts for automated milestone payments between clients and freelancers.
   - *Tech:* Solidity, Ethereum, Hardhat, Ethers.js, MetaMask, React.js.

2. **Spotify Voice Assistant & Playlist Migration System (2026)**
   - Voice-controlled playback system with wake-word detection & automated cross-platform playlist transfer to Apple Music.
   - *Tech:* Python, Spotipy, SpeechRecognition, AppleScript, REST APIs, OAuth 2.0.

3. **Warehouse Inventory Management Robot**
   - Autonomous color-path following transport robot powered by ESP32 microcontroller and real-time color sensor logic.
   - *Tech:* ESP32, C/C++, Embedded Systems, Motor Drivers, DC Geared Actuators.

4. **Phoenix Club Website (2026)**
   - Official responsive club platform featuring client-side routing, modular UI architecture, and mobile optimization.
   - *Tech:* React.js, Vite, Tailwind CSS, React Router.

5. **Autonomous Maze-Solving Robot**
   - Ultrasonic obstacle detection and wall-following algorithms implemented on an Arduino chassis.
   - *Tech:* Arduino, C++, Embedded Systems.

6. **Hand Gesture Media Controller**
   - Real-time computer vision interface mapping hand landmark detection to system volume and media playback.
   - *Tech:* Python, OpenCV, MediaPipe.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg               # Site icon
│   ├── hero-sticker.png          # Hero illustration asset
│   └── hero-pixel-matrix.svg     # CRT Phosphor matrix artwork
├── src/
│   ├── components/
│   │   ├── bits/                 # Interactive UI components
│   │   │   ├── AnimatedList.jsx  # Staggered animated list
│   │   │   ├── Aurora.jsx        # Ambient shader aurora canvas
│   │   │   ├── BlurText.jsx      # Blur text stagger reveal
│   │   │   ├── CardSwap.jsx      # 3D Card swapping stack
│   │   │   ├── Magnet.jsx        # Magnetic cursor pull wrapper
│   │   │   ├── SpotlightCard.jsx # Mouse-tracking illumination card
│   │   │   ├── TargetCursor.jsx  # Interactive crosshair target cursor
│   │   │   ├── TiltedCard.jsx    # 3D tilt interaction card
│   │   │   └── WebThreads.jsx    # WebGL dynamic background threads
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Floating glass pill navbar
│   │   │   └── Footer.jsx        # Footer & status links
│   │   ├── sections/
│   │   │   ├── Hero.jsx          # Hero section with stroke text & sticker
│   │   │   ├── About.jsx         # Background & core engineering pillars
│   │   │   ├── Journey.jsx       # Interactive chronological project timeline
│   │   │   ├── Skills.jsx        # Technical competencies & ticker
│   │   │   ├── Credentials.jsx   # Certifications & 3D card deck
│   │   │   ├── Education.jsx     # Academic milestones & course highlights
│   │   │   └── Contact.jsx       # Contact form & social connections
│   │   └── ui/
│   │       ├── AmbientCanvas.jsx # Particle network background
│   │       ├── BackgroundBlobs.jsx
│   │       ├── PullCord.jsx      # Interactive physical pull-cord switch
│   │       └── ScrollProgress.jsx# Scroll indicator bar
│   ├── App.jsx                   # Root application & theme provider
│   ├── index.css                 # Design system & CSS custom properties
│   └── main.jsx                  # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ashmit0205/portfolio.git

# 2. Navigate to project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The app will launch locally at `http://localhost:5173/`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Connect with Me

- **GitHub**: [@Ashmit0205](https://github.com/Ashmit0205)
- **LinkedIn**: [Ashmit Gupta](https://www.linkedin.com/in/ashmit-gupta-386560343/)
- **Email**: [ashmit0205@gmail.com](mailto:ashmit0205@gmail.com)

---

<div align="center">
  <sub>Designed & Developed by <b>Ashmit Gupta</b>. Built with React & Vite.</sub>
</div>
