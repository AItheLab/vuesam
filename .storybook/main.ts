import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Configure SCSS with global variables and mixins
    const scssAdditionalData = `
      @use "@/styles/variables" as *;
      @use "@/styles/mixins" as *;
    `
    
    if (config.css?.preprocessorOptions?.scss) {
      config.css.preprocessorOptions.scss.additionalData = scssAdditionalData
      config.css.preprocessorOptions.scss.includePaths = ['src/styles']
    } else {
      config.css = {
        ...config.css,
        preprocessorOptions: {
          scss: {
            additionalData: scssAdditionalData,
            includePaths: ['src/styles']
          }
        }
      }
    }

    // Configure alias
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '/src'
      }
    }

    // Fix for custom elements hot reload issue
    if (config.server) {
      config.server.hmr = {
        ...config.server.hmr,
        overlay: false
      }
    } else {
      config.server = {
        hmr: {
          overlay: false
        }
      }
    }

    return config
  },
}

export default config
