# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a full **Widya Nusantara Academy** bimbel website (UTBK-SNBT tutoring) and a static Blogger/Blogspot export.

## Projects

### 1. Widya Nusantara Academy Website (`artifacts/widya-nusantara`)
- React + Vite webapp with Batik Nusantara aesthetic (deep navy + gold)
- 5 pages: Home, Tentang, Program, Ajak Teman, Daftar
- Port 20306 (via artifact system)
- Theme: Playfair Display + Poppins, kawung/mega mendung/parang SVG motifs
- Key info: Rp160.000 / 5 months, 100 student quota, WA: 0895360396759

### 2. Blogger/Blogspot Export (`blogger-code/`)
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

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
