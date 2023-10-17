---

# A Statically Generated Blog using Next.js, Markdown, TypeScript, and Tailwind CSS

This project extends the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) by incorporating TypeScript, offering type safety and an improved development experience.

## Overview

This example showcases the power of Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature, utilizing Markdown files as the data source for blog posts. 

- **Markdown as Data Source**: Blog posts are stored in `/_posts` as Markdown files. Each new Markdown file in this directory becomes a new blog post.
- **Markdown to HTML**: We use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert Markdown files into HTML strings, which are then passed as props to the page.
- **Metadata Handling**: The metadata of each post is processed by [`gray-matter`](https://github.com/jonschlinkert/gray-matter), making it easy to extract front matter from the posts and send it as props to the page.

## Demo

Experience the live demo of the blog: [https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy Your Own

You can deploy this blog example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example), or preview it live on [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

## How to Use

To bootstrap this example, execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with npm, Yarn, or pnpm:

```bash
npx create-next-app --example blog-starter blog-starter-app
```
```bash
yarn create next-app --example blog-starter blog-starter-app
```
```bash
pnpm create next-app --example blog-starter blog-starter-app
```

After setup, your blog will be ready to run. It should be accessible on [http://localhost:3000](http://localhost:3000). For any issues, you can seek help by posting on [GitHub discussions](https://github.com/vercel/next.js/discussions).

## Notes

- The `blog-starter` template uses [Tailwind CSS](https://tailwindcss.com) [v3.0](https://tailwindcss.com/blog/tailwindcss-v3), providing a modern and responsive styling solution.

For more detailed information on deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---
