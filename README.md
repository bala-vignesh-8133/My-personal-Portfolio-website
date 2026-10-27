# Bala Vignesh S. — Portfolio

React + Vite single-page portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The `dist/` folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Updating content

All content lives in `src/data/`:

| File | What to edit |
| --- | --- |
| `profile.js` | Name, intro, email, phone, **GitHub / LinkedIn URLs**, **resume path** |
| `education.js` | Institution, degree, **CGPA** |
| `certifications.js` | Add certification objects (section shows a placeholder while empty) |
| `projects.js` | Add projects, screenshots (`image`), repo/demo links |
| `experience.js` | Internship and project experience |
| `skills.js` | Skill categories |

The resume PDF is `public/resume.pdf` (replace the file to update it). GitHub, LinkedIn and certifications come from the resume.

Still to add: project screenshots (put images in `public/images/` and set `image: 'images/name.webp'` in `projects.js`). Until then each project shows an illustration.

Buttons whose URL is empty render as disabled instead of linking nowhere.
