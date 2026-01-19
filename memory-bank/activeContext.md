# Active Context

## Current Focus
Preparing for deployment of the new interactive design.

## Recent Changes
- **Content Update**:
  - **Research Page**: Updated the "Align Chronicles" link to `https://vinayprabhu.github.io/alignchronicles/archive/` as per user request.
  - Elaborated on the "Pivot to Safety" narrative on the Home page.
- **Interactive Design**: Integrated `framer-motion` to add life and motion to the site.
- **New Components**:
  - `AnimatedBackground`: A subtle, continuously moving background with floating orbs.
  - `FadeIn`: A wrapper for scroll-triggered entrance animations.
- **Page Enhancements**:
  - **Home**: Staggered text reveals, mission section fade-ins, and hover effects on images. Removed card container from "Pivot to Safety" text for a cleaner, balanced layout.
  - **About**: Staggered grid entrance for team cards with interactive hover states.
  - **Research**: Created a dedicated page listing publications. Elaborated the content to frame the research (Adversarial Robustness, Dataset Auditing) as the "engineering backbone" of the company's educational products, and fixed alignment issues for a cohesive layout.
- **Infrastructure**:
  - Configured GitHub Actions workflow for automated deployment to GitHub Pages.
  - Updated `CNAME` to `labs.hal51.ai`.
  - Fixed GitHub Actions workflow trigger to listen to `main` branch instead of `master`.
  - Rewrote GitHub Actions workflow to use `peaceiris/actions-gh-pages` and Node.js 24 to resolve deployment issues.
- **Assets**: Created and linked a custom SVG favicon (Hexagon "H" design) to match the dark/cyan theme.

## Next Steps
1.  Verify responsiveness across devices (basic check done).
2.  Push changes to `main` to trigger the first deployment.

## Active Decisions
- **Design Language**: Shifted from generic corporate light theme to a "Dark Mode" tech-forward aesthetic to align with the product (LemurBox) and the AI Safety mission.
- **Glassmorphism**: Used semi-transparent backgrounds with backdrop blur for containers to create depth.
- **Animation Strategy**: Used `framer-motion` for declarative, performant animations. Prioritized subtle, smooth motion (opacity, transform) over flashy effects to maintain professional credibility.
