# Plan: Service Hero Image Overhaul

This plan details the generation of realistic AI images for core services and the implementation of dynamic hero backgrounds across the site.

## Phase 1: Image Generation
- Generate `service-fasadrenovering.jpg`: High-quality facade renovation on a Swedish house.
- Generate `service-altanbygge.jpg`: Detailed wooden deck craftsmanship.
- Generate `service-uterum.jpg`: Modern Swedish sunroom/conservatory.

## Phase 2: Component Refactoring
- Update `src/components/PageHero.astro` to accept a `bgImage` prop.
- Add back-projection or muted overlay to `PageHero` for text clarity.

## Phase 3: Data & Template Updates
- Update `src/data/site.ts` with new image paths.
- Update `src/pages/tjanster/[category].astro` to pass image to hero.
- Update `src/pages/tjanster/[slug]/[area].astro` to use `service.image`.

## Verification
- Confirm all service pages show matching hero images.
- Verify landing pages (Borås, Svenljunga) sync with their respective services.
