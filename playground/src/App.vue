<template>
  <div class="playground">
    <!-- Navigation Header -->
    <nav class="playground-nav">
      <div class="nav-container">
        <div class="nav-brand">
          <h1>Vue SAM</h1>
          <span class="nav-badge">Playground</span>
        </div>
        
        <div class="nav-links">
          <a 
            href="http://localhost:5173" 
            target="_blank" 
            class="nav-link nav-link--primary"
          >
            📚 Ver Documentación
          </a>
          <a 
            href="https://github.com/yourusername/vue-sam" 
            target="_blank" 
            class="nav-link"
          >
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </nav>

    <div class="playground-layout">
      <!-- Sidebar Navigation -->
      <aside class="playground-sidebar">
        <div class="sidebar-content">
          <h3>Componentes</h3>
          <nav class="sidebar-nav">
            <a href="#buttons" class="sidebar-link" @click="scrollTo('buttons')">
              <i class="fas fa-click"></i>
              Buttons
            </a>
            <a href="#textfields" class="sidebar-link" @click="scrollTo('textfields')">
              <i class="fas fa-edit"></i>
              Text Fields
            </a>
            <a href="#interactive" class="sidebar-link" @click="scrollTo('interactive')">
              <i class="fas fa-play"></i>
              Demo Interactivo
            </a>
          </nav>

          <div class="sidebar-section">
            <h4>Recursos</h4>
            <div class="resource-links">
              <a href="http://localhost:5173/components/button" target="_blank" class="resource-link">
                📖 SamButton Docs
              </a>
              <a href="http://localhost:5173/components/text-field" target="_blank" class="resource-link">
                📖 SamTextField Docs
              </a>
              <a href="http://localhost:5173/guide/getting-started" target="_blank" class="resource-link">
                🚀 Guía de Inicio
              </a>
            </div>
          </div>

          <div class="sidebar-footer">
            <p>🔥 Modo desarrollo</p>
            <small>Para documentación completa, visita el sitio oficial</small>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="playground-main">
        <header class="playground-header">
          <h1>Vue SAM Playground</h1>
          <p>Experimenta y prueba todos los componentes de Vue SAM en tiempo real</p>
          
          <div class="header-actions">
            <a 
              href="http://localhost:5173" 
              target="_blank" 
              class="action-button action-button--primary"
            >
              📚 Ir a Documentación Completa
            </a>
          </div>
        </header>

        <div class="playground-content">
          <!-- Button Section -->
          <section id="buttons" class="playground-section">
            <div class="section-header">
              <h2>🔘 Buttons</h2>
              <a href="http://localhost:5173/components/button" target="_blank" class="docs-link">
                Ver Documentación Completa →
              </a>
            </div>
            
            <div class="demo-grid">
              <div class="demo-group">
                <h3>Variantes</h3>
                <div class="demo-row">
                  <SamButton variant="filled">Filled</SamButton>
                  <SamButton variant="outlined">Outlined</SamButton>
                  <SamButton variant="text">Text</SamButton>
                  <SamButton variant="tonal">Tonal</SamButton>
                </div>
              </div>

              <div class="demo-group">
                <h3>Colores</h3>
                <div class="demo-row">
                  <SamButton color="primary">Primary</SamButton>
                  <SamButton color="secondary">Secondary</SamButton>
                  <SamButton color="success">Success</SamButton>
                  <SamButton color="warning">Warning</SamButton>
                  <SamButton color="error">Error</SamButton>
                  <SamButton color="info">Info</SamButton>
                </div>
              </div>

              <div class="demo-group">
                <h3>Tamaños</h3>
                <div class="demo-row">
                  <SamButton size="xs">XS</SamButton>
                  <SamButton size="sm">SM</SamButton>
                  <SamButton size="md">MD</SamButton>
                  <SamButton size="lg">LG</SamButton>
                  <SamButton size="xl">XL</SamButton>
                </div>
              </div>

              <div class="demo-group">
                <h3>Estados</h3>
                <div class="demo-row">
                  <SamButton disabled>Disabled</SamButton>
                  <SamButton loading>Loading</SamButton>
                  <SamButton rounded>Rounded</SamButton>
                  <SamButton icon="fas fa-heart">With Icon</SamButton>
                </div>
              </div>
            </div>
          </section>

          <!-- TextField Section -->
          <section id="textfields" class="playground-section">
            <div class="section-header">
              <h2>✏️ Text Fields</h2>
              <a href="http://localhost:5173/components/text-field" target="_blank" class="docs-link">
                Ver Documentación Completa →
              </a>
            </div>
            
            <div class="demo-grid">
              <div class="demo-group">
                <h3>Variantes</h3>
                <div class="form-column">
                  <SamTextField
                    v-model="text1"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Enter text..."
                  />
                  <SamTextField
                    v-model="text2"
                    label="Filled"
                    variant="filled"
                    placeholder="Enter text..."
                  />
                  <SamTextField
                    v-model="text3"
                    label="Underlined"
                    variant="underlined"
                    placeholder="Enter text..."
                  />
                </div>
              </div>

              <div class="demo-group">
                <h3>Características</h3>
                <div class="form-column">
                  <SamTextField
                    v-model="text4"
                    label="Con pista"
                    hint="Este es un texto de ayuda útil"
                  />
                  <SamTextField
                    v-model="text5"
                    label="Con error"
                    error="Este campo es requerido"
                  />
                  <SamTextField
                    v-model="text6"
                    label="Limpiable"
                    clearable
                  />
                  <SamTextField
                    v-model="text7"
                    label="Con contador"
                    :max-length="20"
                  />
                </div>
              </div>

              <div class="demo-group">
                <h3>Con Iconos</h3>
                <div class="form-column">
                  <SamTextField
                    v-model="text8"
                    label="Usuario"
                    prepend-icon="fas fa-user"
                  />
                  <SamTextField
                    v-model="text9"
                    label="Buscar"
                    append-icon="fas fa-search"
                    clearable
                  />
                  <SamTextField
                    v-model="text10"
                    label="Email"
                    prepend-icon="fas fa-envelope"
                    append-icon="fas fa-check"
                    type="email"
                  />
                </div>
              </div>

              <div class="demo-group">
                <h3>Tipos de Entrada</h3>
                <div class="form-column">
                  <SamTextField
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    prepend-icon="fas fa-lock"
                  />
                  <SamTextField
                    v-model="number"
                    label="Número"
                    type="number"
                    prepend-icon="fas fa-hashtag"
                  />
                  <SamTextField
                    v-model="tel"
                    label="Teléfono"
                    type="tel"
                    prepend-icon="fas fa-phone"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- Interactive Demo -->
          <section id="interactive" class="playground-section">
            <div class="section-header">
              <h2>🎮 Demo Interactivo</h2>
              <p>Prueba la validación en tiempo real y la interacción entre componentes</p>
            </div>
            
            <div class="interactive-demo">
              <div class="form-column">
                <SamTextField
                  v-model="username"
                  label="Nombre de usuario"
                  prepend-icon="fas fa-user"
                  :error="usernameError"
                  required
                />
                <SamTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  prepend-icon="fas fa-envelope"
                  :error="emailError"
                  required
                />
                <SamTextField
                  v-model="message"
                  label="Mensaje"
                  prepend-icon="fas fa-comment"
                  :max-length="100"
                  hint="Comparte tus pensamientos..."
                  clearable
                />
                
                <div class="button-group">
                  <SamButton
                    color="primary"
                    :loading="submitting"
                    @click="handleSubmit"
                  >
                    Enviar
                  </SamButton>
                  <SamButton
                    variant="outlined"
                    @click="handleReset"
                  >
                    Limpiar
                  </SamButton>
                </div>
              </div>
              
              <div v-if="submitted" class="result-box">
                <h4>✅ Datos del Formulario:</h4>
                <pre>{{ formData }}</pre>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// TextField demo values
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const text5 = ref('')
const text6 = ref('¡Límpiame!')
const text7 = ref('')
const text8 = ref('')
const text9 = ref('')
const text10 = ref('')
const password = ref('')
const number = ref('')
const tel = ref('')

// Interactive demo
const username = ref('')
const email = ref('')
const message = ref('')
const submitting = ref(false)
const submitted = ref(false)

const usernameError = computed(() => {
  if (!username.value) return ''
  return username.value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : ''
})

const emailError = computed(() => {
  if (!email.value) return ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return !emailRegex.test(email.value) ? 'Por favor ingresa un email válido' : ''
})

const formData = computed(() => ({
  username: username.value,
  email: email.value,
  message: message.value
}))

const handleSubmit = async () => {
  if (usernameError.value || emailError.value || !username.value || !email.value) {
    return
  }
  
  submitting.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  submitting.value = false
  submitted.value = true
}

const handleReset = () => {
  username.value = ''
  email.value = ''
  message.value = ''
  submitted.value = false
}

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.playground {
  min-height: 100vh;
  background-color: var(--sam-color-background);
  color: var(--sam-color-text-primary);
}

/* Navigation Header */
.playground-nav {
  background-color: var(--sam-color-background-secondary);
  border-bottom: 1px solid var(--sam-color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-brand h1 {
  font-size: 1.5rem;
  margin: 0;
  background: linear-gradient(135deg, var(--sam-color-primary), var(--sam-color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-badge {
  background-color: var(--sam-color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--sam-color-text-secondary);
  transition: all 0.2s;
  font-weight: 500;
}

.nav-link:hover {
  background-color: var(--sam-color-background-tertiary);
  color: var(--sam-color-text-primary);
}

.nav-link--primary {
  background-color: var(--sam-color-primary);
  color: white;
}

.nav-link--primary:hover {
  background-color: var(--sam-color-primary-dark);
  color: white;
}

/* Layout */
.playground-layout {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}

/* Sidebar */
.playground-sidebar {
  width: 280px;
  background-color: var(--sam-color-background-secondary);
  border-right: 1px solid var(--sam-color-border);
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  overflow-y: auto;
}

.sidebar-content {
  padding: 2rem;
}

.sidebar-content h3 {
  margin-bottom: 1rem;
  color: var(--sam-color-text-primary);
  font-size: 1.1rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--sam-color-text-secondary);
  transition: all 0.2s;
  font-weight: 500;
}

.sidebar-link:hover {
  background-color: var(--sam-color-background-tertiary);
  color: var(--sam-color-primary);
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section h4 {
  margin-bottom: 1rem;
  color: var(--sam-color-text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.resource-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.resource-link {
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: var(--sam-color-text-secondary);
  font-size: 0.875rem;
  transition: all 0.2s;
}

.resource-link:hover {
  background-color: var(--sam-color-background-tertiary);
  color: var(--sam-color-primary);
}

.sidebar-footer {
  border-top: 1px solid var(--sam-color-border);
  padding-top: 1rem;
  text-align: center;
}

.sidebar-footer p {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  color: var(--sam-color-success);
}

.sidebar-footer small {
  color: var(--sam-color-text-secondary);
  line-height: 1.4;
}

/* Main Content */
.playground-main {
  flex: 1;
  min-width: 0;
}

.playground-header {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, 
    var(--sam-color-background-secondary), 
    var(--sam-color-background-tertiary));
  border-bottom: 1px solid var(--sam-color-border);
}

.playground-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--sam-color-primary), var(--sam-color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.playground-header p {
  color: var(--sam-color-text-secondary);
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.header-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.action-button--primary {
  background-color: var(--sam-color-primary);
  color: white;
  box-shadow: 0 4px 12px rgba(var(--sam-color-primary-rgb), 0.3);
}

.action-button--primary:hover {
  background-color: var(--sam-color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--sam-color-primary-rgb), 0.4);
}

.playground-content {
  padding: 2rem;
}

.playground-section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--sam-color-border);
}

.section-header h2 {
  font-size: 1.875rem;
  margin: 0;
  color: var(--sam-color-text-primary);
}

.docs-link {
  color: var(--sam-color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.docs-link:hover {
  color: var(--sam-color-primary-dark);
  text-decoration: underline;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.demo-group {
  background-color: var(--sam-color-background-secondary);
  border: 1px solid var(--sam-color-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.demo-group h3 {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--sam-color-text-secondary);
  border-bottom: 1px solid var(--sam-color-border);
  padding-bottom: 0.5rem;
}

.demo-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.interactive-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  background-color: var(--sam-color-background-secondary);
  border: 1px solid var(--sam-color-border);
  border-radius: 0.75rem;
  padding: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.result-box {
  background-color: var(--sam-color-background-tertiary);
  border: 1px solid var(--sam-color-success);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.result-box h4 {
  margin-bottom: 1rem;
  color: var(--sam-color-success);
}

.result-box pre {
  background-color: var(--sam-color-background);
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  border: 1px solid var(--sam-color-border);
}

@media (max-width: 1024px) {
  .playground-layout {
    flex-direction: column;
  }
  
  .playground-sidebar {
    width: 100%;
    height: auto;
    position: static;
  }
  
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .playground-header h1 {
    font-size: 2rem;
  }
  
  .interactive-demo {
    grid-template-columns: 1fr;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }
}
</style>
