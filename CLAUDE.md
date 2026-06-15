# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000 (Turbopack)
npm run build    # production build — also runs full TypeScript check
npm run lint     # eslint (eslint-config-next)
npm start        # serve production build
```

No test suite exists. To verify a change, run `npm run build` (typechecks the whole tree) and/or eyeball it in `npm run dev`.

> Note: a stray `package-lock.json` at `/Users/alanfrigo/package-lock.json` makes Next warn about workspace root inference. Harmless; the repo's own lockfile is the real one.

## Architecture

Single-page personal portfolio. Next.js 16 App Router, React 19, Tailwind CSS v4, fully static (`output: static` by default — every section renders at build time). Path alias `@/*` → repo root.

**Page composition** — `app/page.tsx` is the whole site: it stacks section components (`Hero`, `About`, `Experience`, `Skills`, `Projects`, `Certifications`, `Education`, `Contact`) in order, wrapped by `Navbar` + `Footer`. Adding/reordering a section happens here.

**Content lives in `lib/i18n.ts`, not in components.** This is the single source of truth for all copy. `translations` holds parallel `en` and `pt` objects with identical shape — any text edit (experience entries, about, hero, education, projects) must be made in BOTH languages or the types/render break. `skillsData` is language-agnostic shared data. Components read content via the `t` object from `useLanguage()`; they contain layout/animation only.

**i18n + theme are client-side, no routing.** `context/LanguageContext.tsx` (`LanguageProvider` wraps the tree in `layout.tsx`) picks language from `localStorage('preferred-language')` then browser `navigator.language`, and guards against hydration mismatch by rendering English until hydrated. Dark mode is independent: an inline script in `app/layout.tsx` reads `localStorage('theme')` and toggles `.dark` on `<html>` before paint (no flash); `Navbar.tsx` flips it at runtime.

**Theming via CSS custom properties** — `app/globals.css` defines two token sets (`:root` light, `.dark`) for `--bg-*`, `--text-*`, `--accent*`, exposed to Tailwind as `--color-*` utilities (e.g. `bg-bg-base`, `text-text-primary`, `border-accent`). Use these tokens, never hardcoded colors, so both themes stay correct. Fonts: `--font-heading` (Space Grotesk) and `--font-body` (DM Sans); headings use `font-[family-name:var(--font-heading)]`.

**Scroll reveal animations** — two independent mechanisms, both based on IntersectionObserver:
- Global: the inline script in `layout.tsx` adds `.active` (and `.reveal-active` for text-reveal) to any `.reveal` element when it enters view. Add `className="reveal"` (+ `delay-*`) to opt in.
- Local: `Experience.tsx` runs its own observer to progressively reveal and auto-expand timeline entries.

### Adding an experience entry (common task)
1. `lib/i18n.ts`: add the position object under `experience.positions` in **both** `en` and `pt` (keys: `company`, `role`, `period`, `location`, `description`, `technologies`).
2. `components/Experience.tsx`: add the new key to the `PositionKey` union AND to `positionOrder` (array order = display order). The first key in `positionOrder` is also seeded into the initial `revealed`/`expanded` sets.

### Certifications
`components/Certifications.tsx` holds its data inline (not in i18n) as the `certifications` array. Each entry's `icon` is `'asimov' | 'aws' | 'databricks'`, resolved by `CertIcon`; issuer logos live in `public/`. Section labels are translated inline via `language === 'en' ? ... : ...`.
