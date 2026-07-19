# Helio Cloud Economics

A FinOps decision workspace for understanding workload economics, prioritizing savings actions, and connecting cost efficiency to sustainable technology operations.

[Watch the running product demo](docs/demo.webm)

## Why this product matters

Cloud, SaaS, data, and AI spending are often reviewed in separate tools. Helio presents operational health and optimization work in one approachable interface for engineering and finance conversations.

## Intended users

- FinOps practitioners and finance partners
- Cloud platform and sustainability teams
- Engineering leaders responsible for unit economics

## Core workflows

- Review optimized workloads and cost-efficiency indicators
- Inspect workload-level operational signals
- Prioritize and complete savings actions
- Review the architectural patterns behind the cockpit

## Current capabilities

- Portfolio-level cloud economics metrics
- Workload health and efficiency presentation
- Interactive optimization queue
- Architecture route for technical reviewers

## React technical highlights

- React 19 and route-oriented composition
- TanStack Query for cacheable workload signals
- Zustand for optimization action state
- Strict TypeScript, linting, and deterministic tests
- Responsive semantic dashboard components

## Architecture and data flow

Workload signals enter through a query function and are cached as server state. Savings actions use a compact client store, and dashboard metrics are derived from both sources without duplicating state.

## Accessibility and responsive behavior

The interface uses semantic headings, labelled regions, native interactive controls, visible status text in addition to color, keyboard-operable actions, and layouts that adapt to narrower screens. Automated tests cover the central state behavior; a production release should add continuous WCAG audits with assistive-technology review.

## Project structure

- src/App.tsx — cockpit, actions, and architecture route
- src/store.ts — optimization workflow state
- src/App.test.tsx — behavior verification
- docs/demo.webm — clean browser recording

## Run locally

```bash
npm ci
npm test
npm run build
npm run dev
```

For Angular projects, `npm start` is also available for the development server.

## Verification

- Strict TypeScript compilation
- Automated component or state tests
- Production build
- Real-browser interaction check
- Demo-video playback and frame inspection

## Tradeoffs

Local scenarios keep the portfolio review fast and credential-free. Enterprise deployment would add billing exports, allocation tags, forecasts, carbon-intensity feeds, budgets, anomaly detection, and approval policies.

## Roadmap

- Cost allocation and showback views
- Budget forecasting and anomaly alerts
- Carbon-aware workload placement
- Savings-plan recommendation workflows
