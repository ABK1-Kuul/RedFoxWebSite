# RedFox Website

A marketing site for the RedFox cybersecurity awareness platform built with React, TanStack Start, and Tailwind CSS.

## Overview

This repository contains a statically rendered/reactively enhanced website with server-side rendering support via TanStack Start. It serves as a branded product site for RedFox, including pages for Home, Platform, Solutions, Resources, Pricing, About, and Contact.

## Key Features

- React + TypeScript front-end
- TanStack Start server-side rendering and routing
- File-based routing under `src/routes`
- Tailwind CSS v4 with custom theme variables
- Responsive navigation and page layouts
- Custom error handling and SSR error normalization

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack React Router
- TanStack Start
- Radix UI primitives
- React Query
- `@lovable.dev/vite-tanstack-config`

## Project Structure

- `bunfig.toml` - package release guard configuration for installs
- `package.json` - project scripts and dependencies
- `vite.config.ts` - Vite configuration via Lovable Dev plugin
- `src/routes/__root.tsx` - application shell and root route
- `src/routes/index.tsx` - homepage route
- `src/routes/about.tsx` - about page route
- `src/components/SiteNav.tsx` - top navigation bar and mobile menu
- `src/server.ts` - SSR entrypoint and error normalization wrapper
- `src/start.ts` - TanStack Start middleware configuration
- `src/styles.css` - Tailwind design system and theme definitions

## Routes

The app uses file-based routes located in `src/routes`:

- `/` - Home
- `/platform` - Platform
- `/solutions` - Solutions
- `/resources` - Resources
- `/pricing` - Pricing
- `/about` - About
- `/contact` - Contact

> Route files are generated automatically by TanStack Start routing. Do not create Next.js/Remix-style directories like `src/pages/` or `app/layout.tsx`.

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Linting and Formatting

Run ESLint:

```bash
npm run lint
```

Format source files:

```bash
npm run format
```

## Notes

- `@lovable.dev/vite-tanstack-config` already configures React, Tailwind, Nitro, and path aliases. Avoid manually duplicating those plugins in `vite.config.ts`.
- The app uses a root error boundary in `src/routes/__root.tsx` and server-side error handling in `src/server.ts`.
- Assets and static styles are loaded through `src/styles.css`, `public/redfox-styles.css`, and the Vite asset pipeline.

## Useful Files

- `src/router.tsx` - router creation with React Query context
- `src/routeTree.gen.ts` - generated route tree for routing configuration
- `src/lib/error-capture.ts` - SSR error capture utility
- `src/lib/error-page.ts` - fallback HTML page for fatal errors

## License

This repository does not include an explicit license file.
