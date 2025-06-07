# Next.js + Tailwind CSS Starter

A minimal Next.js 15 project with Tailwind CSS v4, TypeScript, and ESLint. This setup follows the latest best practices and uses the new simplified Tailwind CSS v4 configuration.

## Tech Stack

- **Next.js 15.3.3** - The React framework with App Router
- **React 18.3.1** - JavaScript library for building user interfaces
- **Tailwind CSS 4.1.3** - Utility-first CSS framework
- **TypeScript 5.7.3** - Typed JavaScript
- **ESLint** - Code linting for consistent code style

## Features

- ✅ Next.js App Router (latest routing approach)
- ✅ Tailwind CSS v4 with simplified configuration
- ✅ TypeScript for type safety
- ✅ ESLint for code quality
- ✅ Minimal, clean project structure

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

   Or with yarn:
   ```bash
   yarn install
   ```

   Or with pnpm:
   ```bash
   pnpm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Or with yarn:
   ```bash
   yarn dev
   ```

   Or with pnpm:
   ```bash
   pnpm dev
   ```

3. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── src/
│   └── app/
│       ├── globals.css          # Global styles with Tailwind import
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page component
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript configuration
```

## Key Configuration Changes in v4

### Tailwind CSS v4 Simplifications

- **No `tailwind.config.js` required** - Tailwind CSS v4 works with zero configuration
- **Simplified PostCSS setup** - Only `@tailwindcss/postcss` plugin needed
- **Single import** - Just `@import 'tailwindcss'` in your CSS file

### PostCSS Configuration

```javascript
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

### CSS Import

```css
/* src/app/globals.css */
@import 'tailwindcss';
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [Next.js + Tailwind CSS Guide](https://nextjs.org/docs/app/guides/tailwind-css) - Official integration guide

## License

This project is open source and available under the [MIT License](LICENSE). 