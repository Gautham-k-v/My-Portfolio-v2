# Gautham Krishna V — Portfolio

Personal portfolio for Gautham Krishna V, a MERN stack and freelance web developer. Built with React, Vite, and Tailwind CSS.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Before you publish

1. Add your photo as `public/profile.jpg`. Until that file exists, the site shows a monogram.
2. Replace the LinkedIn URL in `src/data/site.js`.
3. Replace `public/resume.pdf` with your resume. The included PDF only lists the skills, projects, and services already on the site.
4. After the site is deployed, set the absolute page URL in `index.html` for `og:url`, `og:image`, `twitter:image`, and a canonical link. LinkedIn needs a full `https://` image address for the share preview.

## EmailJS

The freelance form and the acknowledgement email stay inactive until these variables exist. Copy `.env.example` to `.env` and fill in the values from your EmailJS account. Do not commit `.env`.

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=
```

Create two templates in EmailJS. In both, set:

- To email: `{{to_email}}`
- Reply to: `{{reply_to}}`
- Subject: `{{subject}}`
- Body: `{{{message_html}}}`

The triple braces keep the HTML from the site. The enquiry template notifies `gauthamkrishnav35814@gmail.com`. The auto-reply template is sent to the client. Restart the dev server after saving `.env`.

On Vercel, add the same four variables in Project Settings → Environment Variables, then redeploy.
