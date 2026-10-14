# ChrisRia Cuisine & Bakery website

Astro static site for ChrisRia Cuisine & Bakery, 8344 Young Rd, Chilliwack BC.

```sh
npm install
npm run dev      # http://localhost:4321/chrisria/
npm run build    # static output in dist/
```

- Content lives in `src/data/site.ts` and `src/data/images.ts`. Components contain no copy.
- `DISCOVERY.md` lists confirmed facts versus open items. Its "blocking launch" list is the launch checklist.
- `DESIGN.md` covers the palette, type, motion and the reasoning behind them.
- Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
  Pages must be set to "GitHub Actions" in the repo settings.
