# MyShop — React + Vite + Tailwind

A simple e-commerce UI migrated to a modern React + Vite project using Tailwind CSS (PostCSS build).

## Overview

This workspace started as a static Tailwind HTML file and has been converted to a Vite + React app with Tailwind configured via PostCSS. It includes a responsive navigation (with a mobile hamburger), hero, product grid, and footer implemented as React components.

## UI Preview

See `assets/SampleUi.png` for the original UI mock.

## Features

- React components for the main UI: `Nav`, `Hero`, `Products`, `ProductCard`, `Footer`.
- Responsive navigation with a mobile hamburger toggle.
- Tailwind CSS configured with `tailwind.config.cjs` and `postcss.config.cjs`.
- Vite development server and build scripts.

## Technologies Used

- React 18
- Vite
- Tailwind CSS (PostCSS)
- Node.js / npm

## Getting Started

### Prerequisites

- Node.js (16+) and npm

### Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

```
WebDay05-UI-Practice-with-Tailwind-CDN/
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Products.jsx
│       ├── ProductCard.jsx
│       └── Footer.jsx
└── README.md
```

## Notes & Tips

- Tailwind utilities are built at dev/build time by Vite + PostCSS. If you add new classes and they don't appear, restart the dev server.
- Use the responsive utilities (`sm:`, `md:`, `lg:`) to tune layouts.

## Resources

- Tailwind CSS docs: https://tailwindcss.com/docs
- Vite docs: https://vitejs.dev/

---

**Updated**: June 2026
