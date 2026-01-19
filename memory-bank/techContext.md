# Tech Context

## Technologies
- **React**: 18+
- **Vite**: Latest
- **Tailwind CSS**: 3+
- **Framer Motion**: For animations and transitions.
- **Node.js**: v24.6.0 (detected environment)
- **Package Manager**: npm

## Development Setup
- **Commands**:
  - `npm run dev`: Start development server.
  - `npm run build`: Build for production.
  - `npm run preview`: Preview production build.

## Constraints
- **Hosting**: GitHub Pages requires a static build.
- **Routing**: `react-router-dom` with `HashRouter` is often safer for GitHub Pages to avoid 404s on refresh, though `BrowserRouter` can work with a 404.html hack. We will use standard routing.
