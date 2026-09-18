<div align="center">

# RX Deck

**Your gateway to AI-powered presentation creation.**

![Built with](https://img.shields.io/badge/Built%20with-HTML5%2C%20CSS3%2C%20JavaScript-8A2BE2?style=for-the-badge)
![Dependencies](https://img.shields.io/badge/Dependencies-None-8A2BE2?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Blue--Violet-8A2BE2?style=for-the-badge)

</div>

---

## Overview

RX Deck is the official landing gateway for an **AI-powered presentation creation platform**. This is a lightweight, single-page site that introduces the brand with a cinematic dark UI, then hands visitors off to the real app with one clear call to action.

> **What is RX Deck?** An AI presentation creation platform. This repo contains only the landing/gateway page — the actual slide-building experience lives at the linked app.

---

## ✨ Features

- **Cinematic hero** — full-viewport intro with layered radial glows, grid lines, and an animated monogram
- **One clear CTA** — a single path that opens the real RX Deck app in a new tab, no distractions
- **Animated loader** — a branded load-in sequence before the page reveals itself
- **Scroll-reveal animations** — sections fade and rise into view as you scroll (IntersectionObserver)
- **Cursor-reactive glow** — a soft light that follows the pointer across the hero
- **Fully responsive** — tuned breakpoints at 950px and 620px
- **Accessible motion** — respects `prefers-reduced-motion` and disables animation automatically
- **Zero dependencies** — pure HTML, CSS and JavaScript, no frameworks, no build step

---

## 🧱 Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 — custom properties, gradients, `clamp()`, `svh` units |
| Behavior | Vanilla JavaScript (no libraries) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) & [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts |

---

## 📁 Project Structure

```
RX-Deck-Bio/
├── index.html   # Markup & page structure
├── style.css    # Design system, animations, responsive rules
├── script.js    # Loader, scroll-reveal, cursor glow, interactions
└── README.md    # You are here
```

---

## 🚀 Getting Started

No install, no build step — it's static.

```bash
# Option 1 — just open it
open index.html        # macOS
start index.html       # Windows

# Option 2 — serve it locally
python -m http.server 8000
# then visit http://localhost:8000
```

---

## ⚙️ Configuration

**Destination link.** The primary and secondary CTAs both point to the real RX Deck app:

```
https://untitled-481008835075.asia-southeast1.run.app
```

Update both `<a class="cta primary" ...>` links in `index.html` if that address changes.

**Color system.** All colors live as CSS custom properties in `style.css`:

| Variable | Value | Role |
|---|---|---|
| `--bg` | `#070707` | Base background |
| `--bg2` | `#0d0a0a` | Secondary background |
| `--red` | `#7b16d8` | Primary accent — deep blue-violet |
| `--red2` | `#a13bff` | Bright accent — vivid violet |
| `--gold` | `#b16df0` | Secondary highlight — orchid-violet |
| `--gold2` | `#d9b1ff` | Pale highlight — lavender |
| `--text` | `#f7f4ee` | Primary text |
| `--muted` | `#a6a09a` | Secondary text |

> Note: `--red` / `--gold` are legacy names from the original palette — the *values* are the current blue-violet theme. Safe to rename for clarity; nothing depends on the names themselves.

---

## 📄 License

No license has been specified yet. Until one is added, all rights are reserved by default — drop in a `LICENSE` file (e.g. MIT) if you plan to share the source.

---

<div align="center">

Made with 💜

</div>
