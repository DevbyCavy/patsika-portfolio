# Patsika Media House

Portfolio website for Patsika Media House — a design agency working across
branding, 3D modeling, motion graphics, UI/UX & product design, graphic
design, and video editing.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

- `src/app` — routes (home, services, work, about, contact)
- `src/components` — shared UI and page sections
- `src/lib/site-config.ts` — services, work, and site content
- `src/lib/fonts.ts` — font setup (Poppins, Montserrat; Archivo Black stands
  in for the licensed Akira Expanded display face until those files are
  available — see the comment in that file for how to swap it in)
- `public/brand` — logo assets (cropped to their bounding box)
- `public/work` — optimized images/video used on the Work page

Raw, full-resolution source assets live in `assets/Resources` locally and
are intentionally excluded from git (see `.gitignore`) — the web-optimized
copies used by the site live in `public/`.

## Build

```bash
npm run build
```
