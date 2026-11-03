# Implementation Plan: Heliora landing page (portfolio concept)

## Overview
Build the single-page Polish landing site described in [SPEC.md](../SPEC.md): Vite + React 18 + TypeScript, plain CSS tokens, all copy in `src/content/pl.ts`. Work is sliced so each task leaves a buildable, viewable page. Tasks are tracked in [todo.md](todo.md).

## Decisions (defaults used for the spec's open questions)
| # | Question | Default | Reversible? |
|---|----------|---------|-------------|
| 1 | Photos / logo | Unsplash stock photos and a self-drawn vector logo for the fictional brand. | Yes |
| 2 | Form service | Web3Forms (free, no backend, key is public by design). Key read from `VITE_WEB3FORMS_KEY`; account owner is the client. Until a key exists, the form runs in a clearly marked demo mode. | Yes |
| 3 | Social / map | No social link. Map: plain "Wyznacz trasę" link to Google Maps, no embed, so no tracker and no consent banner. | Yes |
| 4 | Main CTA | Both in the hero: "Wyślij zapytanie" (primary) and "Zadzwoń" (secondary). On mobile, a sticky tap-to-call button. | Yes |
| 5 | Hosting / DNS | Deferred. Build is host-agnostic static output; `/ship` decides later. | Yes |

New dependencies (needed, within spec): `vite`, `react`, `react-dom`, `typescript`, `vitest`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`, `eslint` + TS/React plugins. Nothing else without asking.

## Task List
See [todo.md](todo.md) for acceptance criteria. Order:

### Phase 1: Foundation
- [x] T1 Scaffold Vite/React/TS, scripts, lint, test runner
- [x] T2 Design tokens, base CSS, content module, Header + Hero (first viewable page)

### Checkpoint: Foundation
- [ ] build, lint, test pass; page renders at 375 and 1440 px

### Phase 2: Content sections
- [x] T3 Services bento grid (6 cards)
- [x] T4 Czyste Powietrze + Salon wystawowy
- [x] T5 Cennik serwisu table

### Checkpoint: Content
- [ ] All copy, prices and phone numbers match SPEC.md; keyboard nav works

### Phase 3: Conversion
- [x] T6 ContactForm with validation, consent, honeypot, states (TDD)
- [x] T7 Contacts block, Footer, sticky mobile call button

### Checkpoint: Conversion
- [ ] Form tests pass; form submits in demo mode and with a real key

### Phase 4: Launch quality
- [ ] T8 SEO: meta, OG, LocalBusiness JSON-LD, robots, sitemap, favicon
- [ ] T9 Performance + accessibility pass (Lighthouse targets from SPEC)
- [ ] T10 Privacy policy page/section and deploy notes (redirect map from old URLs)

### Checkpoint: Complete
- [ ] All SPEC success criteria met; ready for `/review` and `/ship`

> **Showcase scope (agreed):** T8-T10 (SEO, performance pass, privacy policy, deploy notes) are deferred until the owner approves the design.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| No real photos yet | Med | Placeholders behind one asset swap point; Lighthouse image budget checked once real files land |
| Form key/account not ready | Med | Demo mode, env-var key, test against real inbox before launch |
| Prices or claims drift from current site | High | Single source `pl.ts`; T5/T7 acceptance criteria compare against SPEC values |
| Old SEO sub-pages lose rankings | Med | Redirect map delivered in T10 |

## Open Questions (still need the client)
- None: this is now a portfolio concept with a fictional brand
- Web3Forms account owner / access key
- Hosting choice and DNS owner
- Privacy policy text (legal wording must come from the client)
