# Julian Quezada — Personal Website

My personal portfolio and website, built with **Next.js** and deployed on **Vercel**.

## 🚀 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Vanilla CSS / CSS Modules |
| Fonts | Google Fonts (Inter / Outfit) |
| Deployment | Vercel |

## 📂 Project Structure

```
personal-website/
├── public/
│   └── assets/          # Static assets (images, resume PDF, favicon)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout (fonts, metadata, nav)
│   │   └── page.tsx     # Home page — assembles all sections
│   ├── components/
│   │   ├── Hero.tsx         # Above-the-fold intro section
│   │   ├── About.tsx        # About me blurb
│   │   ├── Projects.tsx     # Highlighted projects (with links)
│   │   ├── Skills.tsx       # Tech stack / skills grid
│   │   ├── Experience.tsx   # Work history / timeline
│   │   ├── Contact.tsx      # Contact form or links
│   │   └── Navbar.tsx       # Sticky top navigation
│   └── styles/
│       └── globals.css      # Design system: tokens, resets, utilities
├── .github/
│   └── workflows/       # CI/CD (e.g. deploy preview on PR)
├── .gitignore
└── README.md
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## 📄 Sections

- **Hero** — Name, tagline, CTA
- **About** — Short bio and background
- **Projects** — Featured work with links
- **Skills** — Technologies and tools
- **Experience** — Work history / timeline
- **Contact** — Links and/or contact form

## 🌐 Deployment

Deployed automatically via [Vercel](https://vercel.com) on push to `main`.

---

> Built by Julian Quezada
