# Movie Explorer: short demo

**Mode:** Local full-stack app; screenshots/video use labeled provider fixtures. Live provider integration requires credentials.

## Walkthrough

1. Run the backend with a configured TMDB credential, or use the labeled fixture capture.
2. Search for a movie and inspect its card.
3. Save it with the heart button and open Favorites.
4. Refresh to demonstrate the real database-backed saved collection.

## Capture notes

The published capture uses a temporary local SQLite database and fictional account data. It does not connect to AWS or deploy anything. Provider-dependent captures are visibly labeled as fixtures. The recording demonstrates the shown workflow, not a complete production readiness assessment.

Run the README setup before repeating the steps. Do not share real credentials in screenshots or recordings.

## Repeat without provider credentials

Run `node scripts/demo-fixtures.cjs` after the README install/build steps. It uses a separate fixture database. The production launcher is unchanged. This is a deterministic provider substitute, not evidence of live model/provider access.
