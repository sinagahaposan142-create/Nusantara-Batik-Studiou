# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a full **Widya Nusantara Academy** bimbel website (UTBK-SNBT tutoring), an Express API server, and a static Blogger/Blogspot export.

## Projects

### 1. Widya Nusantara Academy Website (`artifacts/widya-nusantara`)
- React + Vite webapp with Batik Nusantara aesthetic (deep navy + gold)
- 5 pages: Home, Tentang, Program, Ajak Teman, Daftar
- Port 5173 (via artifact system)
- Theme: Playfair Display + Poppins, kawung/mega mendung/parang SVG motifs
- Key info: Rp160.000 / 5 months, 100 student quota, WA: 0895360396759

### 2. API Server (`artifacts/api-server`)
- Express 5 backend on port 8080
- Registration endpoint: `POST /api/registration` (multer for file uploads, 15mb body limit)
- Google Sheets integration: auto-creates "Pendaftaran Widya Nusantara Academy" spreadsheet, appends registration data
- Google Drive integration: uploads payment proof files
- Gmail integration: sends branded HTML confirmation email with invoice details
- Connection IDs:
  - Google Sheets: `connection:conn_google-sheet_01KNMBKY66ACJXG49AN5RM6CKW`
  - Gmail: `connection:conn_google-mail_01KNMD6N0TVQSNXGD9AQQHR948`

### 3. Blogger/Blogspot Export (`blogger-code/`)
- 7 files ready for pasting into Blogger pages
- `GLOBAL_CSS.html` — CSS to add to Blogger theme
- `BERANDA.html` — Home page
- `TENTANG.html` — About page
- `PROGRAM.html` — Programs page
- `AJAK_TEMAN.html` — Referral program page
- `PENDAFTARAN.html` — Registration form (WhatsApp submission)
- `CARA_INSTALL_DI_BLOGGER.html` — Installation instructions

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Google APIs**: googleapis@148.0.0 (Sheets, Drive, Gmail)
- **File uploads**: multer@1.4.5-lts.2

## Key Files

- `artifacts/widya-nusantara/src/pages/Daftar.tsx` — Registration form (submits to API)
- `artifacts/api-server/src/routes/registration.ts` — Registration endpoint
- `artifacts/api-server/src/lib/googleSheets.ts` — Google Sheets/Drive integration
- `artifacts/api-server/src/lib/gmail.ts` — Gmail confirmation email sender
- `artifacts/api-server/src/routes/index.ts` — API route aggregator
- `artifacts/api-server/src/app.ts` — Express app setup

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Widya Nusantara Academy Key Content
- Biaya: Rp160.000 untuk 5 bulan
- Kuota: 100 murid
- Pendaftaran: 6 April – 27 September 2026
- WA: 0895360396759
- Email: widyaakademi@gmail.com
- Website: www.widyautbk.site
- Rekening: Bank Neo 5859459250325727 a.n. Haposan Sinaga
- Kode unik: 550 (ditambahkan di akhir nominal transfer)

## Known Issues

- Workflow system has persistent port detection issue for widya-nusantara (port 5173) and api-server (port 8080). Servers start correctly (verified via curl and logs) but the workflow system kills them after timeout. Mockup-sandbox (port 8081) works fine. This is a platform-level issue.

## Security Overrides (pnpm-workspace.yaml)

- lodash → 4.18.0
- path-to-regexp → 8.4.0
- picomatch@^2 → 2.3.2
- picomatch@^4 → 4.0.4
- vite catalog → ^7.3.2

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
