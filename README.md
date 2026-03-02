# DetailerStack (Standalone)

This is a **Vite + React** project for an affiliate-style directory of software/tools for **mobile car detailing**.

It was originally generated with Base44, but this version has been rebuilt to run **without Base44**.

## Quick start

```bash
npm install
npm run dev
```

Vite will print a local URL such as:

```
Local:   http://localhost:5173/
```

Open that URL in your browser.

## Data

All content currently comes from local mock data:

- `src/data/mockData.js`

If you want to connect a real backend later, replace the in-memory client in:

- `src/api/base44Client.js`

The pages expect a simple API shape:

- `base44.entities.Tool.list(sortField, limit)`
- `base44.entities.Tool.filter(criteria, sortField, limit)`

## Notes

- This app uses **React Router** for page routing.
- It uses **@tanstack/react-query** for data fetching/caching (even though data is local right now).
