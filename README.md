# Nuxt Revalidate

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

🧹 Nuxt revalidate module

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/mateuszkulpa/nuxt-revalidate?file=playground%2Fapp.vue) -->

## Quick Setup

1. Add `nuxt-revalidate` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-revalidate

# Using yarn
yarn add --dev nuxt-revalidate

# Using npm
npm install --save-dev nuxt-revalidate
```

2. Add `nuxt-revalidate` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-revalidate'
  ]
})
```
3. Protect `/__revalidate__` endpoint using secret key in `.env` or `nuxt.config.ts`

```dotenv
REVALIDATE_KEY=YOUR_SECRET_KEY
```
```typescript
export default defineNuxtConfig({
  revalidate: {
    key: 'YOUR_SECRET_KEY'
  }
});

```

That's it! You can now call `/__revalidate__?path=ROUTE_TO_REVALIDATE&key=YOUR_SECRET_KEY` and clear cached route.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-revalidate/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-revalidate

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-revalidate.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-revalidate

[license-src]: https://img.shields.io/npm/l/nuxt-revalidate.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-revalidate

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
