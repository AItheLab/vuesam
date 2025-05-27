// Main entry point for Vue SAM component library
import type { App, Plugin } from 'vue'

// Import global styles
import './styles/index.scss'

// Import components
import SamButton from './components/button/SamButton.vue'
import SamTextField from './components/text-field/SamTextField.vue'

// Export components individually
export { SamButton, SamTextField }

// Export types
export * from './types'

// Install function for Vue.use()
const install = (app: App): void => {
  app.component('SamButton', SamButton)
  app.component('SamTextField', SamTextField)
}

// Export as plugin
const VueSam: Plugin = {
  install,
}

export default VueSam
