---

# Enhanced Next.js with TypeScript and Tailwind CSS

Leveraging TypeScript, this enhanced [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) offers type safety and a refined development experience.

## Quick Overview

- **Static Generation with Next.js**: Uses Markdown files as blog posts' data source.
- **Markdown to HTML Conversion**: Utilizes [`remark`](https://github.com/remarkjs/remark) for converting Markdown to HTML.
- **Efficient Metadata Processing**: Implements [`gray-matter`](https://github.com/jonschlinkert/gray-matter) for easy metadata extraction from posts.

## Live Demo

Check out the demo here: [https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deployment

Deploy using [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter) or preview on [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter).

## Getting Started

Initialize with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app):

```bash
npx create-next-app --example blog-starter blog-starter-app
```
```bash
yarn create next-app --example blog-starter blog-starter-app
```
Visit [http://localhost:3000](http://localhost:3000) post-setup. For support, visit [GitHub discussions](https://github.com/vercel/next.js/discussions).

## Additional Info

- Uses [Tailwind CSS v3.0](https://tailwindcss.com/blog/tailwindcss-v3) for modern, responsive design.
- For deployment details, see [Next.js deployment documentation](https://nextjs.org/docs/deployment).

--- 
