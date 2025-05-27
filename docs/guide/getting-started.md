# Getting Started

Vue SAM is a modern Vue 3 component library built with TypeScript, designed for creating beautiful and accessible user interfaces.

## Quick Start

### Installation

Install Vue SAM using your preferred package manager:

```bash
# npm
npm install vue-sam

# yarn
yarn add vue-sam

# pnpm
pnpm add vue-sam
```

### Global Registration

Register Vue SAM globally in your Vue application:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueSam from 'vue-sam'
import 'vue-sam/styles'

const app = createApp(App)
app.use(VueSam)
app.mount('#app')
```

### Individual Component Import

For better tree-shaking, you can import components individually:

```vue
<script setup>
import { SamButton, SamTextField } from 'vue-sam'
</script>

<template>
  <SamButton color="primary">Click me</SamButton>
  <SamTextField v-model="text" label="Enter text" />
</template>
```

## TypeScript Support

Vue SAM is written in TypeScript and provides complete type definitions. No additional setup is required for TypeScript projects.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { SamButton } from 'vue-sam'
import type { SamButtonProps } from 'vue-sam/types'

const buttonProps: SamButtonProps = {
  color: 'primary',
  variant: 'filled',
  size: 'md'
}
</script>
```

## Browser Support

Vue SAM supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps

- Learn about [theming](/guide/theming) and customization
- Explore the [component library](/components/button)
- Check out our [examples](/examples)
