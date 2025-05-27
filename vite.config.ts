import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// SCSS global imports para componentes Vue
const scssAdditionalData = '@import "styles/_globals.scss";'

export default defineConfig(({ mode }) => {
  // Development mode for playground
  if (mode === 'development') {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
      root: resolve(__dirname, 'playground'),
      server: {
        port: 3000,
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: scssAdditionalData,
            api: 'modern-compiler' // Use the modern Sass API
          },
        },
      },
    }
  }

  // Production build configuration
  return {
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      cleanVueFileName: true,
      staticImport: true,
      rollupTypes: true,
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueSam',
      formats: ['es', 'umd'],
      fileName: (format) => `vue-sam.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    cssCodeSplit: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssAdditionalData,
        api: 'modern-compiler' // Use the modern Sass API
      },
    },
  },
}
})
