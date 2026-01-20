# GEMINI.md

This file serves as a context guide for the `franjorub.github.io` project.

## Project Overview
This is a personal portfolio website built with modern, lightweight web technologies. It focuses on performance and standard compliance by using **Native Web Components** instead of a heavy frontend framework.

## Tech Stack
*   **Core:** Vanilla JavaScript (ES Modules).
*   **Components:** Native Web Components (Custom Elements v1) extending `HTMLElement`.
*   **Styling:** Tailwind CSS v4.
*   **Build Tool:** Vite.
*   **Linting & Formatting:** Biome.

## Architecture
*   **Entry Point:** `src/main.js` imports the global styles and all web components.
*   **Components:** Located in `src/components/`.
    *   **Naming Convention:** All custom elements are prefixed with `fr-` (e.g., `fr-hero`, `fr-about`).
    *   **Structure:** Components are defined as ES classes extending `HTMLElement`.
    *   **Rendering:** HTML structure is injected into `this.innerHTML` within the `connectedCallback()` lifecycle method.
    *   **Styling:** Uses Tailwind CSS utility classes directly in the HTML string, and component-specific CSS within a `<style>` block inside the component if needed.

## Building and Running

### Prerequisites
*   Node.js >= 24.10.0
*   npm >= 11.6.0

### Commands
*   **Install Dependencies:** `npm install`
*   **Development Server:** `npm run dev` (starts Vite dev server)
*   **Production Build:** `npm run build` (outputs to `dist/`)
*   **Preview Production Build:** `npm run preview`
*   **Lint:** `npm run lint` (uses Biome)
*   **Format:** `npm run format` (uses Biome)
*   **Check:** `npm run check` (Runs Biome check)

## Development Conventions

### Web Components
*   **Definition:** Always define the custom element at the end of the file using `customElements.define('fr-component-name', ClassName)`.
*   **Lifecycle:** Use `connectedCallback()` for initial rendering.
*   **Styles:**
    *   Prefer Tailwind CSS utility classes for layout and standard styling.
    *   Use `<style>` tags inside the component's innerHTML for complex animations or specific overrides that Tailwind doesn't easily cover.

### Code Style (Biome)
*   **Quotes:** Single quotes for JS, Double quotes for JSX/HTML attributes.
*   **Indentation:** 2 spaces.
*   **Semicolons:** Always.
*   **Trailing Commas:** ES5 compatible.

### File Structure
```
/
├── src/
│   ├── components/       # Individual Web Components (fr-*.js)
│   ├── styles/           # Global styles (main.css)
│   └── main.js           # App entry point
├── public/               # Static assets (images, robots.txt)
├── index.html            # Main HTML entry
├── vite.config.js        # Vite configuration
└── biome.json            # Linter/Formatter configuration
```
