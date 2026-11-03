# Tasks: Heliora landing page (portfolio concept)

Verification for every task: `npm run build`, `npm run lint`, `npm test` pass (once T1 lands), one small commit per task.

## Phase 1: Foundation

### T1: Scaffold project
**Description:** Vite + React 18 + TypeScript app with scripts from SPEC (dev, build, preview, test, lint), Vitest + Testing Library, ESLint.
**Acceptance criteria:**
- [ ] `npm run dev` serves a blank page; `npm run build` outputs `dist/`
- [ ] `npm test` runs and passes one smoke test
- [ ] `.gitignore` covers `node_modules`, `dist`, `.env*`
**Dependencies:** None | **Files:** `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx` | **Scope:** Medium

### T2: Tokens, content module, Header + Hero
**Description:** Warm-monochrome tokens with `#006837` accent, base CSS, `pl.ts` with all contacts, header with anchor nav and phone button, hero with two CTAs and placeholder image.
**Acceptance criteria:**
- [ ] Tokens in `src/styles/tokens.css`; no hard-coded colors elsewhere
- [ ] Nav links (Usługi, Salon, Cennik, Kontakt) scroll to section ids
- [ ] `tel:` link uses the office number from `pl.ts`; polish diacritics correct
- [ ] No horizontal scroll at 360 px
**Dependencies:** T1 | **Files:** `src/content/pl.ts`, `src/styles/tokens.css`, `src/styles/base.css`, `src/components/Header.tsx`, `src/components/Hero.tsx` | **Scope:** Medium

### Checkpoint: Foundation
- [ ] build, lint, test pass; visually checked at 375 and 1440 px

## Phase 2: Content sections

### T3: Services bento grid
**Acceptance criteria:**
- [ ] 6 cards from `pl.ts`: HVAC, rekuperacja, pompy ciepła, fotowoltaika, kostka i tarasy, nadzór budowlany
- [ ] Copy reused from current site, no invented claims
- [ ] Grid collapses to one column on mobile; cards are semantic `<article>`
**Dependencies:** T2 | **Files:** `Services.tsx`, `ServiceCard.tsx`, `pl.ts`, CSS | **Scope:** Small

### T4: Czyste Powietrze + Salon wystawowy
**Acceptance criteria:**
- [ ] Financing note, no amounts or guarantees invented
- [ ] Showroom: fictional address, hours (pn–pt 8:30–18:00, sb 10–14), photo placeholder with alt text, Google Maps link (no embed)
**Dependencies:** T2 | **Files:** `Financing.tsx`, `Showroom.tsx`, `pl.ts`, CSS | **Scope:** Small

### T5: Cennik serwisu
**Acceptance criteria:**
- [ ] Illustrative price table from `pl.ts` (air conditioning 1 / 2 / 3 units, each next, ventilation unit, heat pump)
- [ ] Accessible `<table>` with caption and headers; readable on mobile
**Dependencies:** T2 | **Files:** `Pricing.tsx`, `pl.ts`, CSS | **Scope:** Small

### Checkpoint: Content
- [ ] Every price, phone and email matches SPEC; keyboard-only navigation works

## Phase 3: Conversion

### T6: ContactForm (tests first)
**Acceptance criteria:**
- [ ] Fields: name*, email*, phone, service select*, message*, consent*, hidden honeypot
- [ ] Tests: required errors, invalid email, consent required, honeypot blocks send, success state, error state
- [ ] Posts to Web3Forms using `VITE_WEB3FORMS_KEY`; without a key shows a demo-mode notice and sends nothing
- [ ] Errors announced to screen readers (`aria-live`), labels bound to inputs
**Dependencies:** T2 | **Files:** `ContactForm.tsx`, `ContactForm.test.tsx`, `lib/submit.ts`, `.env.example`, CSS | **Scope:** Medium

### T7: Contacts, Footer, sticky call button
**Acceptance criteria:**
- [ ] Contacts: office plus two fictional named contacts, all from `pl.ts`; hours
- [ ] Footer: © Heliora, concept-project note, link to privacy policy
- [ ] Sticky tap-to-call visible on mobile only, does not cover form fields
**Dependencies:** T2 | **Files:** `Contacts.tsx`, `Footer.tsx`, `StickyCall.tsx`, `pl.ts`, CSS | **Scope:** Medium

### Checkpoint: Conversion
- [ ] Form tests pass; demo-mode submit works; manual check at 375 px

## Phase 4: Launch quality

### T8: SEO
**Acceptance criteria:**
- [ ] Polish `<title>`, description, OG tags, `lang="pl"`
- [ ] LocalBusiness JSON-LD valid with real address and phones
- [ ] `public/robots.txt`, `sitemap.xml`, favicon, OG image placeholder
**Dependencies:** T7 | **Files:** `index.html`, `public/*` | **Scope:** Small

### T9: Performance and accessibility pass
**Acceptance criteria:**
- [ ] Lighthouse mobile: Perf >= 90, A11y >= 95, SEO >= 95
- [ ] LCP < 2.5 s, CLS < 0.1; WCAG AA contrast; visible focus states
- [ ] Use `/webperf` and the accessibility checklist
**Dependencies:** T8 | **Scope:** Medium

### T10: Privacy policy and deploy notes
**Acceptance criteria:**
- [ ] Privacy policy section/page with client-supplied text (placeholder clearly marked until supplied)
- [ ] `tasks/deploy.md` with old-URL redirect map and host-agnostic steps
**Dependencies:** T8 | **Files:** `Privacy.tsx`, `tasks/deploy.md` | **Scope:** Small

### Checkpoint: Complete
- [ ] All SPEC success criteria met; `/review` clean; ready for `/ship`
