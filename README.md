# Elevate Home

Elevate Home is a Vite + React + TypeScript storefront for adjustable manual desks. The app presents a product catalog, individual product detail pages, comparison content, customer reviews, and a persistent WhatsApp chat button for direct sales inquiries.

## Features

- Responsive landing page with hero, product grid, comparison table, reviews, process, and feature sections.
- Product detail pages with image gallery, pricing, specifications, components, and customization notes.
- Floating WhatsApp button available across the site.
- WhatsApp purchase flow for each product.
- Built with React Router, TanStack Query, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- Vite
- React 18
- TypeScript
- React Router
- TanStack Query
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Project Structure

- `src/pages` - route-level pages like the home page, product detail page, and 404 page.
- `src/components` - shared UI sections such as the navbar, hero, product grid, footer, and WhatsApp button.
- `src/data/products.ts` - product catalog and pricing data.
- `src/components/ui` - reusable UI primitives.

## Routes

- `/` - homepage with the full storefront experience.
- `/product/:id` - product detail page for an individual desk model.
- `*` - fallback 404 page.

## WhatsApp Contact

The floating button and product pages link to WhatsApp chat for sales inquiries. The configured number is `+880 1630-411689`.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or bun

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

### Run tests

```bash
npm run test
```

## Available Scripts

- `npm run dev` - start the Vite dev server.
- `npm run build` - create a production build.
- `npm run build:dev` - create a development-mode build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.
- `npm run test` - run Vitest once.
- `npm run test:watch` - run Vitest in watch mode.

## Product Data

The catalog currently includes four desk models:

- M1 Go
- M1
- M1 Pro
- Manual Premium

Each model includes pricing, image assets, features, specifications, and a WhatsApp link for direct inquiry.

## Notes

- The site uses local static assets for product images.
- Product and contact details are defined in `src/data/products.ts`.
- The WhatsApp button is mounted globally in `src/App.tsx`, so it appears on every page.
