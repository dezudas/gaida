# Project Context & AI Guidelines (Gaida CSS Framework)

This document provides architectural context, rules, and rules-of-engagement for AI assistants and developers contributing to the Gaida CSS framework.

## 1. Core Philosophy
Gaida is a minimalist, mobile-first CSS framework designed around a scalable, modern SCSS architecture. It follows a strict token-driven approach rather than using arbitrary magic numbers or values.

### Key Tenets:
- **Token-first**: Colors, spacing, typography, and breakpoints must originate from the `tokens/` layer.
- **Flat Specificity**: One class = one job. Deep nesting (> 2 levels) is strictly forbidden to ensure styles remain predictable.
- **Modern Sass**: We strictly use `@use` and `@forward` modules instead of the deprecated `@import`. Every partial is properly namespaced.
- **CSS Custom Properties**: Design tokens are exposed to `:root` to allow frictionless light/dark mode toggling and runtime overrides. 

---

## 2. Architecture & File Structure
The `src/` directory is split into 7 distinct layers. When creating or modifying code, place it in the correct layer:

1. **`tokens/` (The Source of Truth)**
   - Contains ONLY structural variables, scales, and maps (`_color.scss`, `_spacing.scss`, `_typography.scss`).
   - Exposes these values globally to `:root` as CSS generic custom properties (e.g. `--gd-color-primary`).
2. **`mixins/` (The Toolkit)**
   - Pure Sass functions and mixins (`_functions.scss`, `_fluid-type.scss`, `_respond-to.scss`). 
   - Returns logic or formatting but emits NO actual styles until explicitly included.
3. **`base/` (The Reset)**
   - A minimalist, targeted reset (`_reset.scss`) and body typography normalization (`_typography.scss`). Sets the `html { font-size: 62.5%; }` trick to alias `1rem` to `10px`. 
4. **`layout/` (Structure)**
   - The structural foundations. Incorporates the 12-column CSS Grid (`_grid.scss`) and container/section helpers (`_container.scss`).
5. **`components/` (UI Blocks)**
   - Encapsulated, reusable chunks of UI (`_button.scss`, `_card.scss`, `_form.scss`, `_nav.scss`, etc.). 
   - Components MUST NOT define their own structural logic metrics (do not use hardcoded hex codes, pixel spacings, etc.) — they must absorb behavior via tokens mapped properties.
6. **`utilities/` (Overrides)**
   - Programmatically generated helper classes for single-property changes (`.mt-4`, `.d-flex`). These classes should come last and inherit `!important` to definitively override components if necessary.
7. **`themes/` (Toggling)**
   - Logic bridging OS-level `prefers-color-scheme: dark` or programmatic `[data-theme="dark"]` swapping by simply redefining the `var(--gd-...)` values.

---

## 3. Strict Development Rules

### Rule #1: Use `rem` and Predefined Space Tokens, Never `px`
Because the root `html` element uses `62.5%`, `1rem` maps to `10px`.
* **WRONG:** `padding: 16px;`, `margin-top: 24px;`
* **RIGHT:** `padding: $space-4;`, `margin-top: var(--gd-space-6);`

### Rule #2: Do Not Hardcode Hex Colors in Components
Never assign raw colors inside `components/`, `layout/`, or `base/`.
* **WRONG:** `background-color: #003893;`
* **RIGHT:** `background-color: var(--gd-color-primary);`

### Rule #3: Always Handle Responsive Design with Named Breakpoints
Avoid creating ad-hoc media queries for random pixel widths. Rely on the `respond-to` helper and the tokens mapped to `$breakpoints`.
* **WRONG:** `@media (max-width: 768px) { ... }`
* **RIGHT:** `@include respond-to('md') { ... }`

### Rule #4: The `@use` Module Syntax
Any SCSS file that requires tokens or mixins MUST explicitly pull them at the top of the file before any CSS rules are executed. Example:
```scss
@use "../tokens" as *;
@use "../mixins" as *;
```

---

## 4. Current State & Testing Environment
- Entry point for compilation is `src/gaida.scss`.
- Use the HTML files located under `test/` (e.g. `test/index.html`) to validate styles in browser.
- Build sequence (`package.json`) uses Autoprefixer and Dart Sass. Run `npm run build` or `npm run watch` (if environment permits).
