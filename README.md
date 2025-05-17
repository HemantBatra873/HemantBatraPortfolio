# Hemant Batra's Portfolio Website

A sleek, performant, and fully responsive developer portfolio website built using modern frontend tools. The site showcases key projects, skills, and contact details through minimalistic design, interactive UI components, and smooth transitions.

---

## Table of Contents

* [Tech Stack Overview](#tech-stack-overview)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Setup Instructions](#setup-instructions)
* [Demo Screenshots](#demo-screenshots)
* [Key Pages & Components](#key-pages--components)
* [Projects Highlighted](#projects-highlighted)
* [License](#license)

---

## Tech Stack Overview

| Tool/Library                     | Purpose                                                                    |
| -------------------------------- | -------------------------------------------------------------------------- |
| **React.js**                     | Core library for building UI components using a component-driven approach. |
| **TypeScript**                   | Adds static typing, ensures code robustness and reduces runtime errors.    |
| **Tailwind CSS**                 | Utility-first CSS framework for fast and responsive UI development.        |
| **Framer Motion**                | Enables high-performance animations and page transitions.                  |
| **Vite**                         | Blazing-fast frontend build tool and dev server used with React.           |
| **Custom Fonts (Avegas Royale)** | Typography personalization to match branding aesthetics.                   |
| **Cursor Effects**               | Enhances interactivity and user engagement.                                |
| **Vercel**                       | Deployment platform offering optimized build and global CDN.               |

Each tool was chosen with performance, scalability, and modern UI/UX best practices in mind.

---

## Features

* Full SPA navigation using React Router
* Custom theming and animated cursor interaction
* Responsive design across devices (mobile-first approach)
* Modular component architecture
* Animated transitions with Framer Motion
* Real project mockups embedded
* Code scalability and readable directory structure

---

## Folder Structure

```
HemantBatraPortfolio/
│
├── public/               # Static assets: mockups, fonts, favicon
│   └── gruhamMockup.png  # Project mockup images
│
├── src/
│   ├── assets/           # Fonts, images, SVGs
│   ├── components/       # Reusable UI components (Header, Cursor, Footer)
│   ├── pages/            # Page views: Home, About, Projects, Contact
│   ├── App.tsx           # Main application routing
│   └── main.tsx          # React DOM render logic
│
├── tailwind.config.js    # Tailwind theme extensions
├── postcss.config.js     # CSS transformation config
├── vite.config.ts        # Vite bundler config
├── package.json          # Project dependencies & metadata
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/HemantBatra873/HemantBatraPortfolio.git
cd HemantBatraPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Local Development Server

```bash
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## Demo Screenshots

**Home Page**

![home](https://github.com/user-attachments/assets/0aa2ba9f-902d-4cff-9d62-1f2175a9bfdc)

**Projects Section**

![work](https://github.com/user-attachments/assets/fd9be11b-42ab-439b-9869-a7e730d49873)

---

## Key Pages & Components

### Pages

* **Home Page** – Introduction, brief overview, scroll to other sections
* **Projects** – Showcases major apps with titles, descriptions, and mockups
* **About** – Brief profile, skillset, and philosophy
* **Contact** – CTA to connect via email or social links

### Reusable Components

* `Header.tsx` – Navigation bar
* `CustomCursor.tsx` – Animated cursor component
* `Footer.tsx` – Social links and contact footer
* `ProjectCard.tsx` – Template for showcasing individual projects

---

## Projects Highlighted

### Gruham

A real estate marketplace app with search, filter, and listing features.

* **Tech**: React, Redux, Firebase, PostgreSQL
* **Role**: Full-stack developer, designed frontend and backend flow

### Cooperative AI

AI-powered chatbot with secure auth and chat functionality.

* **Tech**: React, Material UI, TypeScript, Node.js, MongoDB
* **Role**: Lead frontend dev and integrated Gemini 2.0 Flash model

### Agrasar Landing Page

Product-style website for a fictional brand. Aesthetically rich with smooth transitions and layouts.

---

## License

Licensed under the **MIT License**. Feel free to fork and customize for your own portfolio.
