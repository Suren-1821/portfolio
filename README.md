# Surendar R — Portfolio (React + Node)

A full-stack portfolio: a Node/Express API serves your resume data as JSON,
and a React (Vite) frontend fetches and renders it as an animated, dark
"developer console" themed site (terminal hero, live architecture diagram,
count-up stats, and a working contact form that POSTs to the API).

## Project structure

```
portfolio-app/
  backend/     Express API (serves /api/profile, /api/projects, etc.)
  frontend/    React app (Vite) that fetches from the API and renders the UI
```

## Run it locally

### 1. Start the API

```bash
cd backend
npm install
npm run dev
```

Runs on http://localhost:4000. Try http://localhost:4000/api/portfolio in your browser.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:5173 and proxies `/api/*` requests to the backend
(see `vite.config.js`), so no CORS setup is needed in dev.

### 3. Build for production

```bash
cd frontend
npm run build
```

Outputs static files to `frontend/dist`. Deploy the backend (e.g. Render,
Railway, Fly.io) and the frontend (e.g. Vercel, Netlify) separately, or serve
`dist` as static files from the Express app itself.

## Editing your content

All resume content lives in one place:
`backend/data/portfolio.js`

Update your profile, stats, skills, experience, projects, or education there
— the frontend re-renders automatically from whatever the API returns.

## Contact form

`POST /api/contact` currently logs submissions to the server console. To
actually receive messages, wire it up to an email service (e.g. Nodemailer +
Gmail/SMTP, or Resend/SendGrid) or a database inside `backend/server.js`.
