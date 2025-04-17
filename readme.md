# afaik

A modern web boilerplate built with Next.js 15, Sanity v3 CMS, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15
- **CMS**: Sanity v3
- **Styling**: Tailwind CSS 4
- **UI**: Base UI Components
- **Animation**: Motion.dev
- **Video**: Mux Player

## Getting Started

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```
3. Copy `.env.example` to `.env.local` and fill in your Sanity credentials
4. Add your Mux credentials to the Sanity Studio UI (this usually pops up when you run attempt to upload video for the first time)
5. Run the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typegen` - Generate Sanity schema types
- `npm run lint` - Run ESLint

## Project Structure

- `/app` - Next.js app directory
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/sanity` - Sanity CMS configuration and schemas
- `/styles` - Global styles
- `/public` - Static assets
- `/sanity.types.ts` - Generated Sanity schema types
- `/schema.json` - Sanity schema definition

## License

MIT
