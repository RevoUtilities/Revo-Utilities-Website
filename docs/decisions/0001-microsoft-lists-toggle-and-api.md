# ADR 0001: Microsoft Lists-backed Blog Toggle and API Stubs

Date: 2025-08-13

## Status
Accepted

## Context
The site currently uses an in-memory blog service in `src/utils/blogService.ts`. The business plans to author blog posts in Microsoft Lists with Power Automate handling conversion and image upload. We need a non-breaking path to switch to Microsoft Graph at a later date without removing existing content.

## Decision
- Introduce a feature toggle `VITE_USE_MICROSOFT_LISTS` (default `false`).
- When `true`, the client calls serverless endpoints under `api/` to retrieve posts from Microsoft Graph.
- For now, endpoints are stubbed and return safe responses until Graph credentials are configured.
- Keep existing in-memory posts as the default to avoid disruption.

## Changes
- `src/utils/blogService.ts`
  - Added Axios-based calls to `/api/posts` and `/api/posts/[slug]` when `VITE_USE_MICROSOFT_LISTS === 'true'`.
  - Fallbacks to in-memory posts on error or when toggle is `false`.
- API stubs
  - `api/posts/index.js`: returns `[]` unless Microsoft Graph env vars exist.
  - `api/posts/[slug].js`: returns 404 unless configured.
  - `api/revalidate.js`: accepts a secret and is a no-op placeholder for cache invalidation.
- `.env`
  - Added `VITE_USE_MICROSOFT_LISTS=false` and commented placeholders for Graph env vars and `VERCEL_REVALIDATE_SECRET`.

## Env Vars (Server-only on Vercel)
- `TENANT_ID`
- `CLIENT_ID`
- `CLIENT_SECRET`
- `SITE_ID`
- `LIST_ID`
- `VERCEL_REVALIDATE_SECRET`

## Security
- No secrets are exposed to the client. The toggle is read client-side, but Graph credentials are server-only.
- `/api/revalidate` requires `Authorization: Bearer <VERCEL_REVALIDATE_SECRET>` (or body `secret`) when configured.

## Consequences
- Immediate: No user-facing change; current blogs remain.
- Future: Flip `VITE_USE_MICROSOFT_LISTS=true` and provide Graph env vars in Vercel to switch to Microsoft Lists without code changes.
- Later we can implement real Graph calls inside the API endpoints and remove in-memory fallback when the business is ready.

## Follow-ups
- Implement Microsoft Graph calls in API routes.
- Add sanitization (rehype-sanitize/remark) in the API layer for HTML/Markdown from Lists.
- Optionally introduce cache invalidation mechanics beyond the no-op `/api/revalidate`.
