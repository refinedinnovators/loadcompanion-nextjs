# LoadCompanion NextJS

A modern web application built with Next.js, featuring a beautiful UI powered by Radix UI components.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Git

## Development Setup

1. Clone the repository:
```bash
git clone git@github.com:refinedinnovators/loadcompanion-nextjs.git
cd loadcompanion-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000). The development server features:
- Hot Module Replacement (HMR)
- Fast Refresh
- Development error overlay
- API routes

## Production Deployment

### Building for Production

1. Create a production build:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm run start
# or
yarn start
```

The application will start in production mode at [http://localhost:3000](http://localhost:3000).

### Deployment Recommendations

#### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js:

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Vercel will detect Next.js automatically and configure the build settings
4. Your app will be deployed and available via a Vercel URL

#### Other Hosting Platforms
You can also deploy to any hosting platform that supports Node.js:

1. Run `npm run build` or `yarn build`
2. Use the following files/directories for deployment:
   - `.next`
   - `package.json`
   - `next.config.js`
   - `public` (if you have static files)
3. Install production dependencies: `npm install --production`
4. Start the server: `npm run start`

## Environment Variables

Create a `.env.local` file in the root directory for local development:
```
# Add your environment variables here
```

For production, make sure to set the corresponding environment variables on your hosting platform.

## Project Structure

- `/pages` - Application pages and API routes
- `/public` - Static assets
- `/components` - Reusable React components
- `/styles` - Global styles and CSS modules

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request


