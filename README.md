# Vue SAM

<p align="center">
  <img src="https://img.shields.io/npm/v/vue-sam.svg" alt="npm version">
  <img src="https://img.shields.io/npm/l/vue-sam.svg" alt="License">
  <img src="https://img.shields.io/npm/dm/vue-sam.svg" alt="npm downloads">
  <img src="https://img.shields.io/badge/Vue-3.x-brightgreen.svg" alt="Vue 3.x">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue.svg" alt="TypeScript">
</p>

A modern Vue 3 component library built with TypeScript, designed for creating beautiful and accessible user interfaces with a professional dark theme.

## ✨ Features

- 🚀 **Vue 3 Composition API** - Built with the latest Vue 3 features
- 📦 **Tree-shakeable** - Only import what you need
- 🎨 **Customizable** - Comprehensive theming system with CSS variables
- 🌙 **Dark Theme** - Beautiful dark theme out of the box
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant components
- 🔧 **TypeScript** - Full TypeScript support with type definitions
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest
- 📚 **Documented** - Detailed documentation with live examples

## 📦 Installation

```bash
# npm
npm install vue-sam

# yarn
yarn add vue-sam

# pnpm
pnpm add vue-sam
```

## 🚀 Quick Start

### Global Registration

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

```vue
<script setup>
import { SamButton, SamTextField } from 'vue-sam'
</script>

<template>
  <SamButton color="primary">Click me</SamButton>
  <SamTextField v-model="text" label="Enter text" />
</template>
```

## 📚 Documentation

Visit our [documentation site](https://yourusername.github.io/vue-sam) for:

- Complete component API reference
- Interactive examples with live code
- Comprehensive theming guide
- Accessibility guidelines
- Best practices and patterns

### Contributing to Documentation

Our documentation is built with VitePress and follows a standardized structure. To add documentation for a new component:

1. Copy the template: `docs/_template-component.md`
2. Follow the component documentation guide: `docs/README-components.md`
3. Add the component to the sidebar in `docs/.vitepress/config.ts`

```bash
# Start docs development server
pnpm docs:dev

# Build documentation
pnpm docs:build
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 8+ (recommended)

### Setup & Development Modes

```bash
# Clone the repository
git clone https://github.com/yourusername/vue-sam.git
cd vue-sam

# Install dependencies
pnpm install
```

#### **Tres Modos de Desarrollo Disponibles:**

**🎮 Playground Mode** (Interactive component testing)
```bash
pnpm dev
# → http://localhost:3000
# Perfect for rapid prototyping and testing components
```

**📚 Documentation Mode** (Complete documentation site)
```bash
pnpm docs:dev  
# → http://localhost:5173
# Full VitePress documentation with API reference
```

**🔬 Storybook Mode** (Isolated component development)
```bash
pnpm storybook:dev
# → http://localhost:6006
# Component stories with interactive controls
```

#### **Other Commands:**
```bash
# Run tests
pnpm test

# Build library
pnpm build

# Build documentation
pnpm docs:build

# Build Storybook
pnpm storybook:build
```

> 💡 **Pro Tip**: Run multiple modes simultaneously in different terminals for the best development experience!

📖 **Read the complete guides**: 
- [PLAYGROUND-DOCS-GUIDE.md](./PLAYGROUND-DOCS-GUIDE.md) - Playground vs Documentation
- [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) - Storybook usage and best practices

### Project Structure

```
vue-sam/
├── src/
│   ├── components/       # Component source files
│   ├── styles/          # Global styles and variables
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── index.ts         # Main entry point
├── docs/                # VitePress documentation
├── tests/               # Component tests
└── package.json
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Inspired by [Vuetify](https://vuetifyjs.com/), [Element Plus](https://element-plus.org/), and other great Vue libraries
- Built with [Vite](https://vitejs.dev/)
- Documentation powered by [VitePress](https://vitepress.dev/)

## 💖 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation
- 👥 Sharing with others

---

Made with ❤️ by the Vue SAM team
