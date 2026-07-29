# BAIC Nigeria — Laravel + Inertia + React

Laravel port of the BAIC Nigeria marketing site. UI, routes, and behaviour match the previous Next.js app (and [baicuae.com](https://baicuae.com/) layouts).

## Requirements

- PHP **8.2+** with extensions: `mbstring`, `xml`, `curl`, `zip`, `sqlite3`, `tokenizer`
- Composer 2
- Node.js 20+

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate

npm install
npm run build   # or: npm run dev  (Vite HMR)
```

Create the SQLite DB file if missing:

```bash
touch database/database.sqlite
```

## Run

```bash
# terminal 1 — Laravel
php artisan serve --port=8000

# terminal 2 — Vite (during development)
npm run dev
```

Open [http://localhost:8000](http://localhost:8000).

## Architecture

| Layer | Role |
|---|---|
| `routes/web.php` | All page routes |
| `app/Http/Controllers/PageController.php` | Inertia page responses |
| `app/Services/ContentService.php` | Local JSON + optional UAE API fallback |
| `storage/app/data/*.json` | Content fallbacks (same payloads as before) |
| `resources/js/Pages` | Inertia React pages |
| `resources/js/Components` | Shared UI (header, forms, 360, sections) |
| `public/images` | Static assets (unchanged URLs) |

Shared chrome data (`homepage`, `models`, `categories`) is provided via `HandleInertiaRequests`.

## Notes

- The old Next.js `src/` tree remains for reference; the running app is Laravel.
- Forms remain client-side success stubs (same as before).
- 360° viewer and Bootstrap/legacy CSS paths are preserved under `public/`.
