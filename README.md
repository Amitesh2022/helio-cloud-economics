# Helio Cloud Economics

Helio helps organisations understand and reduce the cost of their online services.

[Watch the product demo](docs/demo.webm)

## Business problem and users

Helio helps organisations understand and reduce the cost of their online services. It is useful for finance teams, service owners, and managers responsible for technology spending.

## Key workflows

- See where money is being spent.
- Compare costs between teams and services.
- Find unusual increases in spending.
- Review possible savings.
- Track cost and environmental impact together.

## React highlights

The product uses React to show separate pages, forms, lists, and live updates. Shared information stays consistent when the user moves between pages. Automated checks confirm that important screens still work.

## Java backend highlights

The Java backend uses Spring Boot. It provides real API endpoints to list, search, and create cost action records. It checks incoming information, returns clear errors, exposes a health check, and includes automated Java tests.

## Architecture and state flow

The browser application calls the Java API on port 8080. The Java service checks the request and keeps the shared product information. After a user creates a record, the API returns the saved result and the browser refreshes the list.

## Accessibility and responsive behaviour

Buttons, forms, and links can be used with a keyboard. Labels explain what each field does, and important information is shown with words, not only colours. The layout also adjusts for tablets and phones.

## Run and verify

These commands install the project, check it, and start it on a computer:

```bash
npm ci
npm run lint
npm test
npm run build
npm run dev
npm run backend:test
npm run backend:build
npm run fullstack
```

## Structure

- `backend/` — the Java API, validation, business rules, and tests.
- `scripts/run-full-stack.mjs` — starts the frontend and backend together.
- `src/` — the product pages, actions, and design.
- `docs/demo.webm` — a short video showing the product.
- `package.json` — the commands and packages needed to run it.
- `README.md` — this simple product guide.

## Tradeoffs and roadmap

This project uses sample information and does not connect to a real company system. A future version could connect to real bills, add budgets, forecasts, alerts, and team targets.
