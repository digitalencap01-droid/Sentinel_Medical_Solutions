# Routing proposal (not implemented)

Sketch only, per site brief 3.4 — ⚠️ NEEDS DECISION before any of this is built.
`react-router-dom` is already a dependency but currently unused; the whole site is one
scroll page (`src/App.tsx`) with hash-anchor navigation (`#about`, `#leadership`, etc.).

## Why consider this

Sections like Leadership Team, Our Clients and Advisory Board are the kind of content
people want to link to directly (a press mention linking straight to "Our Clients", a
board member's own bio page) and that benefit from their own indexable URL, `<title>`
and meta description. A hash anchor on a single giant page gives none of that.

## Proposed route map

```
/                     Home — Hero + the always-on-landing sections (About, Capabilities,
                      Portfolio, Consumables, Devices, Operations, Partnerships,
                      Why Sentinel, Contact). Roughly what SiteSections renders today,
                      minus the sections broken out below.
/leadership           Leadership Team — full LeadershipSection content, own <title>.
/advisory-board       Advisory Board — full AdvisoryBoardSection content.
/clients              Our Clients — full ClientsSection content.
/global-reach         Optional — Global Reach + Africa Strategy could also be split out;
                      lower priority than the three above since they're less
                      "linkable" as standalone pages.
```

Home would keep short teaser/summary versions of Leadership, Advisory Board and Clients
(a handful of cards + a "See all →" link to the dedicated route) rather than dropping
them from the landing page entirely — the brief wants these sections discoverable while
scrolling, not hidden behind navigation.

## What this touches if approved

- `App.tsx` becomes a `<BrowserRouter>` with a shared `<Header>`/`<Footer>` layout and
  an `<Outlet>` (or route-level composition) for the page body.
- `Sections.tsx` gets split along the new route boundaries — it's already organised as
  one component per logical section internally, so the split is mostly moving JSX
  between files, not rewriting it.
- Hash links in `content.ts` (`navLinks`) that point to now-separate routes need to
  become real paths (`/leadership` instead of `#leadership`); links to sections that
  stay on `/` keep working as hash anchors.
- Needs a hosting/server check: client-side routing requires the deploy target to
  rewrite unknown paths to `index.html` (standard for Vercel/Netlify, needs explicit
  config for some static hosts).

## Why this wasn't just done

This is a structural change to how the app is composed and deployed, not a content or
styling change — worth a deliberate go/no-go rather than folding it into this pass.
