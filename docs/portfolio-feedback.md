# Portfolio HTML Review Notes

## Overall
The direction is strong: premium visual style, clear hierarchy, and strong metric-driven storytelling.

## Top issues to fix first
1. **Duplicate full document**: the exact same `<!DOCTYPE html> ... </html>` appears twice in the snippet. Keep only one full document block.
2. **Invalid/placeholder links**: several anchors use `href="#"` (cert verification and resume download) and generic social URLs (`https://linkedin.com`, `https://medium.com`). Replace with final URLs.
3. **Footer framework mismatch risk**: footer says "Built with React & Recharts" while this file is plain static HTML/CSS. Keep this line only if this markup will be migrated into your React app.

## Quick quality upgrades
- Add `aria-label` attributes to icon-only visual elements if they become interactive.
- Add a visible `:focus-visible` style for keyboard navigation on links and buttons.
- Respect reduced-motion preferences (`@media (prefers-reduced-motion: reduce)`) to disable animation delays.
- Add `rel="noopener noreferrer"` on all `target="_blank"` links.
- Consider replacing inline wrappers (`style="max-width:1080px;margin:0 auto;"`) with reusable classes.

## Copy and credibility polish
- Keep date formats consistent across roles (e.g., `Apr 2024 – Present`).
- Replace broad claims with verifiable wording where possible.
- If certifications are listed, add real verification URLs and optionally IDs.

## Mobile/readability notes
- `ai-grid` goes to 2 columns under 768px; for smaller phones, consider 1 column below ~480px.
- Ensure nav link spacing remains tappable for long names on smaller widths.


## Change impact
- This documentation update does not modify React components, HTML templates, CSS, or runtime behavior.
- Therefore, no UI was updated by this change.
