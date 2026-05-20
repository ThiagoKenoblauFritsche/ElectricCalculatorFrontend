# Electrical Power Calculator UI (React + TypeScript)

A clean, modern single-page frontend application built with React, TypeScript, and Vite. It serves as the user-facing interface for the production Electrical Power Calculator API hosted on Render.

## 🏗️ Architectural Overview & Integration Layer

*   **API Network Driver (`/src/services/api.ts`):** Network communication is isolated from UI views. Queries are safely processed using structured multi-segment URL concatenation (`domain + extension + route`) combined with explicit parameter shielding via `encodeURIComponent` to prevent compilation or text-parsing drops inside the host build pipeline.
*   **Target Production Server Host:** `https://onrender.com`

---

## 🛠️ Local Development & Operations

### Prerequisites
*   [Node.js 18.0+](https://nodejs.org)

### Execution Commands
```bash
# Install local node packages
npm install

# Boot up the Vite hot-reloading pipeline
npm run dev
```

---

## 📈 Next Expansion Backlog (Database Phase)
1.  **Migrate to Remote PostgreSQL:** Transition the C# backend away from local SQLite architecture toward an external SQL provider cluster (e.g., Supabase or Render Postgres).
2.  **History Panel Render:** Build an interactive frontend list dashboard that queries the future `/calculation-history` table records endpoint.
