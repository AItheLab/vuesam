import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VueSam from '../../../src/index'
import DemoBlock from './components/DemoBlock.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register the library
    app.use(VueSam)
    
    // Register documentation components
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
