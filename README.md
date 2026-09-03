# AI Engineer Portfolio

A local, data-driven portfolio for a Computer Science student building toward AI Engineering. It presents a progression from ML fundamentals and computer vision through end-to-end systems, research, and cross-functional delivery.

## Stack

Next.js 14, React 18, TypeScript, and CSS design tokens. There is no backend and no deployment configured.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Structure

- `src/data/profile.ts` — replace `YOUR_NAME`, contact links, location, and CV path.
- `src/data/projects.ts` — the single source of truth for project cards and case-study pages.
- `src/data/journey.ts` — reusable journey milestones.
- `src/components/Portfolio.tsx` — homepage sections and interactions.
- `src/app/projects/[slug]/page.tsx` — generated dynamic case studies.
- `src/app/globals.css` — centralized responsive design system.

## Editing content and assets

Add a project object to `projects.ts`; it will automatically appear on the homepage and receive a `/projects/[slug]` page. Replace placeholder evidence captions with real assets when available. Add the real CV at `public/cv/resume.pdf` (or update the configured path).

## Design system

The site follows the Three-Color Rule: Dark Ash for structure, adaptive Blue for interaction and hierarchy, and Ash Grey for supporting content. CSS variables provide separate light and dark palettes. The theme toggle persists in `localStorage` and initially respects the operating-system preference. Animations are lightweight CSS transforms and are disabled for reduced-motion users.

Responsive layouts use mobile-first stacking, touch-friendly controls, semantic sections, visible focus-friendly native controls, and no desktop-only horizontal workflow. Deployment can be added later (for example, through Vercel) after local review.
