
# Rocklin Comprehensive Dentistry Website

Modern, luxury dental site built with **Next.js 14**, **React 18**, and **Tailwind CSS**. Glassmorphism design, responsive layout, and pages for Home, About, Services, For Patients (New Patients, Insurance & Payments, **Blog**), and Contact.

## Local Dev
```bash
npm install
npm run dev
# http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Deploy on Cloudflare Pages (Git Recommended)
1. Push this folder to a GitHub repo (create one if needed).
2. In Cloudflare Dashboard → **Pages** → **Create a project** → **Connect to Git** → select your repo.
3. Build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
4. Environment variables (Settings → Environment Variables):
   - `NODE_VERSION` = `18`
   - `NEXT_TELEMETRY_DISABLED` = `1`
5. Click **Save and Deploy**. Your site will publish to `https://<your-project>.pages.dev`.
6. (Optional) Add your custom domain in **Pages → Custom Domains** and follow the DNS prompts.

## Content
- `/content/posts/*.md` — Blog posts (markdown with simple front matter). Update and push to publish.
- `/public` — Images and static assets.

## Notes
- Nav: **For Patients** includes **New Patients**, **Insurance & Payments**, and **Blog**.
- SEO: Basic Open Graph tags + LocalBusiness schema are included in `components/Layout.tsx`.
- Contact form is static; wire it to an email/API provider as needed.


## Cloudflare build command (recommended)
- **Build command**: `npm run build:cf`
- **Build output directory**: `.vercel/output`
- **Environment variables**: `NODE_VERSION=18`, `NEXT_TELEMETRY_DISABLED=1`


### Note
Moved blog utilities from `pages/for-patients/_bloglib.ts` to `lib/blog.ts` to avoid Next.js treating it as a page.
