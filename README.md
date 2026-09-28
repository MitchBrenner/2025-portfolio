# Mitchell Brenner — Portfolio

Personal portfolio site: a snowy mountain hero with a light/dark sky, followed by experience, projects, tech stack, and an about section.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint the project

## Where things live

| What | Where |
| --- | --- |
| Page layout (section order) | `src/app/page.tsx` |
| Title, description, share preview | `src/app/layout.tsx`, `src/app/opengraph-image.jpg` |
| Hero (mountains, snow, sky, intro animation) | `src/components/Hero.tsx` |
| Experience & education | `src/components/Experience.tsx` |
| Projects (data) | `src/lib/projects.ts` |
| Tech stack (data) | `src/lib/tech.ts` |
| Social links, email, resume path | `src/lib/links.ts` |
| About | `src/components/About.tsx` |
| Animations (intro, scroll parallax, reveals, glows) | `src/app/globals.css` |

### Adding a project

1. Add a screenshot to `public/projects/` (the cards crop to roughly 1.9:1).
2. Add an entry to `src/lib/projects.ts`. The first three are featured; the rest show under "View all".

## Notes

- **Site URL:** share previews, the sitemap, and structured data use `NEXT_PUBLIC_SITE_URL`. On Vercel it falls back to the production domain automatically; set it if you use a custom domain.
- **Motion:** the scroll parallax and section reveals use native CSS scroll-driven animations (GSAP is a fallback for older browsers). Everything respects the reduced-motion setting.
- **UI components:** light rays, meteors, magic card, and the theme toggler come from [Magic UI](https://magicui.design) and live in `src/components/ui/`.
