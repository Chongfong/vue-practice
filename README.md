# vue-joblists

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Notes

reactive() only takes objects. It does not take primitives like strings, numbers and booleans. It uses `ref()` under the hood.

ref() can take objects or primitives.

ref() has a `.value` property for reassigning, `reactive()` doesn't use `.value` and can't be reassigned.
