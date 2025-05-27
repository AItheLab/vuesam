import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  
  viteFinal: async (config) => {
    // Mantener la configuración SCSS existente sin cambiarla
    config.css = config.css || {}
    config.css.preprocessorOptions = config.css.preprocessorOptions || {}
    config.css.preprocessorOptions.scss = {
      // Usar la misma configuración relativa que en vite.config.ts
      // pero ajustada para que funcione desde el contexto de Storybook
      additionalData: '@use "@/styles/_globals.scss" as *;',
      api: 'modern-compiler',
      includePaths: [resolve(__dirname, '../src/styles'), resolve(__dirname, '../')]
    }

    // Configurar alias @/* para apuntar a src/*
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    }

    // Añadir el archivo de estilos principal como entry point
    if (!config.optimizeDeps) config.optimizeDeps = {}
    if (!config.optimizeDeps.include) config.optimizeDeps.include = []
    
    return config
  },

  typescript: {
    check: false,
    // reactDocgen: 'react-docgen-typescript', // Opción específica de React, no necesaria para Vue
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    // },
  },

  docs: {
    autodocs: 'tag',
  },
}

export default config
