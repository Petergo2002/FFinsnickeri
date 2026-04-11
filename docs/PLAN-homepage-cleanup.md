# Plan: Homepage Cleanup & Review Sync

This plan covers removing the "Referensprojekt" section from the homepage, updating the Testimonials section with specific Google reviews, and syncing images with the References page.

## User Review Required

> [!IMPORTANT]
> The "Referensprojekt" section will be completely removed from the homepage as requested.
> Testimonials will be limited to the three specified Google reviews.

## Proposed Changes

### [Component Name] Data & Logic

#### [MODIFY] src/data/site.ts
- Update `testimonials` array with:
    1. Pierre Vettese (5/5, 4 years ago)
    2. Renáta Mezei (5/5, 2 years ago)
    3. Enikő Mezei (5/5, 4 years ago)
- Re-index or update image paths to use the WebP images from the references page.

### [Component Name] Frontend

#### [MODIFY] src/pages/index.astro
- Remove the "Referensprojekt" section (lines 102-142).
- Ensure the Testimonials component reflects the new data.

#### [MODIFY] src/components/Testimonials.astro
- Update the layout to handle multiple testimonials if necessary (currently it only picks one).
- Update the "Utfört arbete" images to use the reference images.

#### [MODIFY] src/pages/tjanster/[slug]/[area].astro
- Ensure the landing pages also show the updated testimonials and synchronized images.

## Open Questions

1. **Heading Change**: You mentioned "ändra bort Vad våra kunder säger". Should I remove this heading entirely, or replace it with something like "Omdömen från Google"?
2. **Image Selection**: Should I use all 5 images from the references page (`/altan.webp`, etc.) distributed across the site, or a specific subset?
3. **Landing Page Heros**: Should the hero (top) image on landing pages also be updated to a reference image, or just the "Utfört arbete" section?

## Verification Plan

### Manual Verification
- Verify homepage no longer has "Referensprojekt".
- Check that the three specific reviews show up correctly.
- Verify images on landing pages match the ones on the references page.
