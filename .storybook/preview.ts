import type { Preview } from '@storybook/vue3'
import './storybook-base.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1a1a1a', 
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    docs: {
      toc: true,
    },
  },

  decorators: [
    (story) => {
      return {
        components: { story },
        template: '<div class="storybook-wrapper"><story /></div>'
      }
    }
  ],

  tags: ['autodocs']
}

export default preview
