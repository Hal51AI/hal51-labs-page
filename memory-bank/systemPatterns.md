# System Patterns

## Architecture
- **Frontend**: Single Page Application (SPA) using React.
- **Routing**: Client-side routing with `react-router-dom`.
- **Styling**: Utility-first CSS with Tailwind.
- **Animation**: `framer-motion` for declarative animations.
- **Build**: Vite for development and production bundling.
- **Hosting**: Static hosting on GitHub Pages.

## Directory Structure
```
src/
  assets/       # Images (Founders, LemurBox)
  components/   # Reusable UI components (Navbar, Footer, Card, AnimatedBackground)
  pages/        # Page views (Home, About)
  App.jsx       # Main application component & Router
  main.jsx      # Entry point
```

## Key Components
- **Navbar**: Navigation links (Home, About, Research).
- **Footer**: Copyright and social links.
- **AnimatedBackground**: Persistent, subtle background animation.
- **FadeIn**: Wrapper for consistent scroll-into-view animations.
