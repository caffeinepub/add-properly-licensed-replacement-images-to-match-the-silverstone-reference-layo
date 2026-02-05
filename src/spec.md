# Specification

## Summary
**Goal:** Update the site’s stated annual production value everywhere from “24000 MT” to “6000 MT”.

**Planned changes:**
- Change the centralized content value `about.productionPerYear` in `frontend/src/content/siteContent.ts` from `24000 MT` to `6000 MT`.
- Verify all pages/sections that render the production-per-year value (including Home stats and About page text/stats) display `6000 MT`.
- Run a repo-wide check to ensure there are no remaining user-facing occurrences of the exact string `24000 MT`.

**User-visible outcome:** The Home and About pages consistently show “6000 MT” for “Production Per Year” (and related annual production/capacity text), with “24000 MT” no longer appearing anywhere on the site.
