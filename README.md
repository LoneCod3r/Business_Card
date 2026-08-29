# Business Card — Mihaela Koseva

A digital business card for Mihaela Koseva, Software Engineer (Applied AI · Machine Learning · Data).

**Live:** https://lonecod3r.github.io/Business_Card/

## What it is

A single self-contained HTML page styled as a flippable physical business card:

- **Front** — name, role, specialization, a short personal statement, and contact links (Email, LinkedIn, GitHub).
- **Back** — a QR code linking to [dreamerol.github.io/MIHAELA-KOSEVA](https://dreamerol.github.io/MIHAELA-KOSEVA/).
- Click the icon in the bottom-right corner of the card to flip between the two sides (CSS 3D transform).

## Tech

- Plain HTML/CSS/JS — no build step, no framework.
- Fonts: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) and [Inter](https://fonts.google.com/specimen/Inter), loaded from Google Fonts.
- QR code generated client-side with [qrcodejs](https://github.com/davidshimjs/qrcodejs) (loaded from cdnjs).
- The background artwork and portrait treatment are embedded directly in the page as data URIs, so the whole card is a single deployable file (`index.html`).
- Respects `prefers-reduced-motion` (the flip transition is disabled when requested).

## Running locally

Open `index.html` in any browser — no server or install required.

## Deployment

Hosted with GitHub Pages from the `main` branch, serving `index.html` at the repository root.
