# GARAPIN CONTEXT

## Mission

Garapin helps founders, coaches, trainers, doctors, educators, consultants and personal brands turn ordinary talking-head recordings into professional short-form videos that are easier to follow, more convincing, and ready to publish.

Our mission is simple:

> We help people communicate their ideas more clearly.

---

# What Garapin Is

Garapin is NOT a creative agency.

Garapin is NOT a branding agency.

Garapin is NOT a social media agency.

Garapin is a premium talking-head video editing service.

---

# Business Goal

The landing page exists for one reason:

Convert qualified visitors into WhatsApp conversations.

Everything else is secondary.

---

# Brand Personality

Garapin feels:

- Premium
- Editorial
- Calm
- Modern
- Professional
- Human
- Intentional

Garapin never feels:

- Loud
- Trendy
- Flashy
- Salesy
- Generic
- Over-designed

---

# Design Philosophy

Editing should disappear.

The audience should remember the message,
not the edit.

The website follows the exact same philosophy.

Visitors should remember the offer,
not the design.

---

# Core Principle

Clarity beats decoration.

If an element does not improve:

- understanding
- trust
- usability
- conversion

remove it.

---

# Design Direction

Reference quality:

- Apple
- Linear
- Notion
- Stripe
- Raycast

Do NOT imitate their branding.

Only emulate:

- spacing
- typography
- restraint
- hierarchy
- polish

---

# Visual Style

Large whitespace.

Excellent typography.

Simple hierarchy.

Subtle motion.

Rounded corners.

Minimal icons.

No visual noise.

No unnecessary animations.

No gradients unless explicitly requested.

No glassmorphism.

No neon.

No AI-looking design.

---

# UX Philosophy

Every section answers exactly one question.

Hero

"What is this?"

Benefits

"What do I get?"

Pricing

"How much?"

Process

"How does it work?"

Portfolio

"Can they really do it?"

FAQ

"What should I know?"

CTA

"How do I start?"

---

# Copywriting

Never rewrite approved copy unless requested.

Avoid marketing clichés.

Avoid exaggerated claims.

Write clearly.

Write simply.

Write confidently.

---

# Portfolio

Portfolio is proof.

Not decoration.

Never invent:

- testimonials
- reviews
- metrics
- clients

Use only real work.

---

# Editing Philosophy

Good editing is invisible.

Cut anything that doesn't improve understanding.

Effects should support meaning.

Never distract from the speaker.

---

# Technical Principles

Never redesign while fixing bugs.

Fix the smallest thing possible.

Preserve:

- spacing
- typography
- hierarchy
- responsiveness
- accessibility
- performance

---

# Assets

Brand assets live in:

public/brand-assets

Never recreate the logo.

Never replace assets.

Always verify paths.

---

# Deployment

Hosting:

Cloudflare Pages

Always verify:

npm run build

npm run preview

before completing a task.

---

# Before Every Commit

Confirm:

✓ no broken images

✓ no missing assets

✓ no console errors

✓ responsive

✓ Lighthouse preserved

✓ build successful

---

# Final Rule

Before changing anything ask:

"Does this make the website clearer?"

If the answer is no,

don't change it.

---

# Contact

Primary WhatsApp

+62 851-2801-1920

International format

6285128011920

WhatsApp link

https://wa.me/6285128011920

Default CTA

Mulai dari 1 Video

Alternative CTA

- Hubungi Kami
- Konsultasi via WhatsApp
- Kirim Footage
- Mulai Sekarang

Whenever a WhatsApp button, floating button, CTA, or contact link is created, always use:

https://wa.me/6285128011920

Do not use placeholder phone numbers.
Do not invent contact information.

---

# Technical Stack

## Framework

The current website does not use an application framework.

It is a single-page static website built with:

- semantic HTML in `index.html`
- CSS in `style.css`
- no project JavaScript
- no component runtime
- no client-side state

There is currently no `src/`, pages, layouts, or components directory.

## Build Tool

Vite `8.0.13` is the only development dependency.

Available scripts:

- `npm run dev` starts Vite on `0.0.0.0`
- `npm run build` creates the production build

Vite uses `/` as its base path and writes the build to `dist/`.

The custom `sites-static-worker` Vite plugin creates `dist/server/index.js`. That worker delegates requests to `env.ASSETS`.

## CSS Strategy

The website uses one global stylesheet: `style.css`.

CSS custom properties in `:root` define the core colors, container width, responsive gutter, section spacing, shared radius, and shared transition.

Styles are organized by semantic class names. There is no CSS framework, CSS module system, CSS-in-JS, preprocessor, or external UI library.

## Deployment

The production target is Cloudflare Pages.

Cloudflare configuration currently exists in:

- `wrangler.toml`
- `.openai/hosting.json`

The Pages project name is `garapin-homepage`. The configured build output directory is `./dist` and the Wrangler compatibility date is `2026-08-07`.

`.openai/hosting.json` contains a Sites project ID. D1 and R2 are both unset.

The repository must be built before deployment. Cloudflare must publish `dist/`, not the repository root or `public/` directly.

## Folder Structure

- `index.html` — the complete homepage structure, content, metadata, and links
- `style.css` — the complete visual system and responsive behavior
- `public/brand-assets/` — official Garapin identity and browser assets copied into the Vite build
- `.openai/hosting.json` — Sites project configuration
- `vite.config.js` — Vite build and static worker configuration
- `wrangler.toml` — Cloudflare Pages project and output configuration
- `package.json` — scripts and Vite dependency
- `pnpm-lock.yaml` — dependency lockfile
- `dist/` — generated production output; never treat it as source
- `README.md` — inherited starter documentation that does not describe the current implementation accurately
- `GARAPIN_CONTEXT.md` — permanent product, brand, design, and engineering source of truth

`public/assets/`, `outputs/`, and `work/site-stage/` currently contain no source files used by the website.

---

# Brand Assets

All official brand assets live under `public/brand-assets/`. Vite copies them to `/brand-assets/` in the production build.

Do not rename, redraw, trace, recolor, or substitute these files without explicit approval.

## Logo

- `public/brand-assets/logo/logo-black.svg`
- Black Garapin Digital wordmark
- SVG dimensions: `745 × 141`
- SVG viewBox: `143 50 745 141`
- Used in the navbar
- Production URL: `/brand-assets/logo/logo-black.svg`

## Mark

- `public/brand-assets/mark/mark-black.svg`
- Black Garapin logomark
- SVG dimensions: `78 × 74`
- SVG viewBox: `271 50 78 74`
- Used in the footer
- Production URL: `/brand-assets/mark/mark-black.svg`

## Favicons and App Icons

- `public/brand-assets/favicon/favicon.ico`
- `public/brand-assets/favicon/favicon-16.png` — `16 × 16`
- `public/brand-assets/favicon/favicon-32.png` — `32 × 32`
- `public/brand-assets/favicon/favicon-48.png` — `48 × 48`
- `public/brand-assets/favicon/apple-touch-icon.png` — `180 × 180`
- `public/brand-assets/favicon/android-chrome-192.png` — `192 × 192`
- `public/brand-assets/favicon/android-chrome-512.png` — `512 × 512`
- `public/brand-assets/favicon/site.webmanifest`

The HTML references the ICO, 16px, 32px, Apple touch icon, and manifest. The manifest references both Android Chrome icons and defines a black theme color, white background, and standalone display mode.

## Open Graph

- `public/brand-assets/open-graph/og-image-1200x630.png`
- Dimensions: `1200 × 630`
- Used by Open Graph and Twitter card metadata
- Production URL: `/brand-assets/open-graph/og-image-1200x630.png`

No other logo variants, photographs, portfolio thumbnails, videos, or brand fonts currently exist in `public/brand-assets/`.

---

# Typography

## Font Families

The current primary typeface is Geist, loaded from Google Fonts at weights `400`, `500`, `600`, `700`, and `800`.

The body fallback stack is:

`"Geist", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

The website enables antialiasing and optimized legibility.

## Existing Font Sizes

The current stylesheet uses these fixed font sizes:

- `12px` — eyebrows, card labels, and smallest mobile navigation
- `13px` — service status, client monograms, client categories, and footer copyright
- `14px` — navigation, buttons, section titles, and skip link
- `15px` — mobile client names
- `16px` — client names
- `17px` — hero supporting copy
- `18px` — client outbound arrow
- `22px` — service arrow
- `27px` — smallest service heading

Responsive heading sizes use these exact `clamp()` values:

- Hero heading: `clamp(64px, 8.5vw, 116px)`
- Hero heading at tablet width: `clamp(62px, 10.8vw, 88px)`
- Hero heading at mobile width: `clamp(52px, 14vw, 72px)`
- Hero heading at small-mobile width: `clamp(46px, 13.8vw, 62px)`
- Service heading: `clamp(27px, 2.7vw, 38px)`
- About statement: `clamp(34px, 4vw, 52px)`
- About statement on mobile: `clamp(34px, 8.5vw, 46px)`
- Contact heading: `clamp(68px, 9vw, 120px)`
- Contact heading on small mobile: `clamp(58px, 18vw, 78px)`

Existing weights include `500`, `560`, `580`, `600`, `650`, and the imported Geist range. Do not normalize these values without reviewing their visual effect.

## Spacing

There is no formal numbered spacing scale. Use the existing values and responsive tokens instead of inventing a new scale.

Core layout tokens:

- Maximum container width: `1180px`
- Horizontal gutter: `clamp(20px, 4vw, 48px)`
- Section spacing: `clamp(96px, 10vw, 152px)`
- Desktop navigation height: `76px`
- Mobile navigation height: `68px`
- Services grid gap: `16px`
- Client directory grid gap: `12px`
- Button group gap: `10px`

Hero, contact, headings, cards, footer, and responsive layouts use additional contextual spacing declared directly in `style.css`. Preserve those relationships when changing a component.

## Border Radius

- Shared card radius: `16px`
- Buttons: `999px` pill radius
- Client monograms: `50%` circle
- Skip link: `10px`
- Focus treatment on logo and footer mark: `4px`

## Borders and Shadows

The interface uses one-pixel borders.

- Base border: `#e6e6e2`
- Hover border: `#c9c9c4`
- Sticky header border: `rgba(230, 230, 226, 0.9)`

There are no shadows in the current design. Do not introduce shadows unless explicitly requested.

---

# Component Library

The repository has no programmatic component library. The following reusable interface patterns are implemented directly in `index.html` and `style.css`.

## Skip Link

Provides keyboard users with a direct route to `#main-content`. It remains visually hidden until focused.

## Navbar

A sticky header containing the official wordmark and three anchor links: Work, About, and Contact. Its purpose is orientation and direct movement through the single page.

## Buttons

The shared `.button` pattern controls height, padding, typography, pill shape, focus treatment, and motion.

- `.button-primary` is the high-emphasis dark action.
- `.button-secondary` is the lower-emphasis bordered action.
- `.button-group` controls responsive grouping and mobile stacking.

Future WhatsApp actions must use the approved contact URL and approved CTA labels in this document.

## Hero

Contains an eyebrow, the primary page heading, supporting text, and two actions. Its purpose is to explain the current offer and provide the first navigation choices.

## Section Heading

The `.section-heading` pattern provides a consistent compact label and separation before section content.

## Service Cards

The two-card services grid distinguishes the available EDITIN offer from the muted, coming-soon BRANDINGIN entry. Cards share structure, padding, border, radius, footer alignment, and restrained hover behavior.

## Client Directory Cards

The `Sudah Kami Garapin` section is currently a two-column directory of eleven external Instagram links. Each full card is clickable and contains a circular monogram, client name, category, and outbound arrow.

These cards are proof of existing client relationships. They are not Instagram embeds and do not display followers or Instagram interface elements.

## About

A two-column editorial pattern pairing a compact section title with a constrained large-text statement. It becomes one column below the tablet breakpoint.

## Contact

A centered high-emphasis closing section with an eyebrow, oversized headline, and primary action. The current HTML uses an email action; future contact implementation must use the approved WhatsApp URL unless explicitly directed otherwise.

## Footer

A restrained three-part footer containing the official mark, external/contact links, and copyright. It reorganizes into two columns with a separate copyright row on mobile.

## Components Not Present

The current repository contains no pricing component, FAQ component, accordion, talking-head portfolio gallery, testimonial component, form, floating WhatsApp button, modal, carousel, or video player.

Do not document or treat absent components as implemented. Add them only when explicitly requested and when they fit the approved information architecture.

---

# Animation Rules

## Existing Motion

The shared transition token is `200ms ease`.

Current interactions:

- Navigation and footer links transition their text color.
- Primary and secondary buttons transition color, background, border, and transform; hover moves them upward by `1px`.
- Service cards transition border color and transform; hover moves them upward by `3px`.
- The EDITIN service arrow moves `4px` to the right on card hover.
- Client cards transition border and background color.
- Client arrows move `2px` right and `2px` up while changing color on card hover.
- The skip link transitions vertically into view when focused.
- Anchor navigation uses smooth scrolling.

All current motion uses the shared `200ms ease` timing.

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- smooth scrolling is disabled
- all transition durations are reduced to `0.01ms`

## Future Motion Rules

- Motion must clarify state, hierarchy, or interaction.
- Default to the existing `200ms ease` token.
- Prefer color, border, and movement of no more than a few pixels.
- Preserve reduced-motion behavior for every new interaction.
- Do not add autoplay motion, parallax, entrance choreography, looping decoration, or animation solely for visual novelty.
- Never let motion compete with the message or delay access to content and CTAs.

---

# Responsive Rules

The stylesheet is desktop-first and uses breakpoints at `900px`, `720px`, and `480px`.

## Desktop — Above 900px

- Content is constrained to `1180px` with responsive gutters.
- Services and client directory use two-column grids.
- About uses a narrow title column and wider statement column.
- Hero supporting copy and actions sit on opposite sides.
- Footer uses three columns.

## Tablet — 900px and Below

- Hero typography scales down.
- Service cards reduce their minimum height.
- About changes to one column and reduces its internal gap.

## Mobile — 720px and Below

- Navigation height and wordmark width reduce.
- Hero spacing and typography reduce intentionally.
- Hero supporting content stacks vertically and aligns left.
- Services and client directory become single-column lists.
- Sections use `96px` vertical padding.
- Footer becomes a two-column layout with copyright on a new full-width row.
- Scroll padding changes to match the shorter sticky navigation.

## Small Mobile — 480px and Below

- Navigation spacing and link sizes reduce.
- Hero type receives a smaller responsive range.
- Hero buttons become full-width stacked actions.
- Service and client cards reduce padding, sizing, and gaps.
- Contact typography receives a dedicated smaller responsive range.

Do not merely scale desktop layouts. Preserve clear headline wrapping, comfortable touch targets, readable pricing when introduced, single-column card flow, and visible primary CTA hierarchy.

---

# Accessibility Rules

## Existing Patterns

- Semantic landmarks use `header`, `nav`, `main`, `section`, and `footer`.
- The main navigation has an accessible label.
- Every section heading is connected with `aria-labelledby`.
- A skip link targets `#main-content`.
- Keyboard focus uses visible two-pixel outlines with offsets.
- The logo and footer mark are inside links with descriptive `aria-label` values; their image `alt` values are intentionally empty to avoid duplicate announcements.
- Decorative arrows and monograms use `aria-hidden="true"`.
- External client cards have descriptive accessible labels.
- External links open in a new tab and use `rel="noreferrer"`.
- Image dimensions are declared to reduce layout shift.
- Reduced-motion preferences are respected.

## Required Standards for Future Work

- Preserve semantic landmarks and logical heading order.
- Every actionable control must be keyboard reachable and visibly focused.
- Use native links for navigation and native buttons for actions that change page state.
- Give icon-only controls an accessible name.
- Keep decorative images silent and meaningful images accurately described.
- Preserve sufficient text, border, and focus contrast.
- Maintain practical touch target sizes; the current shared button has a `48px` minimum height.
- Announce expanded state on future disclosure controls such as FAQ accordions with native elements or appropriate ARIA.
- Do not depend on hover, color, animation, or pointer precision alone to communicate meaning.
- Keep the document language accurate when the approved page language is finalized.
- Validate keyboard navigation, focus order, reduced motion, and asset alternative text before committing frontend changes.

---

# Copy Rules

- Preserve approved copy exactly unless the user explicitly requests a rewrite.
- Use direct, concrete, confident language.
- Explain the offer before trying to make it sound impressive.
- Prefer short sentences and familiar words.
- Describe only services Garapin actually provides.
- Never invent results, clients, testimonials, metrics, guarantees, contact details, or service capabilities.
- Never use fabricated urgency or exaggerated claims.
- Avoid generic marketing language, agency clichés, and vague transformation promises.
- Keep labels and CTA text consistent across the page.
- Use the approved WhatsApp number and URL from the Contact section for every contact action.
- Treat portfolio content as evidence. Use only real Garapin work.
- If repository copy conflicts with approved source-of-truth copy, flag the conflict before changing it.

---

# NON-NEGOTIABLES

## Brand Philosophy

Garapin is a premium talking-head video editing service, not a creative, branding, or social media agency.

Clarity beats decoration. Editing and interface design should support the message without calling attention to themselves.

## Approved Copy

Do not rewrite approved copy, introduce new claims, or expand service scope without explicit approval.

## Pricing

Approved prices must never be changed without explicit instruction. The current repository contains no pricing component or price values, so do not infer or invent them.

## CTA and Contact

The website's primary conversion goal is a qualified WhatsApp conversation.

The canonical WhatsApp URL is:

https://wa.me/6285128011920

The default CTA is:

Mulai dari 1 Video

Approved alternatives are limited to those listed in the Contact section unless new copy is explicitly approved.

## Layout Hierarchy

Preserve the approved information hierarchy and the rule that every section answers one visitor question. Do not reorder, add, or remove sections without explicit instruction.

The current implementation does not yet contain every section described by the UX philosophy. Do not silently invent the missing content.

## Visual Direction

The website must remain premium, editorial, calm, modern, professional, human, and intentional.

Preserve whitespace, typography hierarchy, restraint, thin borders, minimal icons, restrained radii, and subtle motion.

Do not add gradients, glassmorphism, neon, visual clutter, decorative graphics, oversized icons, arbitrary floating elements, or animation for its own sake.

## Brand Assets

Use only existing official assets from `public/brand-assets/`. Never recreate or replace the logo or mark without explicit approval.

## Technical Integrity

Do not redesign while fixing bugs. Make the smallest effective change and preserve accessibility, responsiveness, performance, paths, and production build behavior.

---

# Decision Framework

Before modifying anything, Codex must ask internally:

1. Is this necessary?
2. Does it improve clarity?
3. Does it preserve the brand?
4. Does it improve conversion?
5. Does it maintain consistency?

If the answer is no,

don't change it.
