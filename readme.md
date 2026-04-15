# Gaida CSS Framework

> A minimalist, mobile-first CSS foundation — small by design, built to extend.

Gaida provides just enough structure to start a project: a modern 12-column flexbox grid, sensible typography, form and button resets, and a set of utility helpers — all in a single compiled CSS file. It is intentionally lean so you can layer your own design system on top.

[![npm version](https://badge.fury.io/js/gaida.svg)](https://badge.fury.io/js/gaida)
[![npm downloads](https://img.shields.io/npm/dt/gaida.svg)](https://www.npmjs.com/package/gaida)

---

## Install

**npm**
```sh
npm install gaida
```

**yarn**
```sh
yarn add gaida
```

**CDN**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gaida@1.0.5/dist/gaida.min.css">
```

---

## Usage

Link the compiled CSS directly:
```html
<link rel="stylesheet" href="gaida.min.css">
```

Or import the SCSS source into your own stylesheet and override variables before the import:
```scss
// Override defaults before importing
$color-primary: #6200ea;
$font-family-sans-serif: "Inter", sans-serif;

@import "node_modules/gaida/src/gaida";
```

---

## Build Output

```
dist/
├── gaida.css       ← expanded (development)
└── gaida.min.css   ← compressed (production)

docs/css/
└── gaida.min.css   ← docs copy
```

---

## SCSS Architecture

```
src/
├── gaida.scss          ← entry point (imports only)
├── _Color.scss         ← color palette tokens
├── _Variables.scss     ← typography, spacing, breakpoints
├── _Base.scss          ← box-sizing, html/body defaults
├── _Grid.scss          ← 12-column flexbox responsive grid
├── _Typography.scss    ← h1–h6 scale, text utilities
├── _Button.scss        ← solid, outline, clear button variants
├── _Form.scss          ← inputs, textarea, select, label
├── _Table.scss         ← striped + hover table
├── _List.scss          ← ol / ul / dl resets
├── _Code.scss          ← inline code + pre blocks
├── _Blockquote.scss    ← bordered blockquote
├── _Divider.scss       ← hr styling
├── _Image.scss         ← responsive images (max-width: 100%)
├── _Link.scss          ← anchor color + hover
├── _Spacing.scss       ← global bottom-margin scale
└── _Utility.scss       ← clearfix, float helpers
```

All variables in `_Variables.scss` and `_Color.scss` use `!default`, so you can override any value before importing.

---

## Grid

Gaida uses a 12-column flexbox grid with five responsive breakpoints:

| Breakpoint | Class prefix | Width |
|------------|-------------|-------|
| Extra small | `.col-xs-*` | ≤ 480px |
| Small       | `.col-sm-*` | ≤ 600px |
| Medium      | `.col-md-*` | ≤ 840px |
| Large       | `.col-lg-*` | ≤ 960px |
| Extra large | `.col-xl-*` | ≤ 1280px |

```html
<div class="container grid-lg">
  <div class="grid">
    <div class="column col-6 col-md-12">Left</div>
    <div class="column col-6 col-md-12">Right</div>
  </div>
</div>
```

Use `.col-gapless` on `.grid` to remove gutters, `.col-oneline` to prevent wrapping.

---

## Browser Support

| Browser | Minimum version |
|---------|----------------|
| Chrome  | 90+ |
| Firefox | 90+ |
| Edge    | 90+ |
| Safari  | 14+ |
| iOS     | 14+ |

Internet Explorer is not supported.

---

## Development

### Requirements

- **Node.js** >= 18

### Setup

```sh
git clone https://github.com/dezudas/gaida.git
cd gaida
npm install
```

### Commands

| Command | Description |
|---------|-------------|
| `npm start` | Build, watch for changes, and serve |
| `npm run build` | Full build (clean → sass → autoprefixer) |
| `npm run sass` | Compile SCSS to CSS |
| `npm run autoprefixer` | Run PostCSS autoprefixer on dist |
| `npm run watch` | Watch `src/**/*.scss` and rebuild |
| `npm run serve` | Start Browser-sync dev server |
| `npm run clean` | Delete the `dist/` folder |

### Toolchain

| Tool | Version | Purpose |
|------|---------|---------|
| [Dart Sass](https://sass-lang.com/dart-sass) | ^1.99 | SCSS compilation |
| [PostCSS](https://postcss.org/) | ^8.5 | CSS transformation |
| [autoprefixer](https://github.com/postcss/autoprefixer) | ^10.5 | Vendor prefix injection |
| [browser-sync](https://browsersync.io/) | ^3.0 | Live reload dev server |
| [npm-run-all2](https://github.com/bcomnes/npm-run-all2) | ^8.0 | Parallel/sequential npm scripts |
| [onchange](https://github.com/Qard/onchange) | ^7.1 | File watcher |
| [rimraf](https://github.com/isaacs/rimraf) | ^6.1 | Cross-platform `rm -rf` |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-change`
3. Make your changes inside `src/`
4. Run `npm run build` to verify compilation
5. Submit a pull request

Please keep changes minimal and aligned with the framework's philosophy: small file size, sensible defaults, easy to override.

Report bugs or request features via [GitHub Issues](https://github.com/dezudas/gaida/issues).

---

## License

MIT © [Dijup Tuladhar](https://github.com/dezudas)

Maintained under [Semantic Versioning](https://semver.org/).
