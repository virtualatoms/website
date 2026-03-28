# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for the Virtual Atoms Lab (virtualatoms.org), a computational materials science research group at Imperial College London. Built with Hugo (static site generator) + Webpack (asset bundling).

## Commands

```bash
# Development (runs Hugo server + Webpack in watch mode concurrently)
npm start

# Production build (outputs to /public)
npm run build

# Individual steps
npm run start:hugo      # Hugo dev server only
npm run start:webpack   # Webpack watch only
npm run build:hugo      # Hugo production build
npm run build:webpack   # Webpack production build
```

Deployment is automated via GitHub Actions on push to `main` — it runs `npm run build` and deploys to GitHub Pages.

## Architecture

**Content** (`/content/*.md`) — Markdown source for each page. The site has: home (`_index.md`), research, papers, team, codes, join. Papers are manually maintained in `papers.md` by year.

**Templates** (`/layouts/`) — Hugo HTML templates. `_default/baseof.html` is the base layout (nav, fonts, asset links). `index.html` is the home page template which includes the Three.js canvas.

**Source assets** (`/src/`) — compiled by Webpack into `/static/assets/`:
- `app.js` — Three.js 3D visualization on the home page. Renders spherical harmonics as an animated 3D mesh with RGB shift and film grain post-processing effects.
- `app.css` — Tailwind CSS entry point with custom styles.

**Static files** (`/static/`) — copied as-is: team photos, research images, logo SVGs, `CNAME`.

**Config** — `config.toml` controls Hugo settings and nav menu. `tailwind.config.js` defines custom colors (`dark: #1A1929`, `light: #70727D`) and fonts (Work Sans, Eczar).
