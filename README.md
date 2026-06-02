# Yajat Mehta Portfolio

Frontend-only premium personal portfolio built with:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel-ready deployment

No backend, no database, no authentication.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

1. Update targeted resume PDFs in `/public/resumes`.
2. Update the hero image at `/public/images/yajat-mehta.jpeg` if needed.
3. Update project links in `data/projects.ts`.
4. Add real YouTube demo URLs and GitHub repos.
5. Improve each `/projects/[slug]` case study with screenshots and architecture diagrams.

## Updating the Rumore App Link

The Rumore project card currently uses a placeholder link for the future app/landing page.

When the real Rumore link is available, update it in the project data file:

`data/projects.ts`

Look for:

`Rumore — Campus Social Platform`

Then replace the placeholder `appUrl` value with the real App Store, Play Store, or official landing page URL.

Do not add a GitHub/source-code link for Rumore unless intentionally decided later.
