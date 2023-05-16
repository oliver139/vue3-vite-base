# vue3-vite-base

## What's this
A Vue 3 base for cloning to start a new website development. Vite + Vue 3 composition API is used.

## Feature included

### Vue
- [Vue router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) (Global State Management)
- [Oh Vue Icon](https://oh-vue-icons.js.org/) (Icon Library for Vue)
- [vue-i18n](https://vue-i18n.intlify.dev/) (Make the Website Provide Multi-languages support)
- [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) (Connect Google Analytics)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)  
(Auto import `ref`, `reactive` & `defineProps` etc. common used keywords in Vue 3)

### PostCSS
- [normalize.css](https://necolas.github.io/normalize.css/) (CSS Reset)
- [PostCSS](https://postcss.org/) Plugins:
  - [postcss-preset-env](https://preset-env.cssdb.org/) (Include Common PostCSS Plugins)
  - [postcss-nested](https://www.npmjs.com/package/postcss-nested) (Provide SCSS-like nesting syntax)
  - [postcss-scss](https://www.npmjs.com/package/postcss-scss) (Can use @mixin)
  - [postcss-extend-rule](https://www.npmjs.com/package/postcss-extend-rule) (Can use @extend)

### JavaScript
- [ESLint](https://eslint.org/) with kind of strict rules, check out `.eslintrc/cjs`
- [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) (Provide hints on a11y things on the HTML code)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
or
```sh
npm run serve
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
