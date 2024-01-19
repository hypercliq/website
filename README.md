# Hypercliq Website Development

Welcome to the development repository for the Hypercliq company website. This project is built using [Next.js](https://nextjs.org/) and was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To start the development server, run one of the following commands:

> npm run dev

Open http://localhost:3000 in your browser to preview the website locally. You can begin editing the pages by modifying the files in the app directory. The changes will be reflected automatically as you save the files.

## Font Optimization

Leveraging the capabilities of [`next/font`](https://nextjs.org/docs/basic-features/font-optimization), the project automatically optimizes and loads [Montserrat](https://fonts.google.com/specimen/Montserrat), ensuring an efficient and performant font delivery to users.

## Image Formats

All images in this project should be in the `.avif` format to optimize file sizes and enhance loading performance.

## Learn More

Explore the following resources to enhance your understanding of Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

## Contributing

### New Features

To contribute a new feature:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your feature details"`.
4. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
5. Submit a pull request to the `main` branch.

### Releases and Hotfixes

For releases and hotfixes, follow the guidelines outlined in Adam Ruka's article [Implementing OneFlow on GitHub, BitBucket, and GitLab](https://www.endoflineblog.com/implementing-oneflow-on-github-bitbucket-and-gitlab). This will ensure a streamlined process for managing releases and addressing hotfixes.

## Automatic Deployment

The website is automatically deployed when pull requests are merged into the `main` branch. Deployment is managed by a [GitHub Action](https://docs.github.com/en/actions) that builds the site and deploys it to [GitHub Pages](https://pages.github.com/).

For more details on GitHub Pages deployment, refer to the GitHub Pages [documentation](https://docs.github.com/en/pages).
