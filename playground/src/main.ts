import { createApp } from 'vue'
import App from './App.vue'
import VueSam from '../../src/index'
// Los estilos se importan automáticamente desde el index.ts de la librería

const app = createApp(App)
app.use(VueSam)
app.mount('#app')
