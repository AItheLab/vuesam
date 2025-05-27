# Installation

## Prerequisites

- Node.js 16.x or higher
- Vue 3.4.0 or higher

## Package Managers

### npm

```bash
npm install vue-sam
```

### Yarn

```bash
yarn add vue-sam
```

### pnpm

```bash
pnpm add vue-sam
```

## Setup

### Global Registration

Register all components globally in your main application file:

```js
// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueSam from 'vue-sam'

// Import styles
import 'vue-sam/styles'

const app = createApp(App)

// Register all components
app.use(VueSam)

app.mount('#app')
```

### Individual Component Import

For better tree-shaking and smaller bundle sizes, import only the components you need:

```vue
<script setup>
import { SamButton, SamTextField } from 'vue-sam'
// Don't forget to import styles
import 'vue-sam/styles'
</script>

<template>
  <div>
    <SamButton color="primary">Click me</SamButton>
    <SamTextField v-model="text" label="Enter text" />
  </div>
</template>
```

### Auto Import with unplugin-vue-components

You can use `unplugin-vue-components` for automatic component registration:

```bash
npm install -D unplugin-vue-components
```

Then configure in your `vite.config.js`:

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        // Vue SAM resolver
        (componentName) => {
          if (componentName.startsWith('Sam')) {
            return {
              name: componentName,
              from: 'vue-sam',
            }
          }
        },
      ],
    }),
  ],
})
```

## TypeScript Support

Vue SAM is written in TypeScript and provides full type definitions out of the box.

### Type Imports

```typescript
import type { SamButtonProps, SamTextFieldProps } from 'vue-sam'
```

### Volar Support

For the best development experience with Vue SAM, we recommend using [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) in VS Code.

## Styles

Vue SAM styles are built with SCSS and use CSS custom properties for theming. The compiled CSS is included in the package.

### Basic Import

```js
// Import all styles
import 'vue-sam/styles'
```

### Custom Theme

You can customize the theme by overriding CSS custom properties:

```css
:root {
  --sam-color-primary: #your-color;
  --sam-color-secondary: #your-color;
  /* ... other custom properties */
}
```

## CDN Usage

You can also use Vue SAM via CDN for prototyping:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Vue 3 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <!-- Vue SAM -->
  <link rel="stylesheet" href="https://unpkg.com/vue-sam/dist/style.css">
  <script src="https://unpkg.com/vue-sam/dist/vue-sam.umd.js"></script>
</head>
<body>
  <div id="app">
    <sam-button color="primary">Hello Vue SAM!</sam-button>
  </div>

  <script>
    const { createApp } = Vue
    
    createApp({
      // Your app configuration
    }).use(VueSam).mount('#app')
  </script>
</body>
</html>
```

## Next Steps

- Check out the [Getting Started](/guide/getting-started) guide
- Explore the [Components](/components/button) documentation
- Learn about [Theming](/guide/theming)
