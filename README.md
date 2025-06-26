<h1 align="center">⏱️ FreelanceFlow: Freelancer Management System</h1>
<p align="center">
  A cross-platform desktop app to legitimize billable hours, manage clients/projects, and generate trusted PDF invoices. Built for both freelancers and clients with secure offline-first syncing and seamless cloud integration.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/>
  <img src="https://img.shields.io/badge/Clerk-F53B57?style=flat-square&logo=clerk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white"/>
</p>

---

## 📉 Overview

**FreelanceFlow** helps freelancers and clients collaborate with trust. Freelancers can track time, generate invoices, and sync their work securely. Clients can review logs, approve work, and process payments — all in one place.

---

## ⚙️ Features

- ⏲️ Track time sessions with auto-idle detection
- 📅 Generate and preview PDF invoices
- 📘 Organize clients, projects, and teams
- 🔒 Authenticate securely with Clerk (social auth)
- ❄️ Offline-first with local caching and sync
- 💳 Stripe/PayPal payment integration
- ⛓️ Optional app usage monitoring (privacy-first)
- 📊 Analytics dashboard for freelancers & clients

---

## 🛠️ Tech Stack

### 🚀 Core
- **Electron** — Cross-platform desktop app shell
- **Fastify (TypeScript)** — High-performance backend
- **ReactJS** — Frontend for internal UI
- **Prisma + PostgreSQL** — Relational data & ORM
- **SQLite/LevelDB** — Local offline cache

### 📈 Integrations
- **Clerk** — Social authentication provider
- **Stripe / PayPal** — Secure payment processing
- **PDFKit / Puppeteer** — Invoice PDF generation

---

## 📆 MVP Module Goals

| Module            | Target User  | Offline? | MVP Priority |
|------------------|--------------|----------|--------------|
| Time Tracker     | Freelancer   | ✅       | High         |
| Invoice System   | Freelancer   | ✅       | High         |
| Client View Logs | Client       | ❌       | Medium       |
| Payments         | Client       | ❌       | Medium       |
| Auth with Clerk  | Both         | ❌       | High         |
| Syncing System   | Both         | ✅       | High         |
| Project Mgmt     | Freelancer   | ✅       | High         |

---

## 📂 Folder Structure (Planned)

```bash
freelanceflow/
├─ electron/                 # Electron wrapper
│   ├─ main.ts               # Main Electron entry
│   └─ preload.ts            # Secure preload script
│
├─ backend/
│   ├─ src/
│   │   ├─ controllers/
│   │   ├─ routes/
│   │   ├─ services/
│   │   ├─ plugins/          # Fastify plugins
│   │   ├─ utils/
│   │   └─ index.ts          # Fastify app entry
│   └─ prisma/
│       ├─ schema.prisma
│       └─ migrations/
│
├─ frontend/
│   └─ src/
│       ├─ components/
│       ├─ pages/
│       ├─ hooks/
│       └─ App.tsx
│
├─ shared/                   # Shared types/interfaces
├─ package.json
├─ tsconfig.json
└─ README.md
