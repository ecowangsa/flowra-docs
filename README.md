# Flowra Docs

[![Docs CI](https://github.com/ecowangsa/flowra-docs/actions/workflows/docs-ci.yml/badge.svg)](https://github.com/ecowangsa/flowra-docs/actions/workflows/docs-ci.yml)

Flowra Docs is the official documentation site for the Flowra CLI and framework. It explains how Flowra structures modular Express applications, how to scaffold projects with the CLI, and how to ship production-ready APIs through real examples. The site is published in English and Indonesian.

## What This Repo Provides

- Complete documentation for the Flowra CLI and framework
- Step-by-step guides for building APIs and modules
- Production examples (including auth and file uploads)
- A full Docusaurus site with a custom UI theme

## Requirements

- Node.js `>= 20`
- npm `>= 9`

## Quickstart

1. Install dependencies.

```bash
npm install
```

2. Start the dev server.

```bash
npm run start
```

## Scripts

- `npm run start` – Run the dev server with hot reload.
- `npm run build` – Build the production site.
- `npm run serve` – Serve the production build locally.
- `npm run typecheck` – Run TypeScript checks.
- `npm run write-translations` – Regenerate translation files.

## Localization

- Default locale: `en`
- Additional locale: `id`
- Translated docs: `i18n/id/docusaurus-plugin-content-docs/current/`
- UI strings: `i18n/id/code.json` and `i18n/id/docusaurus-theme-classic/`

When you add new UI strings, run:

```bash
npm run write-translations
```

Then translate the generated files in `i18n/id/`.

## Key Paths

- Docs content: `docs/`
- Sidebars: `sidebars.ts`, `sidebars.id.ts`
- Homepage + UI: `src/pages/`, `src/components/`, `src/css/`
- Static assets: `static/` (includes `CNAME` for custom domains)

## Deploy

The site is a static build, so you can deploy it to any static host such as GitHub Pages, Vercel, or Netlify.

## Contributing

1. Update docs or UI.
2. Run `npm run build` and `npm run typecheck`.
3. Open a PR with a clear summary and screenshots for UI changes.
