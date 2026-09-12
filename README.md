# Portfolio

Allen Lazatin's portfolio, migrated to a component-based React and TypeScript application without changing the original visual design.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS v4
- shadcn-compatible component structure
- Existing portfolio CSS retained as the visual source of truth

## Setup

```bash
npm install
npm run dev
```

## Contact form

Copy `.env.example` to `.env.local` and replace the placeholder with a Formspree endpoint:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without a configured endpoint, the form reports that setup is pending and never displays a false success message.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

The production build is written to `dist/` and can be deployed to Vercel.
