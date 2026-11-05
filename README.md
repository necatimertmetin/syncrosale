# SyncroSale: marketing website

Public website of [SyncroSale](https://syncrosale.com), a web platform that helps Amazon sellers manage listings, inventory, orders, pricing, shipping and profitability across marketplaces through the Amazon Selling Partner API (SP-API).

SyncroSale is a software platform operated by SESA Shipping LLC.

> This repository contains **only the marketing site** (landing page, features, legal pages, contact forms). The SyncroSale application itself lives in separate repositories.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/features` | Detailed description of what the platform does (see below) |
| `/pricing` | Early access plan |
| `/contact`, `/help`, `/security` | Contact, support and security disclosure forms |
| `/privacy`, `/cookie`, `/dpa` | Privacy Policy, Cookie Policy, Data Processing Addendum |

The site uses `HashRouter`, so in the browser every route is prefixed with `#`, for example `https://syncrosale.com/#/features`.

### Features page

The Features page documents the four areas of the product, each as its own section:

1. **Listing, Inventory & Order Management**
2. **Automated Pricing**
3. **Shipping Solutions**
4. **Analytics & Reporting**

Every section has an introduction, a **How it works** step strip and a grid of capability cards, with screenshots or illustrative visuals next to it.

**Every title has its own URL.** Opening the URL scrolls straight to that title and highlights it:

```
/#/features/automated-pricing                       -> a section
/#/features/automated-pricing/sole-seller-margin    -> a capability card
/#/features/shipping-solutions/step-warehouse-ships -> a "how it works" step
```

Slugs are generated from the English titles and are the same in every language. They live in [`src/pages/features/slugs.ts`](src/pages/features/slugs.ts). **If you rename a title, update its slug there as well**, otherwise links that were shared before will stop working.

## Content and translations

All copy is stored in locale files and loaded at runtime with `i18next`:

```
public/locales/en/common.json
public/locales/tr/common.json
```

Features page content is under `pages.features`:

- `sections.<key>.intro`, `sections.<key>.steps.sN` and `sections.<key>.items.iN` hold the text
- `visuals.*` holds the labels inside the illustrative visuals

The number of steps and cards per section is declared in [`src/pages/features/config.ts`](src/pages/features/config.ts) (`counts`). When you add or remove an item in the locale files, update `counts` and `slugs.ts` too.

### Keep the copy truthful

The Features page is reviewed by Amazon as part of the Selling Partner Appstore listing. Everything described there must be fully launched and available in the product. Do **not** add a capability to this page before it ships, and remove it if it is withdrawn.

## Tech stack

- React 19 and TypeScript, built with Vite
- MUI 7 (Material UI) with a custom light and dark theme (`src/theme.ts`)
- Framer Motion for animations
- React Router 7
- i18next with `react-i18next` and `i18next-http-backend`

## Getting started

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev        # development server at http://localhost:5174
npm run build      # type-check and production build into dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

## Project structure

```
public/
  locales/{en,tr}/common.json   All translatable copy
  images/                        Static images
src/
  components/                    Layout (header, footer) and animated components
  pages/
    Landing/                     Landing page and its card animations
    features/                    Features page
      Features.tsx               Page, sections, deep-link scrolling
      FeatureVisuals.tsx         Illustrative pricing, shipping and analytics visuals
      config.ts                  Section keys, icons, screenshots, item counts
      slugs.ts                   URL slugs for every title
    pricing/, contact/, legals/  Other pages
  providers/                     Theme (light/dark) and localization providers
  router/                        Route table and router
  theme.ts                       MUI themes
```

## Design notes

- Brand colors follow the SyncroSale app: orange as primary and teal as secondary, with Space Grotesk as the typeface. Light and dark modes are both supported and follow the theme toggle in the header.
- The numbers in the illustrative visuals on the Features page are examples only and are labeled "Illustrative example" in the UI.

## Deployment

`npm run build` writes the static site to `dist/`, which can be hosted on any static host. The repository also has a `gh-pages` branch.

## Security

Never commit API keys, tokens or passwords to this repository. To report a vulnerability in SyncroSale, use the security page at `/#/security`.
