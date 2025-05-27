import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Vue SAM',
  description: 'A modern Vue 3 component library',
  base: '/vue-sam/',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/yourusername/vue-sam' }
    ],
    
    sidebar: [
      {
        text: 'Guía',
        items: [
          { text: 'Comenzar', link: '/guide/getting-started' },
          { text: 'Instalación', link: '/guide/installation' },
          { text: 'Theming', link: '/guide/theming' }
        ]
      },
      {
        text: 'API de Componentes',
        collapsed: false,
        items: [
          { text: 'SamButton', link: '/components/button' },
          { text: 'SamTextField', link: '/components/text-field' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/vue-sam' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  },
  
  // Configure Vue
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('sam-')
      }
    }
  },
  
  // Add CSS
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }]
  ],
  
  // Vite configuration for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../src/styles/_globals.scss";`
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '../src'),
      },
    },
  }
})
