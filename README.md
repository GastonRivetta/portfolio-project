# Portfolio Website — Gaston Rivetta

A clean, modern portfolio website with smooth animations and responsive design.

## Project Structure

```
portfolio-project/
├── index.html                   # Main portfolio page
├── css/
│   ├── styles.css               # Global styles (nav, hero, grid, cards)
│   └── project-page.css         # Case-study / project detail pages
├── js/
│   └── script.js                # Smooth scroll, fade-in, active nav
├── projects/
│   └── hunyuan-taiji.html       # Hunyuan Taiji case study
└── images/
    └── (all project images and GIFs)
```

## Features

- **Sticky Navigation** — stays at the top while scrolling, with active-link highlighting
- **Smooth Scrolling** — animated scroll to sections
- **Fade-in Animations** — project cards animate into view (static images only; GIFs stay visible so they play immediately)
- **GIF-safe hover** — GIF cards lift via `top` instead of `transform` to avoid pausing animation playback in Chrome/Safari
- **Responsive Design** — works on all screen sizes
- **Hover Overlays** — project title, description, and tags slide up on hover
- **Project Detail Pages** — case-study layout with panels, wireframe row, and social grid

## Setup

1. Place all images in the `images/` folder
2. Open `index.html` in a web browser (or serve with a local server for iframe content)

## Customization

### Colors
Edit `css/styles.css`:
- Primary gradient: `#667eea` → `#764ba2`
- Skill pill color: `#667eea`

### Adding a Project Card
Copy any `<div class="project-card">` block in `index.html` and update the `src`, title, description, and tags.

### Adding a Project Page
Duplicate `projects/hunyuan-taiji.html`, update paths and content, then link the card in `index.html` by wrapping it in:
```html
<a class="project-card-link" href="projects/your-page.html">
  <!-- project card -->
</a>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and customize for your personal portfolio.
