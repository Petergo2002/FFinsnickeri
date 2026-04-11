```markdown
# Design System Strategy: Knallens Fastighetsservice

## 1. Overview & Creative North Star: "The Architectural Anchor"
The North Star for this design system is **"The Architectural Anchor."** Property maintenance is about stability, precision, and the physical preservation of value. To move beyond a generic "tradesperson" template, this system treats the digital canvas like a blueprint for a premium Scandinavian estate.

We reject the "boxed-in" web. Instead of rigid grids and heavy borders, we use **intentional asymmetry** and **tonal rhythm**. By overlapping high-resolution architectural photography with clean, off-grid typography, we create a sense of bespoke craftsmanship. The interface shouldn't just provide information; it should feel like a sturdy, well-maintained structure—airy, light-filled, and impeccably organized.

---

## 2. Colors: Tonal Atmosphere
We do not use color to decorate; we use it to define space and "weight."

*   **Primary (#4f6073):** Our "Navy Slate." It represents the authority of the brand. Use it for high-impact CTAs and structural anchors.
*   **Surface Hierarchy (The "No-Line" Rule):** 1px solid borders are strictly prohibited for sectioning. Separation is achieved through background shifts:
    *   **Main Background:** `surface` (#f8f9fa).
    *   **Secondary Rhythm:** Use `surface-container-low` (#f1f4f6) for large section breaks.
    *   **Interactive Cards:** Use `surface-container-lowest` (#ffffff) to make elements pop against the grey.
*   **The Glass & Gradient Rule:** For hero sections or primary CTAs, apply a subtle linear gradient from `primary` (#4f6073) to `primary_dim` (#435467). For floating navigation or mobile menus, use `surface` at 80% opacity with a `20px` backdrop-blur to create a "frosted glass" effect that feels high-end and integrated.

---

## 3. Typography: Editorial Authority
The type scale is designed to feel like a high-end architectural magazine. We pair the geometric precision of **Manrope** for displays with the utilitarian clarity of **Inter**.

*   **Display & Headline (Manrope):** Use `display-lg` (3.5rem) with negative letter-spacing (-0.02em) for hero headlines. This creates a "tight," professional look.
*   **Body (Inter):** All body text defaults to `body-lg` (1rem). Maintain a line-height of 1.6 to ensure the "breathable" Scandinavian feel.
*   **Hierarchy as Brand:** Use `label-md` in all-caps with 0.1em letter-spacing for small sub-headers (e.g., "OUR SERVICES") to provide an editorial, curated feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-heavy" for a physical service brand. We utilize **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` (#ffffff) card on top of a `surface-container` (#eaeff1) section. The delta in brightness provides all the "lift" required.
*   **Ambient Shadows:** If an element must float (e.g., a "Request Quote" modal), use a shadow tinted with the `on-surface` color: `rgba(43, 52, 55, 0.04)` with a 40px blur and 12px Y-offset.
*   **The "Ghost Border" Fallback:** If a container needs more definition (e.g., on white-on-white layouts), use `outline-variant` (#abb3b7) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Background `primary` (#4f6073), text `on_primary` (#f5f8ff). Roundedness: `md` (0.75rem). Use a subtle inner-glow (top white border 10% opacity) for a 3D "premium" tactile feel.
*   **Secondary (Outlined):** Border `outline` (#737c7f) at 40% opacity. No fill. Text `primary`.
*   **Interaction:** On hover, the primary button should shift to `primary_dim`.

### Cards & Service Modules
*   **Rule:** Forbid divider lines.
*   **Execution:** Use `spacing-8` (2.75rem) to separate content blocks within a card. Use `surface-container-high` (#e3e9ec) for a subtle hover state background change rather than an elevation increase.

### Input Fields
*   **State:** Default fill is `surface-container-lowest` (#ffffff) with a `ghost border`. 
*   **Focus:** Transition the border to `primary` (#4f6073) with a width of 2px. Labels should use `label-md` and sit 0.5rem above the input, never inside.

### Signature Component: The "Status Ribbon"
For property maintenance updates, use a slim horizontal bar using `tertiary_container` (#d6dbfb) with `on_tertiary_container` (#474d67) text. It signals "Trust" and "Progress" without the alarmism of typical "Warning" colors.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Margins:** Allow images to bleed off the edge of the grid while keeping text strictly aligned.
*   **Embrace "Dead" Space:** Use `spacing-20` (7rem) between major homepage sections to signal premium positioning.
*   **Use Roundedness Consistently:** Stick to `md` (0.75rem / 12px) for all containers to maintain the "soft minimalism" brand feel.

### Don't:
*   **Don't Use Pure Black:** Always use `on_background` (#2b3437) for text. Pure black is too harsh for the Scandinavian palette.
*   **Don't Use Default Dividers:** Never use a `<hr>` or a 1px line to separate list items. Use vertical white space `spacing-4` (1.4rem) instead.
*   **Don't Over-Iconize:** Use icons sparingly. When used, ensure they are thin-stroke (1.5px) and match the `secondary` color (#5c5f64). High-end brands rely on typography, not symbols.