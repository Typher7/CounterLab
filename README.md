# CounterLab — Multi Counter Dashboard

![CounterLab screenshot](./public/image.png)

A small React + Vite dashboard for creating and managing multiple counters. The UI uses Tailwind CSS and the project was updated to a green/emerald theme.

## Highlights

- Create named counters (names are trimmed and duplicates are prevented — case-insensitive).
- Increment / decrement counters quickly.
- Reset or delete individual counters.
- Reset all counters to zero or delete all counters at once (delete all prompts for confirmation).
- Data persists in `localStorage` and syncs across browser tabs.

## Tech stack

- React 19 (JSX)
- Vite (dev server + build)
- Tailwind CSS
- ESLint

## Important files

- `src/main.jsx` — app bootstrap
- `src/App.jsx` — root component: state, localStorage persistence, and top-level handlers
- `src/index.css` — imports Tailwind
- `src/components/Header.jsx` — top header with total and Reset All / Delete All actions
- `src/components/AddCounterForm.jsx` — add-counter form (client-side trimming and length check)
- `src/components/CounterList.jsx` — grid container for counter cards
- `src/components/CounterCard.jsx` — individual counter UI

## Run locally

Requirements:
- Node.js 18+ (or a recent LTS)
- npm (or yarn/pnpm)

Install and run dev server:

```powershell
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173 or a nearby port).

Build and preview:

```powershell
npm run build
npm run preview
```

## Behavior notes

- Duplicate prevention: adding a counter whose name matches an existing one (case-insensitive, trimmed) is blocked and the user receives an alert.
- Reset All sets every counter value to 0.
- Delete All clears all counters and asks for confirmation.
- Data key: `multi-counter:counters` in `localStorage`.
- Cross-tab sync: implemented via the `storage` event.

## Theming

The UI currently uses a green/emerald color palette. To further customize colors, update Tailwind configuration or edit component utility classes.

## Developer tips

- Lint: `npm run lint`
- Consider extracting storage logic if you plan to add remote sync or more complex persistence.

## Possible next work we can do

- Replace `alert()` duplicate warnings with inline validation messages in the form
- Add import/export (JSON) for counters
- Add unit tests for core behaviors
- Convert the app to TypeScript

Tell us which item you'd like next and we will implement it.
