# Siddharth's Portfolio - Project Context & Guidelines

## Overview
This is a modern, high-performance portfolio website built with React, TypeScript, GSAP (for scroll animations), and Three.js / React Three Fiber (for 3D elements).

## Tech Stack
- **Framework:** React + TypeScript
- **Styling:** Vanilla CSS (located in `src/components/styles/`)
- **Animations:** GSAP (ScrollTrigger, ScrollSmoother, `@gsap/react`)
- **3D Graphics:** Three.js via `@react-three/fiber`
- **Icons:** `react-icons`

## Project Structure
- `src/components/`: Contains all React components (`Navbar.tsx`, `Work.tsx`, `Contact.tsx`, `TechStack.tsx`, etc.).
- `src/components/styles/`: Contains all component-specific CSS files.
- `src/index.css`: Global styles, CSS variables, and font imports.
- `public/images/`: Static assets, including the PNG logos used for the 3D tech stack.

## Design System & Aesthetics
- **Typography:** The site strictly uses the `"Geist", sans-serif` font globally. Do not introduce fallback fonts or override this on anchors/buttons without explicit reason.
- **Colors:**
  - Background: `var(--backgroundColor)` (Deep dark `#0b080c`)
  - Accent: `var(--accentColor)` (Vibrant purple `#c2a4ff` or `#9d4edd`)
- **UI Feel:** Premium, glassmorphism, dynamic micro-animations (hover glows, smooth transitions), and dark mode by default.
- **Buttons:** Buttons (like the Resume button) use high-contrast pills with subtle drop shadows and hover scale/glow effects.

## Crucial Implementation Details (Do NOT break these!)
1. **Tech Stack 3D Spheres (`TechStack.tsx`)**: 
   - We use `.png` images for textures (e.g., `/images/python.png`), NOT `.svg`. Three.js WebGL struggles to map SVGs without native dimensions to spheres, causing them to render pitch black. Do not revert to SVGs.
   - The material assignment uses `props.materialIndex` to guarantee stable rendering on React state updates. Do not use `Math.random()` inside the `.map()` render loop or the spheres will flicker!
2. **GSAP Animations**:
   - ScrollSmoother and ScrollTrigger handle the horizontal pinning of the `Work` and `Career` sections. Be extremely careful when modifying paddings, margins, or wrapper divs in these components, as it can break the `translateX` calculations in the `useGSAP` hooks.
3. **Links & Contact**: 
   - All email links should point to `siddharth.h@itjobinbox.com`.
   - The Resume button is centered at the bottom of the screen with a fixed position.

## Workflow Commands
- Start dev server: `npm run dev` (or `npm start` depending on `package.json`).
- Deploy: We deploy continuously via pushing to the `main` branch on GitHub (`git add . && git commit -m "..." && git push`). Vercel/Netlify auto-builds it.
