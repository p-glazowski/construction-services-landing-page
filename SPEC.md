# Spec: Heliora landing page (portfolio concept)

## Objective
A fast, modern, single-page Polish landing site for **Heliora**, a fictional HVAC and home-energy company in Warsaw: klimatyzacja, wentylacja and rekuperacja, pompy ciepła, fotowoltaika, kostka brukowa and tarasy, nadzór budowlany.

This is a portfolio piece. The company, people, phone numbers, e-mail addresses, address and prices are fictional. Photos are Unsplash stock images.

Primary goal of the design: a visitor sends an inquiry or taps to call within one scroll of deciding.

## Page structure
1. Header: logo, anchor nav (Usługi, Salon, Cennik, Kontakt), phone button; burger menu on phones
2. Hero: full-bleed photo, value proposition, two CTAs, service chips
3. Services bento grid: 6 cards with photos
4. Czyste Powietrze: financing note
5. Salon wystawowy: address, hours, photo, map link
6. Cennik serwisu: illustrative price table
7. Contact form (demo mode, sends nothing) and contact details
8. Footer with concept-project note

## Tech stack
Vite, React 18, TypeScript, plain CSS design tokens, Vitest + Testing Library. Hosted on GitHub Pages via Actions.

## Commands
```
npm run dev          # local dev server
npm run build        # type-check and build
npm run build:pages  # build for GitHub Pages
npm test             # unit tests
npm run lint         # eslint
```

## Structure
```
src/components/   Header, Hero, Services, Financing, Showroom, Pricing, Contact, ContactForm, Footer, Logo
src/content/      pl.ts (all copy, prices, contacts), photos.ts
src/styles/       tokens.css, base.css
src/assets/       optimised photos (webp)
```

## Boundaries
- Polish copy with correct diacritics; alt text on images; keyboard accessible.
- Never use real people's names, numbers or logos; keep all contact data in `src/content/pl.ts`.
- No trackers or third-party embeds.
