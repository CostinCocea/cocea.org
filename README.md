# Costin Cocea — cocea.org

Personal website for [Costin Cocea](https://cocea.org), with About, Projects, Research, and a printable résumé.

## Hosting

This repository serves the site through GitHub Pages from the `main` branch, repository root. `CNAME` preserves the existing `cocea.org` custom domain. Domain DNS remains managed through Cloudflare.

The editable Next.js project and generated static pages are both included. Root `index.html`, `_next/`, `projects/`, `research/`, `resume/`, and the other exported assets are generated files. The root `.nojekyll` enables Next.js assets to be served as-is.

## Development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Main content lives in `src/app/components/Hero.jsx` and `src/app/lib/profile.js`. Contact links are in `src/app/components/Footer.jsx`; styles are in `src/app/globals.css`.

## Publish an update

```sh
npm run build:pages
```

This builds the static site and updates the generated files at the repository root. Review and commit both the source and generated changes, then push to `main`. GitHub Pages publishes the updated site using its existing configuration. Keep `CNAME` and `public/CNAME` set to `cocea.org`.

For a local preview of the static export, `npm start` serves `out/` on http://127.0.0.1:4173 (requires Python 3).

## Design attribution

The initial layout and WebGL shaders were adapted from [Andrei Ilinescu’s portfolio](https://github.com/andreiilinescu/portfolio-website), revision `d708cd5`. The upstream repository did not include a license when retrieved; no new license or ownership claim is made for that source. `CustomShader.js` retains its glfx.js attribution.

The implementation preserves the original visual treatment, with display-synchronized animation, timing independent of refresh rate, light/dark modes, reduced-motion handling, and mobile scrolling. The profile content belongs to Costin Cocea.
