# Plan: Service & Reference Image Updates

This plan covers updating the "About" images for Fasadrenovering and Uterum and expanding the reference gallery.

## Phase 1: Data Model Update
- Add `aboutImage` to `KnallenService` in `src/data/site.ts`.
- Populate `aboutImage` for all services with the specified local paths.

## Phase 2: Template Refactoring
- Update `src/pages/tjanster/[slug]/index.astro` to use `service.aboutImage`.

## Phase 3: Gallery Update
- Add Specify images to `galleryImages` in `src/pages/projekt.astro`.

## Verification
- Confirm "Om tjänsten" sections on Fasadrenovering and Uterum pages show correct new images.
- Verify the project gallery shows the new reference images.
