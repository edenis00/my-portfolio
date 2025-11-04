# My personal portfolio

A small personal portfolio starter built with React and Vite. The project includes a simple component structure and uses utility classes in components (Tailwind CSS-style classes are present in components; see notes below).

## Features

- Responsive Hero section and basic layout
- Component-based structure: `Navbar`, `Hero`, etc.
- Development-ready with Vite

## Tech stack

- React
- Vite
- Tailwind CSS (utility classes appear in components — optional; the project can also work with plain CSS)

## Getting started

1. Install dependencies: run `npm install` in the project root.
2. Start the dev server: run `npm run dev` and open the URL shown by Vite.
3. Build for production: run `npm run build`.
4. Preview production build locally: run `npm run preview`.

(Note: commands are shown inline above. Use PowerShell or your preferred terminal.)

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry
- `src/App.jsx` — top-level app
- `src/components/` — UI components (e.g. `Hero.jsx`, `Navbar.jsx`)
- `src/assets/` — images and static assets
- `public/` — static files served as-is

## Notes

- If you plan to use Tailwind CSS, follow the official Tailwind + Vite setup. If Tailwind is not installed, the utility classes in JSX will have no effect — convert to plain CSS or add Tailwind.
- For deployment consider Vercel, Netlify, or GitHub Pages.

