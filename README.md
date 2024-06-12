

# Auth Google GitHub

This is a Next.js project that provides authentication using Google and GitHub.

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
  - [Google Authentication](#google-authentication)
  - [GitHub Authentication](#github-authentication)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [Contributing](#contributing)


## Getting Started

First, clone the repository:

```bash
git clone https://github.com/arsath-eng/auth-google-github.git
cd auth-google-github
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Google Authentication

1. Create a project in the [Google Developers Console](https://console.developers.google.com/).
2. Enable the Google+ API and create OAuth 2.0 credentials.
3. Set the credentials in your environment variables:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### GitHub Authentication

1. Create a new OAuth application in your [GitHub settings](https://github.com/settings/developers).
2. Set the credentials in your environment variables:

```env
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

## Folder Structure

```
├── .next
├── app
│   ├── actions
│   │   └── index.js
│   ├── api
│   │   └── auth
│   │       └── [...nextauth].ts
│   ├── home
│   │   ├── page.jsx
│   │   └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components
│   │   ├── LoginForm.jsx
│   │   └── Logout.jsx
├── node_modules
├── public
├── .env
├── .eslintrc.json
├── .gitignore
├── auth.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
```

### Configuration Files

#### `next.config.mjs`

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.



