# Sentinel Global Website — Developer Handover

Prepared: 13 August 2026  
Current live website: https://sentinel-global-website.ravinder-sharmain.chatgpt.site  
Source snapshot: `20aa682722899843b71f38889a0f47d15b50e15e`  
Approved tagline: **Delivering Healthcare Continuity Across Markets.**

## What this package contains

This is the complete, portable source package for the current Sentinel website. It includes:

- all application source code;
- all visible website copy and microcopy;
- all logos, photography, leadership portraits, diagrams, maps and icons;
- locally bundled copies of the stock images that the live source previously loaded from external URLs;
- the exact dependency lockfile;
- fonts and styling;
- configuration, scripts and tests;
- a tested production build in `dist/`;
- route and asset registers; and
- SHA-256 checksums for integrity verification.

`node_modules`, Git history, runtime caches, local logs and credentials are deliberately excluded. They are not deployable assets and would make the package unsafe and unnecessarily large.

## Important deployment facts

This is not a conventional static HTML or WordPress site. It is a React application built with Vinext/Vite and compiled to a Cloudflare Worker-compatible server artifact.

Required source-build environment:

- Node.js 22.13 or later
- npm
- Linux for the supplied build/install helper scripts

Core versions are locked in `package-lock.json`:

- React 19.2.6
- Next compatibility layer 16.2.6
- Vinext 0.0.50
- Vite 8.0.13
- Wrangler 4.92.0

A basic shared-hosting or cPanel account will not run this code as-is. The hosting company must use a Worker-compatible deployment, a suitable Node/serverless runtime after adaptation, or rebuild the project for its chosen platform.

## Build and test

From the package root:

```bash
npm ci
npm test
```

Useful commands:

```bash
npm run dev
npm run build
npm run start
npm run validate:artifact
npm run lint
```

The prebuilt artifact is in `dist/`. Rebuild it after any source, copy, styling or asset change.

## Hosting routes

### Cloudflare Worker-compatible hosting

This is the lowest-friction route because the current production artifact is already Worker-compatible. The deployer must publish the server entry and static assets produced under `dist/`, while retaining the generated hosting manifest and asset bindings.

### ChatGPT Sites

`.openai/hosting.json` identifies the existing Sentinel Sites project. It is not a password or secret, but it does not grant access. Reusing the existing project requires the owner to authorise the development company. If the company creates a separate Sites project, it must replace that project identity through the supported Sites workflow.

### Vercel, AWS, Azure or conventional Node hosting

Do not assume direct compatibility. The company must adapt the build and deployment configuration for its target runtime and then test all 17 routes. The supplied code is application source, not a generic static export.

## Directory map

- `app/` — page rendering, all main website content, metadata and global styling
- `app/site-data.ts` — structured copy for 13 interior routes
- `app/site.tsx` — homepage, shared header/footer, special pages, leadership, contact and legal content
- `app/layout.tsx` — title, metadata, favicon and fonts
- `public/images/` — all production images, logos, portraits, maps and diagrams
- `public/images/external/` — locally bundled stock-photo files that were previously remote dependencies
- `.vinext/fonts/` — bundled Geist font files
- `dist/` — tested production build
- `scripts/` — controlled install, build and validation scripts
- `tests/` — rendered-metadata test
- `ROUTE_INVENTORY.csv` — route and content-source register
- `ASSET_REGISTER.csv` — media inventory with size and checksum
- `CHECKSUMS_SHA256.txt` — package integrity list

## Content and branding controls

Brand palette:

- Sentinel Ink: `#17213A`
- Signal Orange: `#F15A2A`
- Porcelain: `#F8F5EF`

Approved corporate tagline:

> Delivering Healthcare Continuity Across Markets.

The content is embedded in the application source. No CMS is currently connected.

## Items the development company must complete before a new public launch

1. **Enquiry form:** the contact form is a prototype and currently submits by `GET` back to `/contact`; it does not email or store enquiries. Connect it to an approved email, CRM or secure form service and add server-side validation, spam protection, consent logging and success/error states.
2. **Privacy and terms:** the legal pages expressly contain draft language and “final terms required” wording. Obtain UAE-qualified legal review before relying on them.
3. **Analytics and consent:** no analytics platform or cookie-consent manager is configured in this package.
4. **SEO completion:** verify per-page metadata, canonical URLs, sitemap, robots rules, structured data and social preview images before switching the production domain.
5. **Domain and email:** point DNS only after the replacement deployment has passed route, form, SSL and redirect testing. Keep `info@sentinelmedical.com` routing independently managed.
6. **Image rights:** the package includes the image files used by the site. The owner and development company remain responsible for retaining the relevant stock licences, attribution records and permissions. Possession of a file is not proof of a commercial-use licence.
7. **Accessibility and performance:** complete formal WCAG, browser, device and performance audits after any platform adaptation.

## Security and data

- No passwords, API keys, authentication tokens or `.env` files are included.
- No database is currently used; D1 and R2 bindings are null.
- The website is currently public and does not require user authentication.
- Do not commit production credentials to this source package. Configure secrets in the target hosting platform.

## Handover acceptance checklist

The development company should confirm in writing that it has:

- installed dependencies from the lockfile without changing versions;
- produced a clean production build;
- verified all 17 routes;
- confirmed all local media loads without external hotlinking;
- connected and tested the enquiry form;
- completed legal, privacy, security and accessibility reviews;
- configured SSL, DNS, redirects, monitoring and backups; and
- supplied the owner with repository, hosting, domain and analytics access.

