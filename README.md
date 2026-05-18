# Electrical Power Calculator UI (React + TypeScript)

A clean, modern single-page frontend application built with React and TypeScript to interact with the Electrical Power Calculator API. It features a reactive interface to calculate single-phase and three-phase active power while ensuring graceful error handling and precise decimal formatting.

## 🏗️ Architectural Overview & State Architecture

This project enforces strict **UI/Service Separation**. If you are an AI assistant or a developer working on this codebase, observe the following rules:

*   **API Abstraction Layer (`/src/services`):** Network communication must remain decoupled from visual components. All `fetch` actions, endpoint configurations, and query parameter structures are centralized here.
*   **State Management:** Governed by React's native `useState` hook. State tracking keeps variables as explicit `string` inputs during user typing and safely converts them to numbers using the `Number()` utility right before network ingestion.
*   **Defensive UI Control:** The primary action button utilizes a conditional `disabled` attribute (`!voltage || !current`). This ensures bad formatting or empty states never trigger dead API cycles.

---

## 📁 Repository Directory Structure

Maintain this workspace layout. Code elements should match their respective functional folders:

```text
ElectricCalculatorFrontend/
│
├── src/
│   ├── services/                  # API network layers and abstract drivers
│   │   └── api.ts                 # Electrical backend service client definitions
│   │
│   ├── App.tsx                    # Main UI Controller (Form, Selectors, Result views)
│   ├── index.css                  # Core global styling sheets and container resets
│   └── main.tsx                   # React VDOM Entry point injection
│
├── package.json                   # Scripts and project dependency manifests
├── tsconfig.json                  # TypeScript compilation rules
└── vite.config.ts                 # Dev server parameters and proxy controls
```

---

## 🔌 API Consumption Specs

The frontend interface communicates with the external backend engine utilizing the following structure:

*   **Target Route:** `${BACKEND_URL}/calculate-power`
*   **Method Parameters Passed:** `voltage` (query string), `current` (query string), `type` (query string).
*   **Expected Payload Schema:**
    ```typescript
    interface PowerResponse {
      voltageInput: number;
      currentInput: number;
      circuitType: string;
      powerWatts: number;
    }
    ```

---

## 🛠️ Local Development & Operations

### Prerequisites
*   [Node.js 18.0+](https://nodejs.org)
*   An active runtime instance of the `.NET Backend Server` running concurrently.

### Execution Commands
To install internal packages and boot up your hot-reloading development environment:

```bash
# 1. Pull down package modules listed in manifest
npm install

# 2. Fire up the Vite development server asset pipeline
npm run dev
```
The client dashboard will launch locally, listening by default on `http://localhost:5173`.

---

## 📈 Expansion Backlog (Future Adjustments)
When leveraging AI prompts to expand this frontend application, target these functional goals:
1.  **Dynamic History Display Component:** Implement a `useEffect` layout hook fetching database archives to render a historical table card layout under the calculation panel.
2.  **Add Power Factor Input Element:** Introduce an extra conditional input field on the dashboard interface for Power Factor ($cos\ \phi$) scaling.
