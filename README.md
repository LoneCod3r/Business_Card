# Business Card — Mihaela Koseva

A digital business card for **Mihaela Koseva**, Software Engineer (Applied AI · Machine Learning · Data).

**Live:** https://lonecod3r.github.io/Business_Card/

## Overview

A small static site styled as a flippable physical business card, in a dark, restrained tech aesthetic.

- **Front** — name, role, specialization, a short personal statement, and contact links (Email, LinkedIn, GitHub).
- **Back** — a QR code linking to [dreamerol.github.io/MIHAELA-KOSEVA](https://dreamerol.github.io/MIHAELA-KOSEVA/).
- The icon in the bottom-right corner flips the card between its two faces with a CSS 3D transform.

## Structure

```
.
├── index.html    # markup only
├── styles.css    # all styling, including the background artwork embedded as a data URI
├── script.js     # QR code generation + flip interaction
├── favicon.svg   # browser-tab icon (MK monogram)
└── README.md
```

No build step, no framework, no dependencies to install — it's plain HTML/CSS/JS.

## Tech

- Fonts: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) and [Inter](https://fonts.google.com/specimen/Inter), loaded from Google Fonts.
- QR code generated client-side with [qrcodejs](https://github.com/davidshimjs/qrcodejs), loaded from cdnjs.
- Markup, styling, and behavior are separated (`index.html` / `styles.css` / `script.js`); the flip button is wired up via `addEventListener`, not inline `onclick`.
- Respects `prefers-reduced-motion` — the flip transition is disabled when the visitor has that preference set.
- Semantic HTML, visible keyboard focus states, and `aria-label`s on the icon-only contact links.

## Running locally

Clone the repo and open `index.html` directly in a browser — no server required.

```
git clone https://github.com/LoneCod3r/Business_Card.git
cd Business_Card
```

## Updating the content

- **Name / role / statement / contact links** — edit the markup directly in `index.html`.
- **QR code target** — change the `text` value passed to `QRCode(...)` in `script.js`.
- **Colors / type / spacing** — all in `styles.css`, driven by the CSS custom properties at the top of the file (`--bg`, `--panel`, `--text`, `--blue`, etc.).

## Deployment

Hosted with GitHub Pages from the `main` branch, serving from the repository root. Any push to `main` redeploys automatically.
