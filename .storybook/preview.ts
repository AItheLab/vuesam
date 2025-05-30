import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import { themes } from '@storybook/theming'
import ThemeProvider from '@/components/ThemeProvider.vue'
import '@/styles/index.scss'

// Setup Vue app globally for all stories
setup((app) => {
  // Add global plugins, directives, or configurations here if needed
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
      theme: themes.dark, // Tema oscuro predeterminado para UI de Storybook
    },
  },
  decorators: [
    // Decorador simplificado para el ThemeProvider
    (story, context) => {
      const theme = context.globals.theme || 'dark'
      
      return {
        components: { story, ThemeProvider },
        setup() {
          return { theme }
        },
        template: `
          <ThemeProvider :theme="theme">
            <story />
          </ThemeProvider>
        `
      }
    },
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    })
  ],
}

export default preview
