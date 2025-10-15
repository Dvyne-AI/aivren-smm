# SMM Panel — Starter (Ultra-Simple)

This is a **beginner-friendly skeleton** for your custom SMM panel. You **don’t need to install anything** right now.
Just upload this folder to a new GitHub repo, and tell me the repo link. I’ll give you deploy commands next.

## What’s inside
- `frontend/` — Next.js app (login, dashboard placeholders)
- `api/` — Express API (health check, placeholder routes, Razorpay webhook stub)
- `worker/` — Placeholder for background jobs
- `infra/` — Docker Compose + Caddy (auto-HTTPS) for a VPS

## Your 3 steps (today)
1. **Download this ZIP** → extract → **create a new GitHub repo** named `smm-panel` (or any name) → push the files.
2. **Reply to me** with your repo link and confirm your domain:  
   - `panel.aivren.in` (Panel UI)  
   - `api.aivren.in` (API + webhooks)
3. I’ll give you **copy‑paste server commands** to deploy on a VPS and set up DNS + SSL.

---

## Folder layout
```
smm-panel/
  frontend/
  api/
  worker/
  infra/
  README.md
```

## .env files you’ll need later (do nothing now)
- `api/.env`:
  ```env
  PORT=4000
  JWT_SECRET=change_me
  DATABASE_URL=postgres://postgres:postgres@postgres:5432/smm
  REDIS_URL=redis://redis:6379
  RAZORPAY_KEY_ID=your_key_id
  RAZORPAY_KEY_SECRET=your_key_secret
  WEB_BASE_URL=https://panel.aivren.in
  API_BASE_URL=https://api.aivren.in
  ```
- `frontend/.env.local`:
  ```env
  NEXT_PUBLIC_API_BASE=https://api.aivren.in
  ```

When you’re ready, I’ll handle the server part with you.
